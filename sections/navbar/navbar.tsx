import Image from "next/image";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="logo"
        width={100}
        height={100}
      />

      <div className={styles.stats}>block no | canto | note</div>
    </div>
  );
};
