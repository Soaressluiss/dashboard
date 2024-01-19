"use client";

import { useEffect, useRef, useState } from "react";
import { CreditCard } from "../../../../public/assets/Icons/CreditCard";
import { Invoice } from "../../../../public/assets/Icons/Invoice";
import { Logo } from "../../../../public/assets/Icons/Logo";
import { Menu } from "../../../../public/assets/Icons/Menu";
import { User } from "../../../../public/assets/Icons/User";
import { Settings } from "../../../../public/assets/Icons/settings";
import { Money } from "../../../../public/assets/Icons/MoneyIcon";
import Link from "next/link";

interface props {
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MenuMobile({ toggleMenu, setToggleMenu }: props) {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("Dashboard");
  const menuRef = useRef<HTMLDivElement>(null);
  const menu = [
    {
      icon: <Menu />,
      title: "Dashboard",
      onClick: () => {
        setSelectedMenuItem("Dashboard");
        setToggleMenu(false);
      },
      path: "/",
    },
    {
      icon: <User />,
      title: "My Accounts",
      onClick: () => {
        setSelectedMenuItem("My Accounts");
        setToggleMenu(false);
      },
      path: "/accounts",
    },
    {
      icon: <CreditCard />,
      title: "My Cards",
      onClick: () => {
        setSelectedMenuItem("My Cards");
        setToggleMenu(false);
      },
      path: "/cards",
    },
    {
      icon: <Money />,
      title: "Fund Transfer",
      onClick: () => {
        setSelectedMenuItem("Fund Transfer");
        setToggleMenu(false);
      },
      path: "/transfer",
    },
    {
      icon: <Invoice />,
      title: "Bill Payment",
      onClick: () => setSelectedMenuItem("Bill Payment"),
      path: "/bill",
    },
    {
      icon: <Settings />,
      title: "Settings",
      onClick: () => setSelectedMenuItem("Settings"),
      path: "/settings",
    },
  ];


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setToggleMenu]);


  return (
    <section className={`${!toggleMenu && `hidden`} top-0 absolute z-40 w-full h-full bg-black/40 laptop:hidden  `}>
      <div ref={menuRef} className=" bg-dark-gray700 dark:bg-light-secondaryBlue w-1/2 smPhone:w-1/3 md:w-1/4 h-full animate-fadeIn pt-12 flex flex-col items-center gap-y-10">
        <Link href="/" title="N Banking" className=" cursor-pointer  bg-dark-gray700 dark:bg-light-secondaryBlue">
          <Logo />
        </Link>
        <nav className="w-full max-h-max flex flex-col gap-6  bg-dark-gray700 dark:bg-light-secondaryBlue">
          {menu.map((item, index) => (
            <Link
              href={item.path}
              className={`flex gap-x-3 p-2 ml-3 items-center cursor-pointer hover:bg-light-gray-800 hover:rounded-tl-xl hover:rounded-bl-xl ${
                selectedMenuItem === item.title
                  ? "bg-light-primaryBlue rounded-tl-xl rounded-bl-xl"
                  : " bg-dark-gray700 dark:bg-light-secondaryBlue"
              } duration-100 ease-linear`}
              key={index}
              onClick={item.onClick}
            >
              <span className=" hidden md:block cursor-pointer">{item.icon}</span>
              <p className="font-manrope text-sm md:text-base font-semibold text-light-gray-200 leading-6 cursor-pointer">
                {item.title}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

