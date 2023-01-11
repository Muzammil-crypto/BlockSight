import React from "react";
import { DescriptionText } from "../../src/components/Typography/DescriptionText";
import CountdownTimer from "../../src/components/Timer/countDownTimer";
import { Typography } from "../../src/components/Typography/Typography";
import { expire, secdes, secHeading, warning } from "../../src/constants/texts";
import styles from "../../src/components/timer/countDownStyle.module.scss";
import style from "./styles/styles.module.scss";
import { LinkText } from "../../src/components/Typography/LinkText";
export const SectionTwo = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className={styles.center}>
      <div className={style.secHeading}>
        <Typography text={secHeading} />
      </div>
      <DescriptionText text={secdes} />

      <LinkText text={expire} />
      <div className={styles.timer}>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
      <div>
        <DescriptionText text={warning} />
      </div>
      <br />
    </div>
  );
};
