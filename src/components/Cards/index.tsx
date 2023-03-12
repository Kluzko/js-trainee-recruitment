import styles from "styles/cards.module.css";
import { Card } from "./Card";
import { MenuList } from "data";

export const Cards = () => (
  <div className={styles.container}>
    {MenuList.map(({ name, title, href, img }) => (
      <Card key={name} name={name} title={title} href={href} img={img} />
    ))}
  </div>
);
