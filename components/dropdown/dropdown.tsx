import React from "react";
import styles from "./dropdown.module.scss";
import Chip from "../chips";
import Image from "next/image";
import Gap from "../gap";

interface Props {
  items: string[];
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
        <Chip onClick={() => {}} key="View more">
          {props.items.filter((item) => props.active == item.split(" (")[0])
            .length > 0
            ? props.active
            : "View more"}
          <Gap width={2} />
          <Image
            src="/right.svg"
            alt="arrow down"
            width={16}
            height={16}
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.1s ease-in-out",
              opacity: isOpen ? 0.5 : 0.6,
            }}
          />
        </Chip>
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
