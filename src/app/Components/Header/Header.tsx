import { Sun } from "../../../../public/assets/Icons/Sun";
import { Notifications } from "../../../../public/assets/Icons/Notifications";
import Image from "next/image";
import avatar from "../../../../public/assets/avatares/Avatar00.png";
import { ArrowDown } from "../../../../public/assets/Icons/ArrowDown";

export default function Header() {
  return (
    <header className=" w-full  h-[96.60px] px-3 bg-white flex items-center justify-between">
      <article className=" flex items-center justify-between gap-x-3">
        <h2 className=" text-light-gray-900 text-[23.18px] font-bold font-manrope leading-[30.91px]">Good Morning</h2>
        <button>
          <Sun />
        </button>
      </article>
      <article className=" flex items-center justify-between gap-x-4">
      <button>
        <Notifications />
      </button>
        <Image src={avatar} height="46" width="46" alt="avatar" />
        <p className="text-light-gray-900 text-xl font-bold font-Manrope leading-[28.98px]">Kathryn</p>
        <button>
          <ArrowDown />
        </button>
      </article>
    </header>
  );
}
