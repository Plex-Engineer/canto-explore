"use client";

import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Analytics from "@/provider/analytics";
import { useEffect } from "react";

export const NavBar = () => {

  useEffect(() => {
    Analytics.actions.events.pageOpened("home");
  }, []);

  return (
    <div className={styles.container}>
      <Link
        href={"https://canto.io"}
        onClick={() =>
          Analytics.actions.events.externalLinkClicked({ Website: "Canto" })
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
