import React from "react";
import { Button } from "../../components/base/Button/Button";
import { DescriptionText } from "../../components/base/Typography/DescriptionText";
import { GridSection } from "../../components/general/GridView/GridSection";
import { Typography } from "../../components/base/Typography/Typography";
import { desthirdSec, headingthirdSec } from "../../constants/texts";
import styles from "./styles/styles.module.scss";
export const FeaturesSection = () => {
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
