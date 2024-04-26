import Image from "next/image";
import React from "react";
import Card from "./card";
import Text from "./text";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
interface Props {
	title: string;
	content: string;
	direction?: "row" | "column" | "row-reverse";
	image: string;
	extra?: React.ReactNode;
	imgHeight?: string;
	className?: string;
	glow?: {
		x: number;
		y: number;
		size?: number;
	};
	lineDirection?: "left" | "right";
}
export const CardOutlined = ({
	title,
	content,
	direction,
	extra,
	imgHeight,
	className,
	image,
	glow,
	lineDirection,
}: Props) => {
	return (
		<div
			style={{
				width: "100%",
				position: "relative",
			}}
			className={styles.cardOutlined}
		>
			{lineDirection && (
				<motion.div
					initial={{ width: 0 }}
					animate={{ width: "100vmax" }}
					className={styles.line}
					style={{
						top: "50%",
						left: lineDirection === "right" ? 0 : "auto",
						right: lineDirection === "left" ? 0 : "auto",
						width: "100vmax",
						height: "1px",
					}}
				></motion.div>
			)}

			{glow && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.1 }}
					transition={{
						delay: 1,
						direction: "forward",
					}}
					className={styles.glow}
					style={{
						top: `${glow.y}%`,
						left: `${glow.x}%`,
						width: `${glow.size ? glow.size + "%" : 100 + "px"}`,
					}}
				></motion.div>
			)}
			<Card
				className={`${styles.cardOutlined} ${className}`}
				style={{
					flexDirection: direction,
					gap: "24px",
					width: "100%",
				}}
			>
				<div
					style={{
						height: imgHeight ? imgHeight : "350px",
						flex: 1,
					}}
				>
					<Image
						src={image}
						alt="Canto Bridge"
						width={Number((imgHeight ? imgHeight : "350px").replace("px", ""))}
						height={Number((imgHeight ? imgHeight : "350px").replace("px", ""))}
						style={{
							width: "100%",
							objectFit: "cover",
							outline: "#171717 1px solid",
						}}
					/>
				</div>
				<div
					className="content"
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						gap: "16px",
					}}
				>
					<Text family="primary" size="medium" className={styles.title}>
						{title}
					</Text>
					<Text color="secondary" size="small" weight="regular">
						{content}
					</Text>
					<div
						style={{
							flex: 1,
						}}
					></div>
					{extra}
				</div>
			</Card>
		</div>
	);
};
