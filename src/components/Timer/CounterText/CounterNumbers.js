import React from "react";
import styles from "../countDownStyle.module.scss";
export const CounterNumbers = ({ value }) => {
  return <text className={styles.counterNumbers}>{value}</text>;
};
