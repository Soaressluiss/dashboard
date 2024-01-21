import { Sun } from "../../../../public/assets/Icons/Sun";
import { Moon } from "../../../../public/assets/Icons/Moon";
import { useEffect } from "react";

export default function ToggleTheme() {
  useEffect(() => {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const pageClasses = document.documentElement.classList;

    systemPreference && pageClasses.toggle("dark");
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <button className="block dark:hidden w-7 h-7" onClick={toggle}>
        <Moon />
      </button>
      <button className="hidden dark:block w-7 h-7" onClick={toggle}>
        <Sun />
      </button>
    </>
  );
}
