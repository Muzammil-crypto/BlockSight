import React from "react";
import styles from "./styles.module.scss";

export const DescriptionText = ({ text }) => {
  return (
    <div>
      <text className={styles.description}>{text}</text>
    </div>
  );
};
