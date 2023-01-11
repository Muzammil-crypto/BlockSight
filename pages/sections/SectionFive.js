import React from "react";

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestmonialCard } from "../../src/components/Reviews/TestmonialCard";
import { Typography } from "../../src/components/Typography/Typography";
import { expire, Testmonials } from "../../src/constants/texts";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { DescriptionText } from "../../src/components/Typography/DescriptionText";
import style from "./styles/styles.module.scss";
import { SwipeRight } from "../../src/components/SwiperSlider.js/SwipeRight";
import { SwipeLeft } from "../../src/components/SwiperSlider.js/SwipeLeft";

export const SectionFive = () => {
  const swiperRef = React.useRef(null);

  return (
    <div>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <Typography text={"What Our Users are saying"} />
        <SwipeLeft onClick={() => swiperRef.current.swiper.slideNext()} />

        <SwipeRight onClick={() => swiperRef.current.swiper.slidePrev()} />
      </div>

      <Swiper
        style={{ overflow: "inherit", marginTop: 48 }}
        loop={true}
        grabCursor={true}
        modules={[Navigation]}
        spaceBetween={33}
        slidesPerView={3.5}
        ref={swiperRef}
      >
        {Testmonials.map((item, val) => (
          <SwiperSlide key={val}>
            <TestmonialCard key={item.id} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.centerDiv}>
        <Typography text={"We don’t gaurantee Profits"} />
        <div className={style.secMargin}>
          <DescriptionText
            text={
              "This class is designed to teach you how to create flash loanst with smart contracts. This is for educational purposes only, and we do not guarantee any profit from attending the class. "
            }
          />
        </div>
      </div>
    </div>
  );
};
