import React from "react";
import styles from "./gridStyle.module.scss";

export const GridText = ({ text }) => {
  return (
    <div>
      <p className={styles.pright}>{text}</p>
    </div>
  );
};
