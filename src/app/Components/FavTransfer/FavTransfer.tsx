import Image from "next/image";
import Link from "next/link";
import Avatar01 from "../../../../public/assets/avatares/Avatar 01.png";
import Avatar02 from "../../../../public/assets/avatares/Avatar 02.png";

export default function FavTransfer() {
  return (
    <section className=" w-[300px] smPhone:w-[490px] md:w-[700px] laptop:w-[412.47px] h-[245.36px] p-6 bg-white dark:bg-dark-primaryBlue flex flex-col gap-5 rounded-md">
      <article className="w-full h-[29px] flex  justify-between items-center ">
        <h4 className="text-light-gray-900 dark:text-dark-white md:text-xl font-bold font-manrope leading-[28.98px]">
          Favourite Transfers
        </h4>
        <Link href={"#"} className="text-light-gray-800  dark:text-dark-white text-sm font-manrope leading-[23.18px]">
          See All
        </Link>
      </article>
      <div className=" w-full h-[61.82px] flex items-center gap-x-4 px-5 py-3 rounded-md border border-gray-200">
        <Image src={Avatar01} width={39} height={39} alt="avatar" />
        <p className="text-light-gray-800   dark:text-dark-white text-base font-bold font-manrope leading-[23.18px]">
          Kathryn Murphy
        </p>
      </div>
      <div className="w-full  h-[61.82px] flex items-center gap-x-4 px-5 py-3 rounded-md border border-gray-200">
        <Image src={Avatar02} width={39} height={39} alt="avatar" />
        <p className="text-light-gray-800  dark:text-dark-white text-base font-bold font-manrope leading-[23.18px]">
          Kathryn Murphy
        </p>
      </div>
    </section>
  );
}
