"use client";

import { menuItems } from "@/lib/data";
import styles from "./Navbar.module.css";
import { IconSearch, IconMoonFilled, IconMenuDeep } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteInfo } from "@/lib/data";
import { useEffect, useState } from "react";
import ThemeButton from "../theme-button/ThemeButton";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.Navbar}>
      <div className={styles.NavHeader}>
        <div className={styles.NavHeaderIconsLeft}>
          <div className={styles.IconWrapper}>
            <IconMenuDeep size={20} style={{ transform: "rotate(180deg)" }} />
          </div>
          <ThemeButton />
        </div>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} href="/">
          <h1>{siteInfo.title}</h1>
        </Link>
        <div className={styles.IconWrapper}>
          <IconSearch size={20} />
        </div>
      </div>
      <hr></hr>
      <div className={styles.NavMenu}>
        {menuItems.map((item) => (
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            href={item.href}
            className={`${
              item.href === pathname
                ? styles.ActiveLinkWrapper
                : styles.InactiveLinkWrapper
            }`}
            key={item.title}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
