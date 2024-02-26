import Image from "next/image";
import styles from "./cards.module.scss";
import Gap from "../gap";
import Link from "next/link";

export interface CardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  links: {
    site: string;
    twitter?: string;
    github?: string;
  };
}
const HighlightCard = (props: CardProps) => {
  return (
    <Link
      href={props.links.site}
      className={styles.highlightCard}
      target="_blank"
    >
      <Image src={props.image} alt={props.title} width={600} height={400} />

      <section className={styles.container}>
        <div className={styles.links}>
          <Link href={props.links.site}>{props.category}</Link>
          {props.links.twitter && (
            <Link href={props.links.twitter}>Twitter</Link>
          )}
          {props.links.github && <Link href={props.links.github}>Github</Link>}
        </div>
        <Gap height={8} />
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </section>
    </Link>
  );
};

export default HighlightCard;
