import React from "react";
import { Button } from "../../components/Button/Button";
import { DescriptionText } from "../../components/Typography/DescriptionText";
import { GridSection } from "../../components/GridView/GridSection";
import { Typography } from "../../components/Typography/Typography";
import { desthirdSec, headingthirdSec } from "../../constants/texts";
import styles from "./styles/styles.module.scss";
export const SectionThree = () => {
  return (
    <div className={styles.secHeading}>
      <Button title={"Hold your spot now"} />
      <div className={styles.secHeading}>
        <Typography text={headingthirdSec} />
        <br />
        <br />
        <DescriptionText text={desthirdSec} />
        <GridSection />
      </div>
    </div>
  );
};
