import React from "react";
import styles from "./Body.module.css";
interface BodyProps {
  children: React.ReactNode;
}
export const Body = ({ children }: BodyProps) => {
  return <div className={styles.Body}>{children}</div>;
};
