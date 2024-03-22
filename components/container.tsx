interface Props {
  direction: "row" | "column";
  gap: string;
  children: React.ReactNode;
  className?: string;
}
const Container = (props: Props) => {
  return (
    <div
      className={props.className}
      style={{
        display: "flex",
        flexDirection: props.direction,
        gap: props.gap,
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
