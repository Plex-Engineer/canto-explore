"use client";

import FooterCard from "@/app/eco/components/cards/footerCard";
import styles from "./footer.module.scss";

const Footer = () => {
	return (
		<div
			className={styles.container}
			style={{
				borderTop: "1px solid #2D2D2D",
			}}
		>
			<div className={styles["inner_container"]}>
				<FooterCard
					text="Follow on X"
					title="Twitter"
					image="/twitter.svg"
					link="https://twitter.com/CantoPublic"
				/>
				<FooterCard
					text="Discord"
					title="Discord"
					image="/discord.svg"
					link="https://discord.com/invite/63GmEXZsVf"
				/>
				<div
					className={styles.divider}
					style={{
						width: "100%",
					}}
				></div>
				<FooterCard
					text="Docs"
					title="Documentation"
					image="/doc.svg"
					link="https://docs.canto.io/"
				/>
				<FooterCard
					text="Blog"
					title="Blog"
					image="/blog.svg"
					link="https://canto.mirror.xyz/"
				/>
			</div>
		</div>
	);
};

export default Footer;
