import { useEffect, useState } from "react";

export const useIsHashActive = (hash: string) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [hash]);

  return isActive;
};
