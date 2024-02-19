interface Props {
  height?: number;
  width?: number;
}
const Gap = ({ height, width }: Props) => {
  return (
    <hr
      style={{
        marginTop: height,
        marginRight: width,
        border: "none",
      }}
    ></hr>
  );
};

export default Gap;
