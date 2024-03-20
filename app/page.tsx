import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import Card from "@/components/card";
import Text from "@/components/text";
import Gap from "@/components/gap";
import { CardOutlined } from "@/components/cardOutline";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.pretext}></div>
        <div
          className={styles.titleFeature}
          data-content="Create without constraints"
        >
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
      <Gap height={40} />
      <section className={styles.highlight}>
        <Text family="primary" color="secondary" size="large">
          <span>Build</span> on the best tech
        </Text>
        <Gap height={32} />

        <CardOutlined
          title="CYCLONE Stack: A Parallel Execution EVM"
          content="Experience the speed and efficiency unlocked by Canto’s Parallel
              Execution Cyclone EVM. It combines speed with scalability to give
              developers the best possible platform for building applications."
          extra={
            <div
              style={{
                backgroundColor: "#131313",
                padding: "16px 24px",
                width: "fit-content",
              }}
            >
              <Text family="primary" size="small" color="secondary">
                <span>5,000 TPS</span> / Sub-Second Block Time
              </Text>
            </div>
          }
        />
      </section>
      <Gap height={48} />
      <section className={styles.highlight}>
        <Text family="primary" color="secondary" size="large">
          LEVERAGE <span>innovative</span> financial primitives
        </Text>
        <Gap height={32} />
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <CardOutlined
            title="NEOFINANCE"
            content=" A new era of financial efficiencies, unlocked at scale, by
            deploying off chain assets on protocol rails."
            direction="column"
          />
          <CardOutlined
            title="Contract secured revenue"
            content="A distinct mechanism that enables novel methods of funding. 20%
            of gas spent on an application is awarded to developers in a
            composable manner."
            direction="column"
          />
        </div>
      </section>
      <Gap height={48} />
      <section className={styles.highlight}>
        <Text family="primary" color="secondary" size="large">
          FREE <span>PUBLIC</span> INFRASTRUCTURE
        </Text>
        <Gap height={24} />
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <CardOutlined
            title="Canto Dex"
            content="A zero-fee DEX, fueled by L1 incentives"
            direction="column"
            imgHeight="220px"
          />
          <CardOutlined
            title="Canto Lending market"
            content="A lending market focused on NOTE & RWAs emphasizing security."
            direction="column"
            imgHeight="220px"
          />
          <CardOutlined
            title="Note"
            content="Canto’s native unit of account backed by RWAs."
            direction="column"
            imgHeight="220px"
          />
        </div>
      </section>
    </main>
  );
}
