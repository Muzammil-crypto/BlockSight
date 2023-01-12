import React from "react";
import { SiNike } from "react-icons/si";
import { DescriptionText } from "../Typography/DescriptionText";
import styles from "./styles.module.scss";

export const IconText = () => {
  return (
    <div className={styles.iconDiv}>
      <SiNike className={styles.icon} size={25} color={"green"} />
      <DescriptionText text={"Feature 2 All Past and Future Masterclasses"} />
    </div>
  );
};
