import styles from "../../styles/Home.module.scss";
import { HeadSet } from "../components/HeaderTitle/Head";
import { SectionOne } from "./sections/SectionOne";
import { SectionTwo } from "./sections/SectionTwo";
import { SectionThree } from "./sections/sectionThree";
import { SectionFour } from "./sections/SectionFour";
import { SectionFive } from "./sections/SectionFive";
import { SectionSix } from "./sections/SectionSix";
import { CopyrightBottom } from "../components/Copyright/CopyrightBottom";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <HeadSet />
        <SectionOne />
        <div className={styles.center}>
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <SectionSix />
        </div>
        <CopyrightBottom />
      </main>
    </>
  );
}
