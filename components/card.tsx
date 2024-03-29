"use client";
import styles from "./style.module.scss";

import { motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
const Card = (props: Props) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 80, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.7, bounce: 0.1, ease: "backOut"}}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      className={`${styles.card} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
