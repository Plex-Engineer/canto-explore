"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import Gap from "@/components/gap";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { usePostHog } from "posthog-js/react";

const HeroSection = () => {
  const posthog = usePostHog();
  return (
    <div className={styles.container}>
      <section className={styles.row}>
        <h1>Canto Ecosystem</h1>
        <Gap height={16} />
        <h4>
          Explore events, applications and integrations in the Canto ecosystem.
        </h4>
        <Gap height={36} />

        <div className={styles.actions}>
          <Link
            href="https://canto.io/bridge"
            target="_blank"
            onClick={() =>
              posthog.capture("External Link Clicked", { Website: "Bridge" })
            }
          >
            <Image src={"/arrow-link.svg"} alt="link" width={32} height={32} />
            BRIDGE TO CANTO
          </Link>
          <Link
            data-type="outlined"
            href="https://forms.gle/hzxaTwFBJ1CfNPnC7"
            target="_blank"
            onClick={() =>
              posthog.capture("External Link Clicked", { Website: "List App" })
            }
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
      {/* <Spline scene="https://prod.spline.design/ZNUiYolkKfuyKgGh/scene.splinecode" /> */}
    </div>
  );
};

export default HeroSection;
