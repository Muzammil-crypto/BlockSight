import React from "react";
import styles from "./gridStyle.module.scss";
import Image from "next/image";
import { SubHeading } from "../Typography/SubHeading";
import { DescriptionText } from "../Typography/DescriptionText";

export const GridSection = () => {
  return (
    <div className={styles.row}>
      <div className={styles.body}>
        <div className={styles.leftItem}>
          <SubHeading text={"Be Early"} />
          <DescriptionText
            text={
              "Discover hot Token & NFT projects as soon as they launch with our proprietary trending algorithm."
            }
          />
        </div>
        <div className={styles.img}>
          <Image
            className={styles.img}
            src="/img1.png"
            alt="Next.js Logo"
            width={631}
            height={396}
            priority
          />
        </div>
      </div>
      {/*  */}
      <div className={styles.body}>
        <div className={styles.leftImage}>
          <Image
            className={styles.img}
            src="/img2.png"
            alt="Next.js Logo"
            width={631}
            height={396}
            priority
          />
        </div>
        <div className={styles.rightText}>
          <SubHeading text={"Follow big money"} />
          <DescriptionText
            text={
              "Track activity of top labeled wallets on chain with our algorithmically curated segments to see what tokens they buy, hold, and sell."
            }
          />
        </div>
      </div>
      {/*  */}
      <div className={styles.body}>
        <div className={styles.leftItem}>
          <SubHeading text={"Be Early"} />
          <DescriptionText
            text={
              "Discover hot Token & NFT projects as soon as they launch with our proprietary trending algorithm."
            }
          />
        </div>
        <div className={styles.img}>
          <Image
            className={styles.img}
            src="/img3.png"
            alt="Next.js Logo"
            width={631}
            height={396}
            priority
          />
        </div>
      </div>
      {/*  */}
      <div className={styles.body}>
        <div className={styles.leftImage}>
          <Image
            className={styles.img}
            src="/img4.png"
            alt="Next.js Logo"
            width={631}
            height={396}
            priority
          />
        </div>
        <div className={styles.rightText}>
          <SubHeading text={"Follow big money"} />
          <DescriptionText
            text={
              "Track activity of top labeled wallets on chain with our algorithmically curated segments to see what tokens they buy, hold, and sell."
            }
          />
        </div>
      </div>
      {/*  */}
    </div>
  );
};
