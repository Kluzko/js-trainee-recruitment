import { useState, useRef } from "react";
import { useGetActiveSection, useOnOuterClick } from "hooks";
import { MenuList } from "data";
import styles from "./menu.module.css";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeMenuItem = useGetActiveSection(MenuList);

  useOnOuterClick(ref, () => setIsActive(false));

  return (
    <div className={styles.container} ref={ref}>
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
        {MenuList.map(({ name, href }) => {
          const isActive = activeMenuItem === href.slice(1);
          return (
            <MenuItem
              key={name}
              name={name}
              href={href}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          );
        })}
      </ul>
    </div>
  );
};
