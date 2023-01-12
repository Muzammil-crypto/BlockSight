import React from "react";
import styles from "./styles.module.scss";

export const SubHeading = ({ text }) => {
  return (
    <div>
      <text className={styles.subHeading}>{text}</text>
    </div>
  );
};
