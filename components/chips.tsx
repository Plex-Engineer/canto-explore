"use client";

import styles from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}
const Chip = ({ children, onClick, active }: Props) => {
  return (
    <div
      className={`${styles.chip} ${active && styles.active}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Chip;
