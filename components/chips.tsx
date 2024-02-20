import styles from "./style.module.scss";

const Chip = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.chip}>{children}</div>;
};

export default Chip;
