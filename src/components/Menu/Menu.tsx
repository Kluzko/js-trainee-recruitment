import styles from "styles/menu.module.css";
import { MenuItem } from "./MenuItem";
import { MenuList } from "./MenuList";

export const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container_header}>Your new gang</h1>
      <ul className={styles.menu}>
        {MenuList.map(({ name, href }) => (
          <MenuItem key={name} name={name} href={href} />
        ))}
      </ul>
    </div>
  );
};
