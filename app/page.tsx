import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.pretext}></div>
        <div className={styles.title} data-content="Create without constraints">
          Create without constraints
        </div>

        <div className={styles.secondary}>
          {">"} Layer 1 Blockchain BUILT TO DELIVER on the promise of DeFi
          through a post-traditional financial movement, new systems will be
          made accessible, transparent, decentralized, and free
        </div>

        <div className={styles.cta}>
          <Link href="/bridge">
            <Image src={"/arrow-link.svg"} alt="link" width={32} height={32} />
            BRIDGE IN
          </Link>
          <Link href="/explore" data-type="outlined">
            BUILD ON CANTO
          </Link>
        </div>
      </section>
    </main>
  );
}
