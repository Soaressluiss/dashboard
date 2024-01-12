"use client";

import { useState } from "react";
import { CreditCard } from "../../../../public/assets/Icons/CreditCard";
import { Invoice } from "../../../../public/assets/Icons/Invoice";
import { Logo } from "../../../../public/assets/Icons/Logo";
import { Menu } from "../../../../public/assets/Icons/Menu";
import { User } from "../../../../public/assets/Icons/User";
import { Settings } from "../../../../public/assets/Icons/settings";
import { Money } from "../../../../public/assets/Icons/Money";
import Link from "next/link";

export default function SideBar() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("Dashboard");

  const menu = [
    {
      icon: <Menu />,
      title: "Dashboard",
      onClick: () => setSelectedMenuItem("Dashboard"),
      path:"/"
    },
    {
      icon: <User />,
      title: "My Accounts",
      onClick: () => setSelectedMenuItem("My Accounts"),
      path:"/accounts"
    },
    {
      icon: <CreditCard />,
      title: "My Cards",
      onClick: () => setSelectedMenuItem("My Cards"),
      path: "/cards"
    },
    {
      icon: <Money />,
      title: "Fund Transfer",
      onClick: () => setSelectedMenuItem("Fund Transfer"),
      path: '/transfer'
    },
    {
      icon: <Invoice />,
      title: "Bill Payment",
      onClick: () => setSelectedMenuItem("Bill Payment"),
      path:"/bill"
    },
    {
      icon: <Settings />,
      title: "Settings",
      onClick: () => setSelectedMenuItem("Settings"),
      path: "/settings"
    },
  ];

  return (
    <section className="bg-black w-full h-full flex flex-col items-center gap-4">
      <div className="m-10 cursor-pointer">
        <Logo />
      </div>
      <nav className="w-full max-h-max flex flex-col relative gap-5">
        {menu.map((item, index) => (
          <Link href={item.path}
            className={`flex gap-x-3 p-3 ml-3 items-center cursor-pointer hover:bg-light-gray-800 hover:rounded-tl-xl hover:rounded-bl-xl ${
              selectedMenuItem === item.title ? "bg-light-primaryBlue rounded-tl-xl rounded-bl-xl" : "bg-black"
            } duration-100 ease-linear`}
            key={index}
            onClick={item.onClick}
          >
            <span className="cursor-pointer">{item.icon}</span>
            <p className="font-manrope text-base font-semibold text-light-gray-200 leading-6 cursor-pointer">
              {item.title}
            </p>
          </Link>
        ))}
      </nav>
    </section>
  );
}
