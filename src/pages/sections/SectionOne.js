import React from "react";
import { DescriptionText } from "../../components/base/Typography/DescriptionText";
import { NavBar } from "../../components/general/NavigationBar.js/NavBar";
import { Typography } from "../../components/base/Typography/Typography";
import { VideoCard } from "../../components/general/VideoCard/VideoCard";
import { firstDes, TopHeading } from "../../constants/texts";
import styles from "./styles/styles.module.scss";
import { HeadSet } from "../../components/general/HeaderTitle/Head";
export const SectionOne = () => {
  return (
    <>
      <HeadSet />

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
