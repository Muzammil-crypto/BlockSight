import React from "react";
import { Button } from "../../components/base/Button/Button";
import { IconText } from "../../components/base/IconText/IconText";
import { DescriptionText } from "../../components/base/Typography/DescriptionText";
import { Typography } from "../../components/base/Typography/Typography";
import { desFourthSec, headingFourthSec } from "../../constants/texts";
import style from "./styles/styles.module.scss";

export const PlanSection = () => {
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
