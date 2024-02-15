"use client";

import HighlightCard from "@/components/cards/highlightCard";
import styles from "./spotlight.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Spotlight = () => {
  const items = [
    {
      title: "Star Wars",
      description: "A long time ago in a galaxy far, far away...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Iron Man",
      description: "A billionaire industrialist and genius inventor...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Lord of the Rings",
      description: "An epic high-fantasy novel...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned ",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The Dark Knight",
      description:
        "Batman, Gordon and Harvey Dent are forced to deal with the chaos unleashed by an anarchist mastermind known only as the Joker...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption...",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className={styles.container}
      spaceBetween={0}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide
          lazy={false}
          style={{
            height: "300px",
          }}
          key={index + item.title}
        >
          <HighlightCard key={index + "h"} {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Spotlight;
