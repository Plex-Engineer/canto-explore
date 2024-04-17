"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import Text from "@/components/text";
import Gap from "@/components/gap";
import { CardOutlined } from "@/components/cardOutline";
import Container from "@/components/container";
import Spotlight from "@/sections/spotlight/spotlight";
import { Spotlights } from "@/config/data";
import HeroSection from "./components/hero";
import HighlightSection from "./components/highlights";

export default function Home() {
	return (
		<main className={styles.main}>
			<HeroSection />
			<Gap height={64} />
			<HighlightSection />
			<Gap height={180} />
			<section className={styles.container}>
				<Text
					family="primary"
					color="secondary"
					size="large"
					className={styles.header}
					animate
				>
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
						glow={{
							x: 3,
							y: 50,
						}}
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
						glow={{
							x: 80,
							y: 50,
						}}
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
			<Gap height={200} />
			<section className={styles.container}>
				<Text
					family="primary"
					color="secondary"
					size="large"
					className={styles.header}
					animate
				>
					FREE <span>PUBLIC</span> INFRASTRUCTURE
				</Text>
				<Gap height={24} />
				<Container
					direction="row"
					gap="24px"
					className={styles["component-container"]}
				>
					<CardOutlined
						glow={{
							x: 3,
							y: 50,
						}}
						image="/NOTE.png"
						title="Note"
						content="Canto’s native unit of account backed by RWAs."
						direction="column"
						imgHeight="400px"
					/>
					<CardOutlined
						glow={{
							x: 80,
							y: 50,
						}}
						image="/DEX.png"
						title="Canto Dex"
						content="A zero-fee DEX, fueled by L1 incentives"
						direction="column"
						imgHeight="220px"
					/>
					<CardOutlined
						glow={{
							x: 80,
							y: 50,
						}}
						image="/CLM.png"
						title="Canto Lending market"
						content="A lending market focused on NOTE & RWAs emphasizing security."
						direction="column"
						imgHeight="220px"
					/>
				</Container>
			</section>
			<Gap height={200} />
			<section className={styles.container}>
				<div className={styles.moreProjectsTitle}>
					<Text
						family="primary"
						color="secondary"
						size="large"
						className={styles.header}
						animate
					>
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
				<Spotlight header={false} items={Spotlights} />
			</section>
			<Gap height={150} />
		</main>
	);
}
