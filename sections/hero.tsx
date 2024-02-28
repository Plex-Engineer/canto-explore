"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import Gap from "@/components/gap";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.row}>
        <h1>Canto Ecosystem</h1>
        <Gap height={24} />
        <h4>
          Explore events, applications and integrations in the Canto ecosystem.
        </h4>
        <Gap height={48} />

        <div className={styles.actions}>
          <Link href="https://canto.io/bridge" target="_blank">
            <Image src={"/arrow-link.svg"} alt="link" width={32} height={32} />
            BRIDGE TO CANTO
          </Link>
          <Link
            data-type="outlined"
            href="https://forms.gle/hzxaTwFBJ1CfNPnC7"
            target="_blank"
          >
            LIST YOUR APP
          </Link>
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
      {/* <Spline scene="https://prod.spline.design/0ku32sjtV9dDq2Bl/scene.splinecode" /> */}
    </div>
  );
};

export default HeroSection;
