import Image from "next/image";
import styles from "./cards.module.scss";
import Gap from "../gap";
import { CardProps } from "./highlightCard";

const ItemCard = (props: CardProps) => {
  return (
    <article className={`${styles.highlightCard} ${styles.itemCard}`}>
      <Image src={props.image} alt={props.title} width={100} height={100} />

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
    </article>
  );
};

export default ItemCard;
