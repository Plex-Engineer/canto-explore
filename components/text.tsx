import { get } from "http";

interface Props {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "accent";
  weight?: "light" | "regular" | "bold";
  align?: "left" | "center" | "right";
  family?: "primary" | "secondary";
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Text = (props: Props) => {
  const getColor = (color: string) => {
    switch (color) {
      case "primary":
        return "#CECECE";
      case "secondary":
        return "rgba(255, 255, 255, 0.50);";
      case "accent":
        return "#06FC99";
      default:
        return "#CECECE";
    }
  };

  const getSize = (size: string) => {
    switch (size) {
      case "small":
        return "16px";
      case "medium":
        return "18px";
      case "large":
        return "20px";
      default:
        return "20px";
    }
  };

  const getWeight = (weight: string) => {
    switch (weight) {
      case "light":
        return 300;
      case "regular":
        return 400;
      case "bold":
        return 700;
      default:
        return 400;
    }
  };

  const getAlign = (align: string) => {
    switch (align) {
      case "left":
        return "left";
      case "center":
        return "center";
      case "right":
        return "right";
      default:
        return "left";
    }
  };

  return (
    <div
      style={{
        ...props.style,
        fontSize: getSize(props.size || "medium"),
        color: getColor(props.color || "primary"),
        fontWeight: getWeight(props.weight || "regular"),
        textAlign: getAlign(props.align || "left"),
        fontFamily:
          props.family === "primary" ? "var(--vcr)" : "var(--rm-mono)",
        textTransform: props.family === "primary" ? "uppercase" : "none",
        lineHeight: props.family === "primary" ? "177%" : "178%",
      }}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Text;
