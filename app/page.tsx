"use client";

import styles from "./page.module.scss";
import Gap from "@/components/gap";
import HeroSection from "./components/hero";
import HighlightSection from "./components/highlights";
import FeaturedSection from "./components/featured";
import BentoSection from "./components/bento";
import MoreSection from "./components/more";

export default function Home() {
	return (
		<main className={styles.main}>
			<HeroSection />
			<Gap height={64} />
			<HighlightSection />
			<Gap height={180} />
			<FeaturedSection />
			<Gap height={200} />
			<BentoSection />
			<Gap height={200} />
			<MoreSection />
			<Gap height={150} />
		</main>
	);
}
