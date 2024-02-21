"use client";
import Chip from "@/components/chips";
import styles from "./projects.module.scss";
import { CardProps } from "@/components/cards/highlightCard";
import { useEffect, useState } from "react";
import ItemCard from "@/components/cards/itemCard";
import Input from "@/components/input/input";
import { EmptyCard } from "@/components/cards/emptyCard";

const ProjectsSections = (props: { items: CardProps[] }) => {
  const categories = props.items.reduce((acc: Record<string, number>, item) => {
    if (acc[item.category]) {
      acc[item.category]++;
    } else {
      acc[item.category] = 1;
    }
    return acc;
  }, {});

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const [filteredItems, setFilteredItems] = useState<CardProps[]>(props.items);

  useEffect(() => {
    setFilteredItems(
      props.items
        .filter(
          (item) => activeCategory === "All" || item.category === activeCategory
        )
        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [activeCategory, search, props.items]);

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
        <Input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {filteredItems.length === 0 ? (
        <EmptyCard value={search} />
      ) : (
        <section className={styles.grid}>
          {filteredItems.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </section>
      )}
    </div>
  );
};

export default ProjectsSections;
