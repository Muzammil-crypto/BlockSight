import React from "react";
import { CounterNumbers } from "./CounterText/CounterNumbers";
import { CounterText } from "./CounterText/counterText";
import styles from "./countDownStyle.module.scss";
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={styles.counterDiv}>
      <CounterNumbers value={value} />
      <br />
      <CounterText value={type} />
    </div>
  );
};

export default DateTimeDisplay;
