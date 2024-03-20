import styles from "./style.module.scss";
interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Card = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
