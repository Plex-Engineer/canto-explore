"use client";

import Spline from "@splinetool/react-spline";
import styles from "./style.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Spline scene="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode" />
    </div>
  );
};

export default HeroSection;
