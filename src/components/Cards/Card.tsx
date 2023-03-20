import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./card.module.css";

type CardProps = {
  title: string;
  img: string;
  href: string;
  name: string;
};

// Instead of dangerouslySetInnerHTML i choose to use more secure solution with React Markdown

export const Card = ({ name, title, img, href }: CardProps) => (
  <li className={styles.card_wrapper} id={href.slice(1)}>
    <p className={styles.card_annotation}>{name}</p>
    <ReactMarkdown>{title}</ReactMarkdown>
    <Image
      src={img}
      alt={name}
      width="817"
      height="431"
      className={styles.card_img}
    />
  </li>
);
