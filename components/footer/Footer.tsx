import Link from "next/link";
import styles from "./Footer.module.css";
import { siteInfo } from "@/lib/data";

function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <div className={styles.FooterContainer}>
      <div>
        &copy; <span>{getYear()}</span>{" "}
        <Link style={{ color: "inherit" }} href="/">
          {siteInfo.title}
        </Link>{" "}
        •{" "}
        <Link
          target="_blank"
          style={{ color: "inherit" }}
          href="https://github.com/abhinishere/nextjs-tech-magazine-template"
        >
          GitHub
        </Link>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
}

export default Footer;
