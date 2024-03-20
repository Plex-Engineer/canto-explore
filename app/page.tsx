import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import Card from "@/components/card";
import Text from "@/components/text";
import Gap from "@/components/gap";

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
      <Gap height={40} />
      <section className={styles.highlight}>
        <Text family="primary" color="secondary" size="large">
          <span>Build</span> on the best tech
        </Text>
        <Gap height={32} />

        <Card
          style={{
            flexDirection: "row",
            gap: "24px",
          }}
        >
          <div
            style={{
              height: "350px",
              flex: 1,
            }}
          >
            <Image
              src={"/cyclone.png"}
              alt="Canto Bridge"
              width={350}
              height={350}
              style={{
                width: "100%",
                opacity: 0.7,
              }}
            />
          </div>
          <div
            className="content"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Text family="primary" size="medium" className={styles.title}>
              CYCLONE Stack: A Parallel Execution EVM
            </Text>
            <Text color="secondary" size="small" weight="regular">
              Experience the speed and efficiency unlocked by Canto’s Parallel
              Execution Cyclone EVM. It combines speed with scalability to give
              developers the best possible platform for building applications.
            </Text>
            <div
              style={{
                flex: 1,
              }}
            ></div>
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
          </div>
        </Card>
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
          <Card
            style={{
              gap: "24px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "350px",
                flex: 1,
              }}
            >
              <Image
                src={"/cyclone.png"}
                alt="Canto Bridge"
                width={350}
                height={350}
                style={{
                  width: "100%",
                  opacity: 0.7,
                }}
              />
            </div>
            <div
              className="content"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Text family="primary" size="medium" className={styles.title}>
                NEOFINANCE
              </Text>
              <Text color="secondary" size="small" weight="regular">
                A new era of financial efficiencies, unlocked at scale, by
                deploying off chain assets on protocol rails.
              </Text>
            </div>
          </Card>
          <Card
            style={{
              gap: "24px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "350px",
                flex: 1,
              }}
            >
              <Image
                src={"/cyclone.png"}
                alt="Canto Bridge"
                width={350}
                height={350}
                style={{
                  width: "100%",
                  opacity: 0.7,
                }}
              />
            </div>
            <div
              className="content"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Text family="primary" size="medium" className={styles.title}>
                Contract secured revenue
              </Text>
              <Text color="secondary" size="small" weight="regular">
                A distinct mechanism that enables novel methods of funding. 20%
                of gas spent on an application is awarded to developers in a
                composable manner.
              </Text>
            </div>
          </Card>
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
          <Card
            style={{
              gap: "24px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "220px",
                flex: 1,
              }}
            >
              <Image
                src={"/cyclone.png"}
                alt="Canto Bridge"
                width={350}
                height={220}
                style={{
                  width: "100%",
                  opacity: 0.7,
                }}
              />
            </div>
            <div
              className="content"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Text family="primary" size="medium" className={styles.title}>
                CANTo DEX
              </Text>
              <Text color="secondary" size="small" weight="regular">
                A zero-fee DEX, fueled by L1 incentives
              </Text>
            </div>
          </Card>
          <Card
            style={{
              gap: "24px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "220px",
                flex: 1,
              }}
            >
              <Image
                src={"/cyclone.png"}
                alt="Canto Bridge"
                width={350}
                height={220}
                style={{
                  width: "100%",
                  opacity: 0.7,
                }}
              />
            </div>
            <div
              className="content"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Text family="primary" size="medium" className={styles.title}>
                CANTo Lending market
              </Text>
              <Text color="secondary" size="small" weight="regular">
                A lending market focused on NOTE & RWAs emphasizing security.
              </Text>
            </div>
          </Card>
          <Card
            style={{
              gap: "24px",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "220px",
                flex: 1,
              }}
            >
              <Image
                src={"/cyclone.png"}
                alt="Canto Bridge"
                width={350}
                height={220}
                style={{
                  width: "100%",
                  opacity: 0.7,
                }}
              />
            </div>
            <div
              className="content"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Text family="primary" size="medium" className={styles.title}>
                NOte
              </Text>
              <Text color="secondary" size="small" weight="regular">
                Canto’s native unit of account backed by RWAs.
              </Text>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
