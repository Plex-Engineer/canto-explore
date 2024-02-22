import FooterCard from "@/components/cards/footerCard";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <FooterCard text="Visit Blog" image="/blog.svg" />
      <FooterCard text="Read Documentation" image="/doc.svg" />
      <FooterCard text="Join our Discord" image="/discord.svg" />
      <FooterCard text="Follow Canto Public" image="/twitter.svg" />
    </div>
  );
};

export default Footer;
