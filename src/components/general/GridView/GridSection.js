import React from "react";
import styles from "./gridStyle.module.scss";
import Image from "next/image";

export const GridSection = () => {
  return (
    <div className={styles.fish}>
      <figure className={styles.figure}>
        <div class={styles.textcontainer}>
          <h3 className={styles.heading}>Be Early</h3>
          <p className={styles.description}>
            Discover hot Token & NFT projects as soon as they launch with our
            proprietary trending algorithm.
          </p>
        </div>
        <Image
          height={396}
          width={631}
          alt=""
          className={styles.fishpics}
          src="/img1.png"
        />
      </figure>
      <figure className={styles.figure}>
        <Image
          height={396}
          width={631}
          alt=""
          className={styles.fishpics}
          src="/img1.png"
        />
        <div className={styles.textcontainer}>
          <h3 className={styles.heading}>Follow big</h3>
          <p className={styles.description}>
            Track activity of top labeled wallets on chain with our
            algorithmically curated segments to see what tokens they buy, hold,
            and sell.
          </p>
        </div>
      </figure>
      <figure className={styles.figure}>
        <div class={styles.textcontainer}>
          <h3 className={styles.heading}>Be Early</h3>
          <p className={styles.description}>
            Discover hot Token & NFT projects as soon as they launch with our
            proprietary trending algorithm.
          </p>
        </div>
        <Image
          height={396}
          width={631}
          alt=""
          className={styles.fishpics}
          src="/img1.png"
        />
      </figure>
    </div>
  );
};
