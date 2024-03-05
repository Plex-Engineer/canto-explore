"use client";

import FooterCard from "@/components/cards/footerCard";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles["inner_container"]}>
        <FooterCard
          text="Visit Blog"
          title="Blog"
          image="/blog.svg"
          link="https://canto.mirror.xyz/"
        />
        <FooterCard
          text="Read Documentation"
          title="Documentation"
          image="/doc.svg"
          link="https://docs.canto.io/"
        />
        <FooterCard
          text="Join our Discord"
          title="Discord"
          image="/discord.svg"
          link="https://discord.com/invite/63GmEXZsVf"
        />
        <FooterCard
          text="Follow Canto Public"
          title="Twitter"
          image="/twitter.svg"
          link="https://twitter.com/CantoPublic"
        />
      </div>
    </div>
  );
};

export default Footer;
