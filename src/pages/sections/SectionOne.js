import React from "react";
import { DescriptionText } from "../../components/Typography/DescriptionText";
import { NavBar } from "../../components/NavigationBar.js/NavBar";
import { Typography } from "../../components/Typography/Typography";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { firstDes, TopHeading } from "../../constants/texts";
import styles from "./styles/styles.module.scss";
export const SectionOne = () => {
  return (
    <>
      <NavBar />
      <div className={styles.center}>
        <Typography text={TopHeading} />
        <br />
        <DescriptionText text={firstDes} />
      </div>
      <VideoCard />
    </>
  );
};
