
import { motion } from "framer-motion";
import styles from "./style.module.scss";

interface Props {
    text: string;
}

export default function TextReveal({ text } : Props) {
  return (
    <motion.span
    className={styles.textReveal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{  color:"#464646"}}
          animate={{  color:"#fff"}}
          transition={{ duration: 1, delay: index * 0.07 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}