"use client";
import { Notifications } from "../../../../public/assets/Icons/Notifications";
import Image from "next/image";
import avatar from "../../../../public/assets/avatares/Avatar00.png";
import { useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ChevronDownIcon, Bars4Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header
      className=" sticky top-0 z-10 w-full h-14 md:h-[96.60px] px-3 laptop:px-7 bg-white dark:bg-dark-primaryBlue flex  md:gap-0 items-center justify-between border-b
    border-light-gray-800/40 dark:border-dark-white/40"
    >
      <article className=" relative flex items-center justify-between gap-x-[13px]">
        {toggleMenu && <MenuMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />}
        <button className="block laptop:hidden" onClick={() => setToggleMenu(true)}>
          <Bars4Icon className=" h-8 text-black dark:text-white" />
        </button>
        <h2 className=" hidden md:block text-light-gray-900 dark:text-dark-white text-[16px] md:text-[23.18px] font-bold font-manrope leading-[30.91px]">
          Good Morning
        </h2>
        <ToggleTheme />
      </article>
      <article className=" flex items-center justify-between gap-x-4 md:gap-x-[38px]">
        <button className=" z-0 w-8 md:w-10 animate-pulse hover:animate-none rounded-full hover:outline hover:outline-1 hover:outline-light-primaryBlue">
          <Notifications />
        </button>
        <div className=" flex items-center justify-center gap-x-3">
          <Image className="hidden md:block" src={avatar} height="46" width="46" alt="avatar" />
          <p className="text-light-gray-900  dark:text-dark-white text-base md:text-xl font-bold font-manrope leading-[28.98px]">
            Kathryn
          </p>
          <button>
            <ChevronDownIcon className=" w-4 h-4 text-black dark:text-white" />
          </button>
        </div>
      </article>
    </header>
  );
}
