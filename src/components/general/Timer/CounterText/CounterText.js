import React from "react";
import styles from "../countDownStyle.module.scss";

export const CounterText = ({ value }) => {
  return <text className={styles.counterText}>{value}</text>;
};
