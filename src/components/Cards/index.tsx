import type { ListType } from "types";
import { Card } from "./Card";
import styles from "./cards.module.css";

type CardsProps = {
  menuList: ListType;
};

export const Cards = ({ menuList }: CardsProps) => (
  <ul className={styles.container}>
    {menuList.map(({ name, title, href, img }) => (
      <Card key={name} name={name} title={title} href={href} img={img} />
    ))}
  </ul>
);
