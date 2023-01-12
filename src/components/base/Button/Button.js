import React from "react";
import styles from "./styles.module.scss";
export const Button = ({ title, to }) => {
  return <button className={styles.buttonGen}>{title}</button>;
};
