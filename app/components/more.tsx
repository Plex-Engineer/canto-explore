"use client";

import Link from "next/link";
import styles from "../page.module.scss";
import Text from "@/components/text";
import Gap from "@/components/gap";
import Spotlight from "@/sections/spotlight/spotlight";
import { Spotlights } from "@/config/data";

const MoreSection = () => {
	return (
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
	);
};

export default MoreSection;
