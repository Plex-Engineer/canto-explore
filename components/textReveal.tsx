import { useEffect, useState } from "react";
import styles from "./style.module.scss";

interface Props {
	text: string;
}

export default function TextReveal({ text }: Props) {
	const [start, setStart] = useState(false);

	const [aniText, setAniText] = useState("");
	const [aniTextReverse, setAniTextReverse] = useState(text);

	useEffect(() => {
		if (start) {
			textReveal();
		}
	}, [start]);

	async function textReveal() {
		for (let i = 0; i < text.length; i++) {
			let speed = 100;
			setAniText(text.slice(0, i + 1));
			setAniTextReverse((prev) => prev.slice(1, aniTextReverse.length));

			if (text[i] === " ") {
				speed = Math.floor(Math.random() * 50) + 2;

				await new Promise((res) =>
					setTimeout(res, Math.floor(Math.random() * 400) + 20)
				);
			}
			await new Promise((res) => setTimeout(res, speed));
		}
	}

	//a version of textReveal where after each word the speed of the text reveal changes

	useEffect(() => {
		setTimeout(() => {
			setStart(true);
		}, 1000);
	}, []);
	return (
		<span className={styles.textReveal}>
			{aniText}
			<span
				style={{
					position: "absolute",
					color: "#06FC99",
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
