import Image from "next/image";
import Link from "next/link";
import Avatar01 from "../../../../public/assets/avatares/Avatar 01.png";
import Avatar02 from "../../../../public/assets/avatares/Avatar 02.png";

export default function FavTransfer() {
  return (
    <section className="w-[412.47px] h-[245.36px] p-6 bg-white flex flex-col gap-5 rounded-md">
      <article className="w-[364.96px] h-[29px] flex justify-between items-center ">
        <h4 className="text-light-gray-900 text-xl font-bold font-Manrope leading-[28.98px]">Favourite Transfers</h4>
        <Link href={"#"} className="text-light-gray-800 text-sm font-Manrope leading-[23.18px]">
          See All
        </Link>
      </article>
      <div className="w-[365.14px] h-[61.82px] flex items-center gap-x-4 px-5 py-3 rounded-md border border-gray-200">
        <Image src={Avatar01} width={39} height={39} alt="avatar" />
        <div className="text-light-gray-800 text-base font-bold font-Manrope leading-[23.18px]">Kathryn Murphy</div>
      </div>
      <div className="w-[365.14px] h-[61.82px] flex items-center gap-x-4 px-5 py-3 rounded-md border border-gray-200">
        <Image src={Avatar02} width={39} height={39} alt="avatar" />
        <div className="text-light-gray-800 text-base font-bold font-Manrope leading-[23.18px]">Kathryn Murphy</div>
      </div>
    </section>
  );
}
