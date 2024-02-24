import React from "react";
import styles from "./dropdown.module.scss";

interface Props {
  items: string[];
  children: React.ReactNode;
  active: string;
  setActive: (item: string) => void;
}
const DropDown = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div
        className={`${isOpen && styles.active}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {props.children}
      </div>
      <div
        className={styles.dropdown}
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        {props.items.map((item, index) => (
          <div
            key={index + item}
            className={`${styles.item} ${
              props.active == item && styles.activeItem
            }`}
            onClick={() => {
              props.setActive(item.split(" (")[0]);
              setIsOpen(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
