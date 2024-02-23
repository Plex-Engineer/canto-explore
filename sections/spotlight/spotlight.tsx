"use client";

import HighlightCard, { CardProps } from "@/components/cards/highlightCard";
import styles from "./spotlight.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import Gap from "@/components/gap";
import useMobile from "@/hooks/useMobile";

const Spotlight = (props: { items: CardProps[] }) => {
  const isMobile = useMobile();

  return (
    <section>
      <Gap height={30} />
      <h2 className={styles.title}>spotlight</h2>
      <section className={styles.container}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={isMobile ? 1 : 2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 3000,
          }}
          // navigation
          pagination={{ clickable: true }}
          className={styles.swiper}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          spaceBetween={"10%"}

          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {props.items.map((item, index) => (
            <SwiperSlide lazy={false} key={index + item.title}>
              <div
                style={{
                  height: "200px",
                }}
              >
                <HighlightCard key={index + item.title + "h"} {...item} />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
      <Gap height={30} />
    </section>
  );
};

export default Spotlight;
