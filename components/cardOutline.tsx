import Image from "next/image";
import React from "react";
import Card from "./card";
import Text from "./text";
import styles from "./style.module.scss";

interface Props {
  title: string;
  content: string;
  direction?: "row" | "column" | "row-reverse";
  image: string;
  extra?: React.ReactNode;
  imgHeight?: string;
  className?: string;
}
export const CardOutlined = ({
  title,
  content,
  direction,
  extra,
  imgHeight,
  className,
  image
}: Props) => {
  return (
    <Card
      className={`${styles.cardOutlined} ${className}`}
      style={{
        flexDirection: direction,
        gap: "24px",
        width: "100%",
      }}
    >
      <div
        style={{
          height: imgHeight ? imgHeight : "350px",
          flex: 1,
        }}
      >
        <Image
          src={image}
          alt="Canto Bridge"
          width={Number((imgHeight ? imgHeight : "350px").replace("px", ""))}
          height={Number((imgHeight ? imgHeight : "350px").replace("px", ""))}
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Text family="primary" size="medium" className={styles.title}>
          {title}
        </Text>
        <Text color="secondary" size="small" weight="regular">
          {content}
        </Text>
        <div
          style={{
            flex: 1,
          }}
        ></div>
        {extra}
      </div>
    </Card>
  );
};
