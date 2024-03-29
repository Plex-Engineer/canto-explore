"use client";

import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePostHog } from 'posthog-js/react';

export const NavBar = () => {
  const posthog = usePostHog();
  return (
    <div className={styles.container}>
      <Link
        href={"https://canto.io"}
        onClick={() =>
          posthog.capture("External Link Clicked", { Website: "Canto" })
        }
      >
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className={styles.stats}></div>
    </div>
  );
};
