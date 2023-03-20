import { useEffect, useState, useCallback } from "react";
import type { ListType } from "types";

export const useGetActiveSection = (menuList: ListType) => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const handleScroll = useCallback(() => {
    const offset = 400;
    const scrollPosition = window.scrollY + offset;

    const activeItem = menuList.find((item) => {
      const section = document.querySelector<HTMLDivElement>(item.href);
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
  }, [menuList]);

  useEffect(() => {
    // set active menu item on first load
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeMenuItem;
};
