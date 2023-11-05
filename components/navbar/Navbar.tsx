"use client";

import styles from "./Navbar.module.css";
import { IconSearch, IconMoonFilled, IconMenuDeep } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems, siteInfo } from "@/lib/data";
import ThemeButton from "../theme-button/ThemeButton";
import { NavbarWrapper } from "react-show-hide-sticky-navbar";
import { useState } from "react";

import React, { useRef, useEffect } from "react";

function Navbar() {
  // update state when menu opens
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!menuOpen);
  }

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setMenuOpen(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  /**
   * Component that alerts if you click outside of it
   */
  function OutsideAlerter(props: any) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
  }

  return (
    <NavbarWrapper>
      <nav className={styles.Navbar}>
        <div className={styles.NavbarHeader}>
          <div className={styles.NavHeaderIconsLeft}>
            {menuOpen && (
              <div className={styles.DropdownMenu}>
                <OutsideAlerter>
                  {menuItems.map((item) => (
                    <span className={`${styles.Options}`}>
                      <div className={styles.OptionWrapper}>{item.title}</div>
                    </span>
                  ))}
                </OutsideAlerter>
              </div>
            )}
            <div onClick={handleMenuOpen} className={styles.IconWrapper}>
              <IconMenuDeep size={20} style={{ transform: "rotate(180deg)" }} />
            </div>
            <ThemeButton />
          </div>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            href="/"
          >
            <h1>{siteInfo.title}</h1>
          </Link>
          <div className={styles.IconWrapper}>
            <IconSearch size={20} />
          </div>
        </div>
        <hr></hr>
      </nav>
    </NavbarWrapper>
  );
}

export default Navbar;
