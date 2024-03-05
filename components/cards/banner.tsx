"use client";

import Image from "next/image";
import styles from "./cards.module.scss";
import { CardProps } from "./highlightCard";
import Link from "next/link";
import { usePostHog } from 'posthog-js/react';

const Banner = (props: CardProps) => {
  const posthog = usePostHog();
  return (
    <Link
      className={styles.banner}
      href={props.links.site}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        posthog.capture("External Link Clicked", { Website: props.title })
      }
    >
      <Image src={props.image} alt="banner" width={400} height={400} />
    </Link>
  );
};

export default Banner;
