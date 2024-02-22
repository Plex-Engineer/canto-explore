"use client";

import HighlightCard, { CardProps } from "@/components/cards/highlightCard";
import styles from "./more.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/scss";

import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

const MoreSection = (articles: { items: CardProps[] }) => {
  const swiperRef = useRef<any>();
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.row}>
          <h2>More</h2>
          <div
            className={styles.row}
            style={{
              gap: "10px",
            }}
          >
            <button
              onClick={() => {
                swiperRef.current.slidePrev();
              }}
            >
              <Image src="/left.svg" alt="left" width={12} height={12} />
            </button>
            <button
              onClick={() => {
                swiperRef.current.slideNext();
              }}
            >
              <Image src="/right.svg" alt="right" width={12} height={12} />
            </button>
          </div>
        </div>
      </div>
      <section
        style={{
          height: "450px",
          marginTop: "20px",
          width: "calc(100vw - 8rem)",
        }}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          className={styles.swiper}
          spaceBetween={30}
          modules={[Navigation]}
        >
          {articles.items.map((item, index) => (
            <SwiperSlide
              lazy={false}
              style={{
                height: "100%",
              }}
              key={index + item.title + "note"}
            >
              <HighlightCard key={index + item.title + "note"} {...item} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </div>
  );
};

export default MoreSection;
