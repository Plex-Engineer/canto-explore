"use client";

import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import Analytics from "@/provider/analytics";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href={"https://canto.io"}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="logo"
          width={100}
          height={100}
          onClick={() =>
            Analytics.actions.events.externalLinkClicked({ Website: "Canto" })
          }
        />
      </Link>
      <div className={styles.stats}></div>
    </div>
  );
};
