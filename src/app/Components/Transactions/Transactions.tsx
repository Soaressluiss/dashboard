import { Info } from "../../../../public/assets/Icons/Info";
import TransactionUser from "../TransactionUser/TransactionUser";

export default function Transactions() {
  return (
    <section className=" col-span-2 max-h-max mt-4 grid grid-cols-1 gap-y-5 bg-white rounded-md p-4 ">
      <div className=" flex justify-between items-center px-2">
        <h4 className="text-black text-xl font-bold font-manrope leading-[28.98px] ">Transaction</h4>
        <Info />
      </div>
      <TransactionUser />
    </section>
  );
}
