import React from "react";
import { Button } from "../../components/base/Button/Button";
import { DescriptionText } from "../../components/base/Typography/DescriptionText";
import { expire } from "../../constants/texts";
import styles from "./styles/styles.module.scss";
import { LinkText } from "../../components/base/Typography/LinkText";
import { Collapsible } from "../../components/general/CollapsableFAQ/Collapsible";
import { Typography } from "../../components/base/Typography/Typography";
export const SectionSix = () => {
  return (
    <div>
      <div className={styles.headingMargin}>
        <Typography text={"What Our Users are saying"} />
      </div>

      <div>
        <Collapsible
          question={"What chains do you support?"}
          answer={
            "We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon"
          }
        />
        <br />
        <Collapsible
          question={"What chains do you support?"}
          answer={
            "We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon"
          }
        />
        <br />
        <Collapsible
          question={"What chains do you support?"}
          answer={
            "We currently support Ethereum mainnet. We have multi-chain support on our roadmap soon"
          }
        />
      </div>
      <div className={styles.sixthSection}>
        <Typography text={"What Are you Waiting For?"} />
        <div className={styles.secMargin}>
          <DescriptionText
            text={
              "What Are you Waiting For?What Are you Waiting For?What Are you Waiting For?What Are you Waiting For?"
            }
          />
          <br />
          <LinkText text={expire} />
        </div>
        <div className={styles.buttonStyle}>
          <Button title={"Sign Up Now"} />
        </div>
      </div>
    </div>
  );
};
