"use client";

import Image from "next/image";
import styles from "./cards.module.scss";
import { CardProps } from "./highlightCard";
import Link from "next/link";
import Analytics from "@/provider/analytics";

const Banner = (props: CardProps) => {
  return (
    <Link
      className={styles.banner}
      href={props.links.site}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        Analytics.actions.events.externalLinkClicked({ Website: props.title })
      }
    >
      <Image src={props.image} alt="banner" width={400} height={400} />
    </Link>
  );
};

export default Banner;
