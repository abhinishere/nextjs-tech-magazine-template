import Markdown from "react-markdown";
import styles from "./MarkdownWrapper.module.css";
import { ReactNode } from "react";

interface Props {
  children: string;
}
const MarkdownWrapper = ({ children }: Props) => {
  return <Markdown className={styles.MarkdownWrapper}>{children}</Markdown>;
};

export default MarkdownWrapper;
