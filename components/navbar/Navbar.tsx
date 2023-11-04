"use client";

import styles from "./Navbar.module.css";
import { IconSearch, IconMoonFilled, IconMenuDeep } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteInfo } from "@/lib/data";
import ThemeButton from "../theme-button/ThemeButton";
import { NavbarWrapper } from "react-show-hide-sticky-navbar";

function Navbar() {
  const pathname = usePathname();

  return (
    <NavbarWrapper>
      <nav className={styles.Navbar}>
        <div className={styles.NavbarHeader}>
          <div className={styles.NavHeaderIconsLeft}>
            <div className={styles.IconWrapper}>
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
