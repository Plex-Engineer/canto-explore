interface Props {
	direction: "row" | "column";
	gap: string;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}
const Container = (props: Props) => {
	return (
		<div
			className={props.className}
			style={
				{
					display: "flex",
					flexDirection: props.direction,
					gap: props.gap,
					...props.style,
				} as React.CSSProperties
			}
		>
			{props.children}
		</div>
	);
};

export default Container;
