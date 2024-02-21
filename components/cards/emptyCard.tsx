import Image from "next/image";
import styles from "./cards.module.scss";

export const EmptyCard = ({ value }: { value: string }) => {
  return (
    <div className={styles.emptyCard}>
      <Image src="/empty.svg" alt="Empty" width={100} height={100} />
      <p>
        <span>No results found for </span>“{value}”
      </p>
    </div>
  );
};
