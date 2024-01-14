import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import TransactionUser from "../TransactionUser/TransactionUser";

export default function Transactions() {
  return (
    <section className=" w-[450px] md:w-full col-span-1 md:col-span-2 max-h-max mt-4 grid grid-cols-1 gap-y-5 bg-white dark:bg-dark-primaryBlue rounded-md p-4 ">
      <div className=" flex mx-4 justify-between items-center">
        <h4 className="text-black dark:text-dark-white text-xl font-bold font-manrope leading-[28.98px] ">Transaction</h4>
        <EllipsisVerticalIcon className=" h-5 text-black dark:text-white" />
      </div>
      <TransactionUser />
    </section>
  );
}
