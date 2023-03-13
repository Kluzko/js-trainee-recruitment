import styles from "styles/menu.module.css";

type MenuItemProps = {
  name: string;
  href: string;
  isActive: boolean;
};

export const MenuItem = ({ name, href, isActive }: MenuItemProps) => {
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
