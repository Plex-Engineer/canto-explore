"use client";

import HighlightCard, { CardProps } from "@/components/cards/highlightCard";
import styles from "./more.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";

const MoreSection = (articles: { items: CardProps[] }) => {
  return (
    <div className={styles.container}>
      <h2>More</h2>
      <section
        style={{
          width: "100vw",
          height: "450px",
          background: "red",
        }}
      >
        <Swiper
          slidesPerView={3}
          pagination={{ clickable: true }}
          className={styles.swiper}
          spaceBetween={30}
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
