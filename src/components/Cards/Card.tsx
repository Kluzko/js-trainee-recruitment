import styles from "styles/card.module.css";
import Image from "next/image";

type CardProps = {
  title: string;
  img: string;
  href: string;
  name: string;
};

export const Card = ({ name, title, img, href }: CardProps) => (
  <div className={styles.card_wrapper} id={href}>
    <p className={styles.card_annotation}>{name}</p>
    <h1
      className={styles.card_title}
      dangerouslySetInnerHTML={{ __html: title }}
    ></h1>
    <Image
      src={img}
      alt={name}
      width="817"
      height="431"
      className={styles.card_img}
    />
  </div>
);
