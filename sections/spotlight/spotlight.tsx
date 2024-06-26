"use client";

import HighlightCard, {
	CardProps,
} from "@/app/eco/components/cards/highlightCard";
import styles from "./spotlight.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Autoplay,
} from "swiper/modules";
import Gap from "@/components/gap";
import useMobile from "@/hooks/useMobile";

const Spotlight = (props: { items: CardProps[]; header: boolean }) => {
	const isMobile = useMobile();

	return (
		<section className={styles.spotlight}>
			{props.header && (
				<>
					<Gap height={100} />
					<h2 className={styles.title}>
						spotlight on <span>innovation</span>
						<svg
							className={styles.ray}
							xmlns="http://www.w3.org/2000/svg"
							width="872"
							height="649"
							viewBox="0 0 872 649"
							fill="none"
						>
							<g filter="url(#filter0_f_858_18830)">
								<path
									d="M100.056 100.629L920.5 425L920.5 548.629L112.556 276.129L100.056 100.629Z"
									fill="url(#paint0_linear_858_18830)"
									fill-opacity="0.15"
								/>
							</g>
							<defs>
								<filter
									id="filter0_f_858_18830"
									x="0.0557861"
									y="0.628906"
									width="1020.44"
									height="648"
									filterUnits="userSpaceOnUse"
									color-interpolation-filters="sRGB"
								>
									<feFlood flood-opacity="0" result="BackgroundImageFix" />
									<feBlend
										mode="normal"
										in="SourceGraphic"
										in2="BackgroundImageFix"
										result="shape"
									/>
									<feGaussianBlur
										stdDeviation="50"
										result="effect1_foregroundBlur_858_18830"
									/>
								</filter>
								<linearGradient
									id="paint0_linear_858_18830"
									x1="-383.113"
									y1="45.679"
									x2="792.837"
									y2="371.772"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#D9D9D9" />
									<stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</h2>
				</>
			)}

			<Gap height={40} />

			<section className={styles.container}>
				<Swiper
					effect={"coverflow"}
					centeredSlides={true}
					loop={true}
					slidesPerView={isMobile ? 1 : 2}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
						slideShadows: false,
					}}
					autoplay={{
						pauseOnMouseEnter: true,
						delay: 10000,
					}}
					initialSlide={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					className={styles.swiper}
					modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
					spaceBetween={"7%"}
				>
					{props.items.map((item, index) => (
						<SwiperSlide
							lazy={false}
							className={styles.slides}
							key={index + item.title}
						>
							{({ isActive }) => (
								<div
									style={{
										opacity: isActive ? 1 : 0.5,
										transition: "opacity 0.5s",
									}}
								>
									<HighlightCard
										style={{
											height: isMobile ? "530px" : "",
										}}
										active={isActive}
										key={index + item.title + "h"}
										{...item}
									/>
								</div>
							)}
						</SwiperSlide>
					))}
					<div className={`swiper-pagination ${styles.pagination}`}></div>
				</Swiper>
			</section>
			<Gap height={30} />
		</section>
	);
};

export default Spotlight;
