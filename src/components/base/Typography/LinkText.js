import React from "react";
import styles from "./styles.module.scss";

export const LinkText = ({ text }) => {
  return (
    <div>
      <text className={styles.linkText}>{text}</text>
    </div>
  );
};
