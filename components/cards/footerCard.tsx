import Image from "next/image";
import styles from "./cards.module.scss";
interface Props {
  text: string;
  image: string;
  link: string;
}

const FooterCard = (props: Props) => {
  return (
    // new tab
    <a className={styles.footerCard} href={props.link} target="_blank">
      <div>
        <Image src={props.image} alt={"link"} height={24} width={24} />
        {props.text}
      </div>
      <Image src={"/link.svg"} alt={"link"} height={32} width={32} />
    </a>
  );
};

export default FooterCard;