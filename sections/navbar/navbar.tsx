import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";

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
        />
      </Link>

      <div className={styles.stats}></div>
    </div>
  );
};
