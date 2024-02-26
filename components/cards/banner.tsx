import Image from "next/image";
import styles from "./cards.module.scss";
import { CardProps } from "./highlightCard";
import Link from "next/link";

const Banner = (props: CardProps) => {
  return (
    <Link
      className={styles.banner}
      href={props.links.site}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={props.image} alt="banner" width={400} height={500} />
    </Link>
  );
};

export default Banner;
