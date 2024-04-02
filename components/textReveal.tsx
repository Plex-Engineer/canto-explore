import { motion } from "framer-motion";
import styles from "./style.module.scss";

interface Props {
	text: string;
}

export default function TextReveal({ text }: Props) {
	return (
		<motion.span
			className={styles.textReveal}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			{text.split("").map((char, index) => (
				<>
					<motion.span
						key={index}
						initial={{ color: "#464646" }}
						animate={{ color: "#fff" }}
						transition={{ duration: 1, delay: index * 0.07 }}
					>
						{char}
					</motion.span>
					<motion.span
						style={{
							position: "absolute",
							marginLeft: "5px",
							transform: "translateY(-1px)",
							color: "#06FC99",
						}}
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 0, 1, 0, 0, 0, 0] }}
						transition={{ duration: 0.9, delay: index * 0.07 - 0.2 }}
					>
						|
					</motion.span>
				</>
			))}
		</motion.span>
	);
}
