import Image from "next/image";
import styles from "./cards.module.scss";
import Gap from "../gap";

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
    <a href={props.links.site} className={styles.highlightCard} target="_blank">
      <Image src={props.image} alt={props.title} width={600} height={400} />

      <section className={styles.container}>
        <div className={styles.links}>
          <a href={props.links.site}>{props.category}</a>
          {props.links.twitter && <a href={props.links.twitter}>Twitter</a>}
          {props.links.github && <a href={props.links.github}>Github</a>}
        </div>
        <Gap height={8} />
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </section>
    </a>
  );
};

export default HighlightCard;