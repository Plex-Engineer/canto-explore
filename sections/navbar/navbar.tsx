"use client";

import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
	const posthog = usePostHog();

	const pathName = usePathname();

	return (
		<div className={styles.container}>
			<Link
				className={styles.logo}
				href={"https://canto.io"}
				onClick={() =>
					posthog.capture("External Link Clicked", { Website: "Canto Logo" })
				}
			>
				<Image
					className={styles.logo}
					src="/logo-3d.png"
					alt="logo"
					width={100}
					height={100}
				/>
			</Link>

			<ul className={styles.links}>
				<Link href={"/"} className={pathName === "/" ? styles.active : ""}>
					Home
				</Link>
				<Link
					href={"/eco"}
					className={pathName === "/eco" ? styles.active : ""}
				>
					Ecosystem
				</Link>
				<Link
					href={"/dev"}
					className={pathName === "/dev" ? styles.active : ""}
				>
					Developers
				</Link>
			</ul>

			<ul className={styles.buttons}>
				<Link
					href={"http://app.canto.io/bridge"}
					onClick={() =>
						posthog.capture("Navlink", {
							Website: "Launch Homepage",
						})
					}
				>
					Launch App
				</Link>
			</ul>
		</div>
	);
};
