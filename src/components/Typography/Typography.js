import React from "react";
import styles from "./styles.module.scss";
export const Typography = ({ text }) => {
  return (
    <div>
      <text className={styles.heading}>{text}</text>
    </div>
  );
};
