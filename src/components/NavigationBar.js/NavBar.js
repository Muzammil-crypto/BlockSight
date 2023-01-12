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
      <Button title={"Join Now"} />
    </div>
  );
};
