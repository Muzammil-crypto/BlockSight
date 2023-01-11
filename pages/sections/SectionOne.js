import React from "react";
import { DescriptionText } from "../../src/components/Typography/DescriptionText";
import { NavBar } from "../../src/components/NavigationBar.js/NavBar";
import { Typography } from "../../src/components/Typography/Typography";
import { VideoCard } from "../../src/components/VideoCard/VideoCard";
import { firstDes, TopHeading } from "../../src/constants/texts";
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
