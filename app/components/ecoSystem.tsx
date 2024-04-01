import { Projects } from "@/config/data";
import HighlightCard from "../eco/components/cards/highlightCard";
import ItemCard from "../eco/components/cards/itemCard";

const EcoSystem = () => {
	return (
		<section
			style={{
				display: "flex",
				gap: "20px",
				overflowX: "scroll",
				width: "100%",
				height: "100%",
			}}
		>
			{Projects.map((item, index) => (
				<div key={index}>
					<div
						key={index}
						style={{
							width: "600px",
							height: "100%",
							backgroundColor: "#1A1A1A",
						}}
					>
						<ItemCard key={index + item.title + "note"} {...item} />
					</div>
				</div>
			))}
		</section>
	);
};

export default EcoSystem;
