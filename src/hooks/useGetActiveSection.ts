import { MenuList } from "data";
import { useEffect, useState } from "react";

type MenuListProps = typeof MenuList;

export const useGetActiveSection = (menuList: MenuListProps): string => {
  const [activeMenuItem, setActiveMenuItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // add offset for better postioning of section
      const scrollPosition = window.scrollY + 400;

      const activeItem = menuList.find((item) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          const isScroolInSection =
            scrollPosition >= sectionTop && scrollPosition < sectionBottom;

          return isScroolInSection;
        }
        return false;
      });
      if (activeItem) {
        setActiveMenuItem(activeItem.href.slice(1));
      }
    };

    // set active menu item on first load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuList]);

  return activeMenuItem;
};
