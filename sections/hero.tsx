"use client";

import Spline from "@splinetool/react-spline";
import styles from "./style.module.scss";
import Image from "next/image";
import Gap from "@/components/gap";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.row}>
        <h1>Canto Ecosystem</h1>
        <Gap height={10} />
        <h4>
          Explore events, applications and integrations in the Canto ecosystem.
        </h4>

        <div className={styles.actions}>
          <button>
            <Image src={"/arrow-link.svg"} alt="link" width={32} height={32} />
            BRIDGE TO CANTO
          </button>
          <button data-type="outlined">LIST YOUR APP</button>
        </div>
      </section>
      <section className={styles.row}>
        {/* <Image
          src={"/hero.png"}
          alt="canto ecosystem"
          width={800}
          height={400}
          className={styles.image}
        /> */}
      </section>
      {/* <Spline scene="https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode" /> */}
    </div>
  );
};

export default HeroSection;
