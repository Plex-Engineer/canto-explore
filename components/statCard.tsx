import styles from "./style.module.scss";
import Card from "./card";
import Container from "./container";
import { motion } from "framer-motion";
interface Props {
	primary: string;
	secondary: string;
}
const StatCard = ({ primary, secondary }: Props) => {
	return (
		<div
			style={{
				position: "relative",
				width: "100%",
			}}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.1 }}
				transition={{
					delay: 1,
					direction: "forward",
				}}
				className={styles.glow}
				style={{
					top: `50%`,
					left: `$50%`,
					width: `100%`,
				}}
			></motion.div>
			<Card className={styles.stat}>
				<Container direction="column" gap="20">
					<p>{primary}</p>
					<h4>{secondary}</h4>
				</Container>
			</Card>
		</div>
	);
};

export default StatCard;
