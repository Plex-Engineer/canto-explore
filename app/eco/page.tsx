import styles from "./page.module.css";
import HeroSection from "@/sections/hero";
import Spotlight from "@/sections/spotlight/spotlight";
import ProjectsSections from "@/sections/projects/projects";
import MoreSection from "@/sections/more/moreSection";
import { More, Projects, Spotlights } from "@/config/data";

export default function Home() {
	return (
		<main className={styles.main}>
			<HeroSection />
			<Spotlight header={true} items={Spotlights} />
			<ProjectsSections items={Projects} />
			<MoreSection items={More} />
		</main>
	);
}
