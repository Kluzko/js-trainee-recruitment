import type { SetStateAction, Dispatch } from "react";
import styles from "styles/menu.module.css";

type MenuItemProps = {
  name: string;
  href: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export const MenuItem = ({
  name,
  href,
  isActive,
  setIsActive,
}: MenuItemProps) => (
  <a
    href={href}
    className={isActive ? styles.link_active : styles.link}
    onClick={() => setIsActive(false)}
  >
    <li
      className={
        isActive ? `${styles.list} ${styles.list_active}` : styles.list
      }
    >
      {name}
    </li>
  </a>
);
