"use client";

import Image from "next/image";
import styles from "./cards.module.scss";
import Link from "next/link";
import Analytics from "@/provider/analytics";

interface Props {
  text: string;
  title: string,
  image: string;
  link: string;
}

const FooterCard = (props: Props) => {
  return (
    // new tab
    <Link
      className={styles.footerCard}
      href={props.link}
      target="_blank"
      onClick={() =>
        Analytics.actions.events.externalLinkClicked({ Website: props.title })
      }
    >
      <div>
        <Image src={props.image} alt={"link"} height={24} width={24} />
        {props.text}
      </div>
      <Image src={"/link.svg"} alt={"link"} height={32} width={32} />
    </Link>
  );
};

export default FooterCard;
