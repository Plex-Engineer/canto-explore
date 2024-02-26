import Image from "next/image";
import styles from "./cards.module.scss";
import { CardProps } from "./highlightCard";

const Banner = (props: CardProps) => {
  return (
    <a
      className={styles.banner}
      href={props.links.site}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={props.image} alt="banner" width={400} height={500} />
    </a>
  );
};

export default Banner;
