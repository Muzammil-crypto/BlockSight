import React from "react";
import styles from "../../../styles/Home.module.scss";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const TestmonialCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <a target="_blank" rel="noopener noreferrer">
        <h4 style={{ textAlign: "left" }} className={inter.className}>
          {item.name}
        </h4>
        <p style={{ fontFamily: "sans-serif", textAlign: "left" }}>
          {item.Review}
        </p>
      </a>
    </div>
  );
};
