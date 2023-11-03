"use client";

import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function ThemeButton() {
  const [theme, settheme] = useState("dark");

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    settheme(newTheme);
    storeUserSetPreference(newTheme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  //   store theme preference in local storage
  const storeUserSetPreference = (pref: string) => {
    localStorage.setItem("theme", pref);
  };

  //   retrieve theme preference from storage
  const getUserSetPreference = () => {
    return localStorage.getItem("theme");
  };

  //   get system theme settings
  const getMediaQueryPreference = () => {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";

    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }
  };

  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    const mediaQueryPreference = getMediaQueryPreference();

    if (userSetPreference) {
      settheme(userSetPreference);
    } else {
      settheme(mediaQueryPreference!);
    }

    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="IconWrapper" onClick={handleToggle}>
      {theme === "light" ? (
        <IconSunFilled size={20} />
      ) : (
        <IconMoonFilled size={20} />
      )}
    </div>
  );
}

export default ThemeButton;
