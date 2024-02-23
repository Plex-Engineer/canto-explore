import Image from "next/image";
import styles from "./cards.module.scss";
import { motion } from "framer-motion";

export const EmptyCard = ({ value }: { value: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
      }}
      className={styles.emptyCard}
    >
      <Image src="/empty.svg" alt="Empty" width={100} height={100} />
      <p>
        <span>No results found for </span>“{value}”
      </p>
    </motion.div>
  );
};
