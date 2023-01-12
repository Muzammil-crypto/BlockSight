import React from "react";
import ReactPlayer from "react-player";
import styles from "./styles.module.scss";
export const VideoCard = () => {
  const URL =
    "https://www.youtube.com/watch?v=5jpgMXt1Z9Y&ab_channel=edureka%21";
  return (
    <div className={styles.videoCard}>
      <ReactPlayer url={URL} />
    </div>
  );
};
