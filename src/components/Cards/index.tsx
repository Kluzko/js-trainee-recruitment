import styles from "./cards.module.css";
import { Card } from "./Card";
import type { MenuList } from "data";

type CardsProps = {
  menuList: typeof MenuList;
};

export const Cards = ({ menuList }: CardsProps) => (
  <ul className={styles.container}>
    {menuList.map(({ name, title, href, img }) => (
      <Card key={name} name={name} title={title} href={href} img={img} />
    ))}
  </ul>
);
