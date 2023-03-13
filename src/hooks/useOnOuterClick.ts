import type { RefObject } from "react";
import { useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnOuterClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  eventHandler: (event: Event) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        eventHandler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
