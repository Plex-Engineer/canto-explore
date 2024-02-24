"use client";
import Chip from "@/components/chips";
import styles from "./projects.module.scss";
import { CardProps } from "@/components/cards/highlightCard";
import { useEffect, useState } from "react";
import ItemCard from "@/components/cards/itemCard";
import Input from "@/components/input/input";
import { EmptyCard } from "@/components/cards/emptyCard";
import { AnimatePresence, motion } from "framer-motion";
import DropDown from "@/components/dropdown/dropdown";

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

  //   searches closest match
  const querySearch = (title: string, search: string) => {
    let count = 0;
    for (let i = 0; i < search.length; i++) {
      if (title.includes(search[i])) {
        count++;
      }
    }
    return count;
  };

  useEffect(() => {
    setFilteredItems(
      props.items
        .filter(
          (item) => activeCategory === "All" || item.category === activeCategory
        )

        .filter(
          (item) =>
            search.length === 0 ||
            querySearch(item.title.toLowerCase(), search.toLowerCase()) >
              search.length / 2
        )
        .sort((a, b) => {
          return (
            querySearch(b.title.toLowerCase(), search.toLowerCase()) -
            querySearch(a.title.toLowerCase(), search.toLowerCase())
          );
        })
    );
  }, [activeCategory, search, props.items]);

  return (
    <section className={styles.container}>
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
          {Object.keys(categories)
            .slice(0, 3)
            .map((category) => (
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
            <DropDown
              active={activeCategory}
              setActive={(item: string) => {
                setActiveCategory(item);
              }}
              items={Object.keys(categories)
                .slice(3, Object.keys(categories).length)
                .map((category) => `${category} (${categories[category]})`)}
            >
              <Chip onClick={() => {}} key="View more">
                View more
              </Chip>
            </DropDown>
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
        <motion.section layout className={styles.grid}>
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <ItemCard key={index} {...item} />
            ))}
          </AnimatePresence>
        </motion.section>
      )}
    </section>
  );
};

export default ProjectsSections;
