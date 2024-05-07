"use client";

import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { useScrollLock } from "@/hooks/useScrollLock";

export const NavBar = () => {
	const posthog = usePostHog();

	const pathName = usePathname();

	const [isMenuOpen, setMenuOpen] = useState(false);

	const { lockScroll, unlockScroll } = useScrollLock();

	useEffect(() => {
		if (isMenuOpen) {
			lockScroll(0);
		} else {
			unlockScroll();
		}
	}, [isMenuOpen, lockScroll, unlockScroll]);
	return (
		<div className={styles.container}>
			<button
				className={styles.menuButton}
				onClick={() => {
					setMenuOpen(!isMenuOpen);
				}}
			>
				<Image src="/menu.svg" alt="menu" width={24} height={24} />
			</button>
			<Link
				className={styles.logo}
				href={"https://canto.io"}
				onClick={() => {
					setMenuOpen(false);

					return posthog.capture("External Link Clicked", {
						Website: "Canto Logo",
					});
				}}
			>
				<Image
					className={styles.logo}
					src="/logo-3d.png"
					alt="logo"
					width={100}
					height={100}
				/>
			</Link>

			<ul className={`${styles.links} ${isMenuOpen ? styles.menuActive : ""}`}>
				<Link
					href={"/"}
					className={pathName === "/" ? styles.active : ""}
					onClick={() => {
						setMenuOpen(false);
						return posthog.capture("Navlink", {
							Website: "Home",
						});
					}}
				>
					Home
				</Link>
				<Link
					href={"/eco"}
					className={pathName === "/eco" ? styles.active : ""}
					onClick={() => {
						setMenuOpen(false);
						return posthog.capture("Navlink", {
							Website: "Ecosystem",
						});
					}}
				>
					Ecosystem
				</Link>
				<a className={pathName === "/dev" ? styles.active : styles.comingSoon}>
					Developers
					<span>coming soon</span>
				</a>
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
