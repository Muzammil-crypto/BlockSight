import React from "react";
import styles from "./styles.module.scss";
export const DropDown = () => {
  return (
    <div>
      <select className={styles.dropDowncard}>
        <option value="top">
          We currently support Ethereum mainnet. We have multi-chain support on
          our roadmap soon
        </option>

        <option value="middle">
          We currently support Ethereum mainnet. We have multi-chain support on
          our roadmap soon
        </option>

        <option value="bottom">
          We currently support Ethereum mainnet. We have multi-chain support on
          our roadmap soon
        </option>
      </select>
    </div>
  );
};
