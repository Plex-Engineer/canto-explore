import { use, useEffect, useState } from "react";
import styles from "./style.module.scss";

interface Props {
	text: string;
}

export default function TextReveal({ text }: Props) {
	const [start, setStart] = useState(false);

	const [aniText, setAniText] = useState("");
	const [aniTextReverse, setAniTextReverse] = useState(text);

	// randomize the speed of timeout to make it more natural
	const speed = Math.floor(Math.random() * 100) + 50;
	useEffect(() => {
		if (start) {
			let i = 0;
			let j = text.length - 1;

			let interval = setInterval(() => {
				setAniText(text.slice(0, i + 1));
				setAniTextReverse((prev) => prev.slice(1, aniTextReverse.length));
				i++;
				j--;
				if (i === 10) {
					clearInterval(interval);
				}
			}, speed);
		}
	}, [start]);

	//a version of textReveal where after each word the speed of the text reveal changes

	useEffect(() => {
		setTimeout(() => {
			setStart(true);
		}, 1000);
	}, []);
	return (
		<span className={styles.textReveal}>
			{/* keep adding text after delay */}
			{aniText}
			<span
				style={{
					position: "absolute",
				}}
				className={styles.cursor}
			>
				_
			</span>
			<span
				style={{
					opacity: 0.5,
				}}
			>
				{aniTextReverse}
			</span>
		</span>
	);
}
