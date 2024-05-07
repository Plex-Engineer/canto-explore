"use client";

import Link from "next/link";
import styles from "../page.module.scss";
import Text from "@/components/text";
import Gap from "@/components/gap";
import { CardOutlined } from "@/components/cardOutline";
import Container from "@/components/container";

const FeaturedSection = () => {
	return (
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
					image="/anims/neo.mp4"
					loop={false}
					title="NEOFINANCE"
					content="The Canto neofinance ecosystem consists of several primitives designed to enable transparent, competitive financial terms."
					direction="column"
					extra={
						<Link href="https://docs.canto.io/neofinance/overview">
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
					image="/anims/CSR.mp4"
					loop={true}
					title="Contract secured revenue"
					direction="column"
					content="A distinct mechanism that enables novel methods of funding. Twenty percent of gas spent on an application is given to developers as a rebate in a composable manner."
					extra={
						<Link href="https://docs.canto.io/evm-development/contract-secured-revenue">
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
	);
};

export default FeaturedSection;
