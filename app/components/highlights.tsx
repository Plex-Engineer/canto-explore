"use client";

import styles from "../page.module.scss";
import Text from "@/components/text";
import Gap from "@/components/gap";
import { CardOutlined } from "@/components/cardOutline";
import StatCard from "@/components/statCard";

const HighlightSection = () => {
	return (
		<section className={styles.container}>
			<Text
				family="primary"
				color="secondary"
				size="large"
				className={styles.header}
				animate
			>
				<span>Build</span> on the best tech
			</Text>
			<Gap height={32} />

			<CardOutlined
				image="/anims/cyclone.mp4"
				glow={{
					x: 0,
					y: 50,
					size: 100,
				}}
				loop={true}
				className={styles["primary-container"]}
				title="CYCLONE Stack: A Parallel Execution EVM"
				content="Experience the speed and efficiency unlocked by Canto’s Parallel Execution Cyclone EVM. It combines speed with scalability to give builders the best possible platform for building applications."
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
			<div className={styles.stats}>
				<StatCard primary="Transactions per Second" secondary="5,000" />
				<StatCard primary="Time to Finality" secondary="300ms" />
				{/* <StatCard primary="Network Stability" secondary="~50,000 TPS" /> */}
				<StatCard primary="Cost to Swap" secondary="< $0.01" />
			</div>
		</section>
	);
};

export default HighlightSection;
