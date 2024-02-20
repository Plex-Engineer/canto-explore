import Chip from "@/components/chips";
import styles from "./more.module.scss";
import { CardProps } from "@/components/cards/highlightCard";

const MoreSection = (props: { items: CardProps[] }) => {
  const categories = props.items.reduce((acc: Record<string, number>, item) => {
    if (acc[item.category]) {
      acc[item.category]++;
    } else {
      acc[item.category] = 1;
    }
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <h2>Project categories</h2>

      <div className={styles.categories}>
        <Chip key="All">All ({props.items.length})</Chip>
        {Object.keys(categories).map((category) => (
          <Chip key={category}>{`${category} (${categories[category]})`}</Chip>
        ))}

        {/* view more */}
        {Object.keys(categories).length > 2 && (
          <Chip key="View more">View more</Chip>
        )}
      </div>
    </div>
  );
};

export default MoreSection;
