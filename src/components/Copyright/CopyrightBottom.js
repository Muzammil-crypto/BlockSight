import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
export const CopyrightBottom = () => {
  const Copyright = "Copyright © 2022. Dapp University. All rights reserved.";
  return (
    <div className={styles.copyrightStyle}>
      <text className={styles.font}>{Copyright}</text>
    </div>
  );
};
