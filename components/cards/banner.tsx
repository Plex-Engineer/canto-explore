import Image from "next/image";
import styles from "./cards.module.scss";
import { CardProps } from "./highlightCard";

const Banner = (props: CardProps) => {
  return (
    <section
      className={styles.banner}
      onClick={() => {
        window.open(props.links.site, "_blank");
      }}
      rel="noreferrer"
    >
      <Image src={props.image} alt="banner" width={400} height={500} />
    </section>
  );
};

export default Banner;
