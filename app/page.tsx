import { NavBar } from "@/sections/navbar/navbar";
import styles from "./page.module.css";
import HeroSection from "@/sections/hero";
import Spotlight from "@/sections/spotlight/spotlight";
import MoreSection from "@/sections/more";
import Footer from "@/sections/footer";
import Gap from "@/components/gap";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div className={styles.container}>
        <HeroSection />
        <Gap height={100} />
        <Spotlight />

        {/* <MoreSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
}
