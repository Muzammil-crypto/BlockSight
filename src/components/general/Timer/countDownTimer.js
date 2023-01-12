import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./hooks/useCountdown";
import styles from "./countDownStyle.module.scss";
import { Typography } from "../../base/Typography/Typography";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showcounter}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.countdownlink}
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <Typography text={" : "} />
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />

        <Typography text={" : "} />

        <DateTimeDisplay value={minutes} type={"Min"} isDanger={false} />
        <Typography text={" : "} />

        <DateTimeDisplay value={seconds} type={"Sec"} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};

export default CountdownTimer;
