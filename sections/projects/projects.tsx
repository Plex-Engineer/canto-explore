"use client";
import Chip from "@/components/chips";
import styles from "./projects.module.scss";
import { CardProps } from "@/app/eco/components/cards/highlightCard";
import { useEffect, useState } from "react";
import ItemCard from "@/app/eco/components/cards/itemCard";
import Input from "@/components/input/input";
import { EmptyCard } from "@/app/eco/components/cards/emptyCard";
import { AnimatePresence, motion } from "framer-motion";
import DropDown from "@/components/dropdown/dropdown";
import useMobile from "@/hooks/useMobile";
import Gap from "@/components/gap";

const ProjectsSections = (props: { items: CardProps[] }) => {
	const isMobile = useMobile();
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
			<h2 className={styles.header}>
				Project Based On <span>Categories</span>
			</h2>
			<Gap height={20} />
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

					{!isMobile &&
						Object.keys(categories)
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

					{!isMobile && Object.keys(categories).length > 2 && (
						<DropDown
							active={activeCategory}
							setActive={(item: string) => {
								setActiveCategory(item);
							}}
							items={Object.keys(categories)
								.slice(isMobile ? 0 : 3, Object.keys(categories).length)
								.map((category) => `${category} (${categories[category]})`)}
						/>
					)}

					{isMobile &&
						Object.keys(categories).map((category) => (
							<Chip
								active={activeCategory === category}
								onClick={() => {
									setActiveCategory(category);
								}}
								key={category}
							>{`${category} (${categories[category]})`}</Chip>
						))}
				</div>
				<Input
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
			</div>
			<Gap height={20} />

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
