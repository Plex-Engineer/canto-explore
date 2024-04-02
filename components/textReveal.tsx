import { motion } from "framer-motion";
import styles from "./style.module.scss";
import ReactTypingEffect from "react-typing-effect";

interface Props {
	text: string;
}

export default function TextReveal({ text }: Props) {
	return (
		<div
			style={{
				position: "relative",
				display: "inline-block",
			}}
		>
			<p
				className={styles.textReveal}
				style={{
					opacity: 0.4,
					display: "flex",
				}}
			>
				{text}
			</p>
			<div
				style={{
					display: "inline-block",
					position: "absolute",
					top: 0,
				}}
			>
				<ReactTypingEffect
					speed={50}
					cursor="_"
					typingDelay={1000}
					className={`${styles.textReveal} `}
					text={text}
				/>
			</div>
		</div>
	);
}
