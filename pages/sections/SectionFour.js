import React from "react";
import { Button } from "../../src/components/Button/Button";
import { IconText } from "../../src/components/IconText/IconText";
import { DescriptionText } from "../../src/components/Typography/DescriptionText";
import { Typography } from "../../src/components/Typography/Typography";
import { desFourthSec, headingFourthSec } from "../../src/constants/texts";
import style from "./styles/styles.module.scss";

export const SectionFour = () => {
  return (
    <div>
      <div style={{ marginTop: "100px", flexDirection: "column" }}>
        <Typography text={headingFourthSec} />
        <br />
        <br />
        <DescriptionText text={desFourthSec} />
      </div>
      <div className={style.discount}>
        <Typography text={"Launch Plan"} />
        <br />
        <text className={style.options}>{"394$ per month"}</text>
        <div className={style.iconTexts}>
          <IconText />
          <br />
          <IconText />
          <br />
          <IconText />
        </div>
        <div className={style.buttonStyle}>
          <Button title={"Sign Up Now"} />
        </div>
      </div>
      <br />
    </div>
  );
};
