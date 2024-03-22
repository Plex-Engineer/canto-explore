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
      //   initial={{ rotateX: 70, opacity: 0.1 }}
      //   variants={{
      //     visible: { rotateX: 0, opacity: 1 },
      //     hidden: { rotateX: 70, opacity: 0.1 },
      //   }}
      //   transition={{ duration: 0.5 }}
      className={`${styles.card} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
