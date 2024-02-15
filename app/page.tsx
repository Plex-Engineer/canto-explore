import { NavBar } from "@/sections/navbar";
import styles from "./page.module.css";
import HeroSection from "@/sections/hero";
import Spotlight from "@/sections/spotlight/spotlight";
import MoreSection from "@/sections/more";
import Footer from "@/sections/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <NavBar /> */}
      <HeroSection />
      <Spotlight />
      {/* <MoreSection /> */}
      {/* <Footer /> */}
    </main>
  );
}
