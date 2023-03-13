import { useState } from "react";
import styles from "styles/menu.module.css";
import { MenuItem } from "./MenuItem";
import { MenuList } from "data";
import { useGetActiveSection } from "hooks";

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const activeMenuItem = useGetActiveSection(MenuList);
  console.log(activeMenuItem);

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h1 className={styles.header}>Your new gang</h1>
        <div
          className={styles.menu_icon}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span className={isActive ? styles.hamburger_middle : ""}></span>
          <span></span>
        </div>
      </div>

      <ul className={isActive ? styles.menu_active : styles.menu}>
        {MenuList.map(({ name, href }) => (
          <MenuItem
            key={name}
            name={name}
            href={href}
            isActive={activeMenuItem === href.slice(1)}
          />
        ))}
      </ul>
    </div>
  );
};
