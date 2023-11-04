"use client";

import { menuItems } from "@/lib/data";
import styles from "./DesktopMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopMenu() {
  const pathname = usePathname();
  return (
    <div className={styles.DesktopMenu}>
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
  );
}

export default DesktopMenu;
