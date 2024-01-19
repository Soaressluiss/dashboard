import Image from "next/image";
import Link from "next/link";
import Avatar01 from "../../../../public/assets/avatares/Avatar 01.png";
import Avatar02 from "../../../../public/assets/avatares/Avatar 02.png";

export default function FavTransfer() {
  return (
    <section className=" w-full min-w-[280px] h-[245.36px] md:h-[215.36px] laptop:h-[245.36px] p-6 bg-white dark:bg-dark-primaryBlue flex flex-col gap-5 rounded-md">
      <div className="w-full h-[29px] flex  justify-between items-center ">
        <h4 className="text-light-gray-900 dark:text-dark-white text-base md:text-xl font-bold font-manrope leading-[1.8113rem]">
          Favourite Transfers
        </h4>
        <Link
          href={"#"}
          className="text-light-gray-800  dark:text-dark-white text-xs md:text-sm font-manrope leading-[23.18px]"
        >
          See All
        </Link>
      </div>
      <div className=" w-full h-[50px] laptop:h-[61.82px] flex items-center gap-x-4 px-5 py-3 rounded-md border border-gray-200">
        <Image src={Avatar01} width={39} height={39} alt="avatar" />
        <p className="text-light-gray-800   dark:text-dark-white text-sm md:text-base font-bold font-manrope leading-[23.18px]">
          Kathryn Murphy
        </p>
      </div>
      <div className="w-full h-[50px] laptop:h-[61.82px] flex items-center gap-x-4 px-5 py-3 rounded-md border border-gray-200">
        <Image src={Avatar02} width={39} height={39} alt="avatar" />
        <p className="text-light-gray-800  dark:text-dark-white text-sm md:text-base font-bold font-manrope leading-[23.18px]">
          Wade Warren
        </p>
      </div>
    </section>
  );
}
