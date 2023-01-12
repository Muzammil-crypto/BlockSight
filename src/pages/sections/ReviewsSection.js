import React from "react";

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestmonialCard } from "../../components/general/Reviews/TestmonialCard";
import { Typography } from "../../components/base/Typography/Typography";
import { expire, Testmonials } from "../../constants/texts";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { DescriptionText } from "../../components/base/Typography/DescriptionText";
import style from "./styles/styles.module.scss";
import { SwipeRight } from "../../components/general/SwiperSlider.js/SwipeRight";
import { SwipeLeft } from "../../components/general/SwiperSlider.js/SwipeLeft";
import { Button } from "../../components/base/Button/Button";

export const ReviewsSection = () => {
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
        ref={swiperRef}
        breakpoints={{
          // when window width is >= 640px
          1410: {
            width: 1220,
            slidesPerView: 3.5,
          },
          1160: {
            width: 1100,
            slidesPerView: 3,
          },
          900: {
            width: 900,
            slidesPerView: 3,
          },
          // when window width is >= 768px
          800: {
            width: 820,
            slidesPerView: 2,
          },
          700: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {Testmonials.map((item, val) => (
          <SwiperSlide key={val}>
            <TestmonialCard key={item.id} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <br />
      <Button title={"Join us now"} />

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
