import React from "react";
import styles from "../../../styles/Home.module.scss";
import Image from "next/image";
import { Button } from "./Button";
export const NavBar = () => {
  return (
    <div className={styles.description}>
      <Image
        className={styles.logo}
        src="/myLogo.svg"
        alt="Next.js Logo"
        width={151}
        height={38}
        priority
      />
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button title={"Join Now"} />
        </a>
      </div>
    </div>
  );
};
