import { ReactNode } from "react";
import styles from "./Content.module.scss";

interface ContentProps {
  children: ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <div className={styles.main}>{children}</div>;
};
