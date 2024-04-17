"use client";

import Link from "next/link";
import styles from "../page.module.scss";
import Image from "next/image";
import Text from "@/components/text";
import { motion } from "framer-motion";
import TextReveal from "@/components/textReveal";

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.pretext}>
				<Image src={"/logo-accent.svg"} alt="canto" width={20} height={20} />
				<Text family="primary" color="accent" size="large">
					CANTO
				</Text>
			</div>
			<motion.div
				className={styles.titleFeature}
				data-content="Create without constraints"
			>
				Decentralized innovation
				<br />
				on lightspeed rails
			</motion.div>

			<div
				style={{
					maxWidth: "900px",
				}}
			>
				<span
					style={{
						color: "#06FC99",
						fontSize: "1.2rem",
						marginRight: "10px",
					}}
				>
					{">"}
				</span>
				<TextReveal
					text="Layer 1 Blockchain BUILT TO DELIVER on the promise of DeFi
          through a post-traditional financial movement, new systems will be
          made accessible, transparent, decentralized, and free"
				></TextReveal>
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
	);
};

export default HeroSection;
