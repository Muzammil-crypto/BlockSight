import React from "react";
import styles from "./styles.module.scss";

export const SubHeading = ({ text }) => {
  return (
    <div>
      <text
        style={{
          fontSize: 32,
          fontWeight: 600,
          fontFamily: "sans-serif",
          color: "#2A2A2A",
        }}
      >
        {text}
      </text>
    </div>
  );
};
