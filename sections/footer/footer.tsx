"use client";

import FooterCard from "@/components/cards/footerCard";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles["inner_container"]}>
        <FooterCard
          text="Visit Blog"
          image="/blog.svg"
          link="https://docs.canto.io/"
        />
        <FooterCard
          text="Read Documentation"
          image="/doc.svg"
          link="https://docs.canto.io/"
        />
        <FooterCard
          text="Join our Discord"
          image="/discord.svg"
          link="https://discord.com/invite/63GmEXZsVf"
        />
        <FooterCard
          text="Follow Canto Public"
          image="/twitter.svg"
          link="https://twitter.com/CantoPublic"
        />
      </div>
    </div>
  );
};

export default Footer;
