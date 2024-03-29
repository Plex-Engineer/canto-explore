"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import Text from "@/components/text";
import Gap from "@/components/gap";
import { CardOutlined } from "@/components/cardOutline";
import Container from "@/components/container";
import EcoSystem from "./components/ecoSystem";
import { motion } from "framer-motion";
import StatCard from "@/components/statCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        {/* <div className={styles.glow}></div> */}
        <div className={styles.pretext}>
          <Image src={"/logo.svg"} alt="canto" width={20} height={20} />
          <Text family="primary" color="accent" size="large">
            CANTO
          </Text>
        </div>
        <motion.div
          className={styles.titleFeature}
          data-content="Create without constraints"
        >
          Create without constraints
        </motion.div>

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
      <section className={styles.container}>
        <Text family="primary" color="secondary" size="large">
          <span>Build</span> on the best tech
        </Text>
        <Gap height={32} />

        <CardOutlined
        image="/cyclone.png"
          className={styles["primary-container"]}
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
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "24px",
            marginTop: "24px"
            }}>
        
        <StatCard primary="TRANSACTIONS PER SECOND" secondary="12,500" />
        <StatCard primary="TRANSACTIONS" secondary="1.2b+" />
        <StatCard primary="TIME TO FINALITY" secondary="380ms" />
        <StatCard primary="Sub-Second Block Time" secondary="5,000 TPS" />
        </div>
      </section>
      <Gap height={48} />
      <section className={styles.container}>
        <Text family="primary" color="secondary" size="large">
          LEVERAGE <span>innovative</span> financial primitives
        </Text>
        <Gap height={32} />
        <Container
          direction="row"
          gap="24px"
          className={styles["secondary-container"]}
        >
            {/* <div className={styles.glowEffect}></div> */}

          <CardOutlined
          image="/Neofinance.jpg"
          imgHeight="450px"
            title="NEOFINANCE"
            content="A new era of financial efficiencies, unlocked at scale, by deploying off chain assets on protocol rails."
            direction="column"
            extra={
              <Link href="https://neo.canto.io">
                <Text
                  family="primary"
                  size="small"
                  color="primary"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Learn More
                </Text>
              </Link>
            }
          />
          <CardOutlined
          image="/CSR.jpg"
          imgHeight="450px"

            title="Contract secured revenue"
            direction="column"
            content="A distinct mechanism that enables novel methods of funding. 20% of gas spent on an application is awarded to developers in a composable manner."
            extra={
              <Link href="https://csr.canto.io">
                <Text
                  size="small"
                  color="primary"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  LEARN MORE
                </Text>
              </Link>
            }
          />

        </Container>
      </section>
      <Gap height={48} />
      <section className={styles.container}>
        <Text family="primary" color="secondary" size="large">
          FREE <span>PUBLIC</span> INFRASTRUCTURE
        </Text>
        <Gap height={24} />
        <Container
          direction="row"
          gap="24px"
          className={styles["component-container"]}
        >
            <CardOutlined
            image="/NOTE.png"
            title="Note"
            content="Canto’s native unit of account backed by RWAs."
            direction="column"
            imgHeight="400px"
          />
          <CardOutlined
          image="/DEX.png"
            title="Canto Dex"
            content="A zero-fee DEX, fueled by L1 incentives"
            direction="column"
            imgHeight="220px"
          />
          <CardOutlined
          image="/CLM.png"
            title="Canto Lending market"
            content="A lending market focused on NOTE & RWAs emphasizing security."
            direction="column"
            imgHeight="220px"
          />
         
        </Container>
      </section>
      <Gap height={80} />
      <section className={styles.container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text family="primary" color="secondary" size="large">
            DISCOVER <span>PROJECTS</span> ON THE CANTO CHAIN
          </Text>
          <Link
            className={styles.link}
            href={"/eco"}
            //   onClick={() =>
            //     posthog.capture("Navlink", {
            //       Website: "Launch Homepage",
            //     })
            //   }
          >
            Explore Ecosystem
          </Link>
        </div>
        <Gap height={24} />
        <EcoSystem />
      </section>
      <Gap height={48} />
    </main>
  );
}
