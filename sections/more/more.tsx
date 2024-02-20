"use client";
import Chip from "@/components/chips";
import styles from "./more.module.scss";
import { CardProps } from "@/components/cards/highlightCard";
import { useState } from "react";
import ItemCard from "@/components/cards/itemCard";
import Input from "@/components/input/input";

const MoreSection = (props: { items: CardProps[] }) => {
  const categories = props.items.reduce((acc: Record<string, number>, item) => {
    if (acc[item.category]) {
      acc[item.category]++;
    } else {
      acc[item.category] = 1;
    }
    return acc;
  }, {});

  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <div className={styles.container}>
      <h2>Project categories</h2>

      <div className={styles.row}>
        <div className={styles.categories}>
          <Chip
            onClick={() => {
              setActiveCategory("All");
            }}
            active={activeCategory === "All"}
            key="All"
          >
            All ({props.items.length})
          </Chip>
          {Object.keys(categories).map((category) => (
            <Chip
              active={activeCategory === category}
              onClick={() => {
                setActiveCategory(category);
              }}
              key={category}
            >{`${category} (${categories[category]})`}</Chip>
          ))}

          {/* view more */}
          {Object.keys(categories).length > 2 && (
            <Chip onClick={() => {}} key="View more">
              View more
            </Chip>
          )}
        </div>
        <Input />
      </div>

      <section className={styles.grid}>
        {props.items
          .filter(
            (item) =>
              activeCategory === "All" || item.category === activeCategory
          )
          .map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
      </section>
    </div>
  );
};

export default MoreSection;
