import React from "react";
import styles from "./styles.module.scss";
export const Button = ({ title }) => {
  return <button className={styles.buttonNav}>{title}</button>;
};
