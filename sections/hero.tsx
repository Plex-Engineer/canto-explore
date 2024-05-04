"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import Gap from "@/components/gap";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import TextReveal from "@/components/textReveal";
import Text from "@/components/text";

const HeroSection = () => {
	const posthog = usePostHog();
	return (
		<div className={styles.container}>
			<section className={styles.row}>
				<div className={styles.pretext}>
					<Image src={"/logo-accent.svg"} alt="canto" width={20} height={20} />
					<Text family="primary" color="accent" size="large">
						CANTO
					</Text>
				</div>
				<h1 className={styles.title}>Canto Ecosystem</h1>
				<Gap height={16} />
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
					<TextReveal text="Explore events, applications and integrations in the Canto ecosystem."></TextReveal>
				</div>

				<Gap height={36} />

				<div className={styles.cta}>
					<Link
						href="https://canto.io/bridge"
						target="_blank"
						onClick={() =>
							posthog.capture("External Link Clicked", { Website: "Bridge" })
						}
					>
						<Image src={"/arrow-link.svg"} alt="link" width={32} height={32} />
						BRIDGE TO CANTO
					</Link>
					<Link
						data-type="outlined"
						href="https://forms.gle/hzxaTwFBJ1CfNPnC7"
						target="_blank"
						onClick={() =>
							posthog.capture("External Link Clicked", { Website: "List App" })
						}
					>
						LIST YOUR APP
					</Link>
				</div>
			</section>
			<section className={styles.row}>
				{/* <Image
          src={"/hero.png"}
          alt="canto ecosystem"
          width={800}
          height={400}
          className={styles.image}
        /> */}
			</section>
			{/* <Spline scene="https://prod.spline.design/ZNUiYolkKfuyKgGh/scene.splinecode" /> */}
		</div>
	);
};

export default HeroSection;
