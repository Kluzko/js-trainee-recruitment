import { useIsHashActive } from "hooks";
import styles from "styles/menu.module.css";

type MenuItemProps = {
  name: string;
  href: string;
};

export const MenuItem = ({ name, href }: MenuItemProps) => {
  const isActive = useIsHashActive(href);

  return (
    <li
      className={
        isActive ? `${styles.list} ${styles.list_active}` : styles.list
      }
    >
      <a href={href} className={isActive ? styles.link_active : styles.link}>
        {name}
      </a>
    </li>
  );
};
