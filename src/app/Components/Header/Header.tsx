"use client";
import { Sun } from "../../../../public/assets/Icons/Sun";
import { Notifications } from "../../../../public/assets/Icons/Notifications";
import Image from "next/image";
import avatar from "../../../../public/assets/avatares/Avatar00.png";
import { ArrowDown } from "../../../../public/assets/Icons/ArrowDown";
import { Hamburguer } from "../../../../public/assets/Icons/Hamburguer";
import { useState } from "react";
import MenuMobile from "../MenuMobile/MenuMobile";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header className="  w-full h-14 md:h-[96.60px] px-3 bg-white flex gap-12 md:gap-0 items-center justify-between mb-4">
      <article className=" relative flex items-center justify-between gap-x-3">
        {toggleMenu && <MenuMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />}
        <button className="block laptop:hidden" onClick={() => setToggleMenu(true)}>
          <Hamburguer />
        </button>
        <h2 className=" hidden md:block text-light-gray-900 text-[16px] md:text-[23.18px] font-bold font-manrope leading-[30.91px]">
          Good Morning
        </h2>
        <button>
          <Sun />
        </button>
      </article>
      <article className=" flex items-center justify-between gap-x-4 md:gap-x-5">
        <button className=" animate-pulse hover:animate-none rounded-full hover:outline hover:outline-1 hover:outline-light-primaryBlue">
          <Notifications />
        </button>
        <Image className="hidden md:block" src={avatar} height="46" width="46" alt="avatar" />
        <p className="text-light-gray-900 text-base md:text-xl font-bold font-manrope leading-[28.98px]">Kathryn</p>
        <button>
          <ArrowDown />
        </button>
      </article>
    </header>
  );
}
