interface Props {
  direction: "row" | "column";
  gap: string;
  children: React.ReactNode;
}
const Container = (props: Props) => {
  return (
    <div
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
