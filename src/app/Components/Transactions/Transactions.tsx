import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import TransactionUser from "../TransactionUser/TransactionUser";

export default function Transactions() {
  return (
    <section className=" w-full md:col-span-2 max-h-max mt-4 grid place-items-center grid-cols-1 gap-y-5 bg-white dark:bg-dark-primaryBlue rounded-md p-4 ">
      <div className=" flex mx-4 w-full justify-between items-center">
        <h4 className="text-black dark:text-dark-white text-xl font-bold font-manrope leading-[28.98px] ">
          Transaction
        </h4>
        <EllipsisVerticalIcon className=" h-5 text-black dark:text-white" />
      </div>
      <TransactionUser />
    </section>
  );
}
