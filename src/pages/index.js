import styles from "../styles/Home.module.scss";
import { BannerSection } from "./sections/BannerSection";
import { EventSection } from "./sections/EventSection";
import { FeaturesSection } from "./sections/FeatureSection";
import { PlanSection } from "./sections/PlanSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { FaqSection } from "./sections/FAQSection";
import { CopyrightBottom } from "../components/general/Copyright/CopyrightBottom";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <BannerSection />
        <div className={styles.center}>
          <EventSection />
          <FeaturesSection />
          <PlanSection />
          <ReviewsSection />
          <FaqSection />
        </div>
        <CopyrightBottom />
      </main>
    </>
  );
}
