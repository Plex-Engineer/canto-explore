"use client";

import HighlightCard, {
  HighlightCardProps,
} from "@/components/cards/highlightCard";
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

const Spotlight = () => {
  const items: HighlightCardProps[] = [
    {
      title: "Star Wars",
      description: "A long time ago in a galaxy far, far away...",
      image: "/hero.png",
      category: "Lending",
      links: {
        site: "https://starwars.com",
      },
    },
    {
      title: "Iron Man",
      description: "A billionaire industrialist and genius inventor...",
      image: "/hero.png",
      category: "Superhero",
      links: {
        site: "https://marvel.com",
        github: "https://github.com/marvel",
      },
    },
    {
      title: "The Lord of the Rings",
      description: "An epic high-fantasy novel...",
      image: "/hero.png",
      category: "Fantasy",
      links: {
        site: "https://lotr.com",
        twitter: "https://twitter.com/lotr",
      },
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels...",
      image: "/hero.png",
      category: "Sci-fi",
      links: {
        site: "https://matrix.com",
        twitter: "https://twitter.com/matrix",
      },
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty...",
      image: "/hero.png",
      category: "Crime",
      links: {
        site: "https://godfather.com",
        twitter: "https://twitter.com/godfather",
      },
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned ",
      image: "/hero.png",
      category: "Drama",
      links: {
        site: "https://shawshank.com",
        twitter: "https://twitter.com/shawshank",
      },
    },
    {
      title: "The Dark Knight",
      description:
        "Batman, Gordon and Harvey Dent are forced to deal with the chaos unleashed by an anarchist mastermind known only as the Joker...",
      image: "/hero.png",
      category: "Superhero",
      links: {
        site: "https://darkknight.com",
        twitter: "https://twitter.com/darkknight",
      },
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O...",
      image: "/hero.png",
      category: "Sci-fi",
      links: {
        site: "https://inception.com",
        twitter: "https://twitter.com/inception",
      },
    },
    {
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption...",
      image: "/hero.png",
      category: "Crime",
      links: {
        site: "https://pulpfiction.com",
        twitter: "https://twitter.com/pulpfiction",
      },
    },
    {
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective",
      image: "/hero.png",
      category: "Drama",
      links: {
        site: "https://forrestgump.com",
        twitter: "https://twitter.com/forrestgump",
      },
    },
  ];

  return (
    <section>
      <h2 className={styles.title}>spotlight</h2>
      <section className={styles.container}>
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
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 3000,
          }}
          // navigation
          pagination={{ clickable: true }}
          className={styles.swiper}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          spaceBetween={140}

          //   onSlideChange={() => console.log("slide change")}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item, index) => (
            <SwiperSlide
              lazy={false}
              style={{
                height: "300px",
              }}
              key={index + item.title}
            >
              <HighlightCard key={index + item.title + "h"} {...item} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </section>
    </section>
  );
};

export default Spotlight;
