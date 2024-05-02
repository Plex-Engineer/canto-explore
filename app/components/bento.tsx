"use client";

import styles from "../page.module.scss";
import Text from "@/components/text";
import Gap from "@/components/gap";
import { CardOutlined } from "@/components/cardOutline";
import Container from "@/components/container";
import Image from "next/image";

const BentoSection = () => {
	return (
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
					content="Canto’s native unit of account backed by Real world assets (RWA’s)."
					extra={
						<div>
							<Text color="secondary" size="small">
								Partnered with leading issuers:
							</Text>
							<Container
								className={styles["m-col"]}
								direction={"row"}
								gap={"auto"}
								style={{
									width: "100%",
									justifyContent: "space-around",
								}}
							>
								<Image
									src="/hashnote.svg"
									alt="hashnote"
									width={200}
									height={120}
								/>
								<Image
									src="/fortunafi.svg"
									alt="fortunafi"
									width={200}
									height={120}
								/>
							</Container>
						</div>
					}
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
					content="A zero-fee DEX with liquidity incentivized by the base chain."
					direction="column"
					imgHeight="180px"
				/>
				<CardOutlined
					glow={{
						x: 80,
						y: 50,
					}}
					image="/CLM.png"
					title="Canto Lending market(CLM)"
					content="A Compound v2 style lending market for borrowing & lending NOTE."
					direction="column"
					imgHeight="160px"
				/>
			</Container>
		</section>
	);
};

export default BentoSection;
