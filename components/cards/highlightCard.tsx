import styles from "./cards.module.scss";

interface Props {
  title: string;
  description: string;
  image: string;
}
const HighlightCard = (props: Props) => {
  return <article className={styles.highlightCard}>{props.title}</article>;
};

export default HighlightCard;
