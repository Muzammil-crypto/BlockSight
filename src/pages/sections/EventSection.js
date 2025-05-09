import React from "react";
import { DescriptionText } from "../../components/base/Typography/DescriptionText";
import CountdownTimer from "../../components/general/Timer/countDownTimer";
import { Typography } from "../../components/base/Typography/Typography";
import { expire, secdes, secHeading, warning } from "../../constants/texts";
import styles from "../../components/general/Timer/countDownStyle.module.scss";
import style from "./styles/styles.module.scss";
import { LinkText } from "../../components/base/Typography/LinkText";
export const EventSection = () => {
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
