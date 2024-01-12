import React from "react";
import Image from "next/image";
import Avata03 from "../../../../public/assets/avatares/Avatar03.png";
import Avata04 from "../../../../public/assets/avatares/Avatar04.png";
import Avata05 from "../../../../public/assets/avatares/Avatar05.png";

interface ITransactionUser {
  id: number;
  name: string;
  photo: React.ReactNode;
  status: string;
  amount: string;
  date: Date;
}

const dataTransactionUser: ITransactionUser[] = [
  {
    id: 2425666,
    name: "Jenny Wilson",
    photo: <Image src={Avata03} width={30} height={30} alt="avatar 03" />,
    status: "Money In",
    amount: "+$455,00",
    date: new Date(),
  },
  {
    id: 2425667,
    name: "Robert Fox",
    photo: <Image src={Avata04} width={30} height={30} alt="avatar 04" />,
    status: "Money Out",
    amount: "-$455,00",
    date: new Date(),
  },
  {
    id: 2425668,
    name: "Jenny Wilson",
    photo: <Image src={Avata05} width={30} height={30} alt="avatar 05" />,
    status: "Money In",
    amount: "+$455,00",
    date: new Date(),
  },
];

export default function TransactionUser() {
  return (
    <div className=" flex flex-col  border-collapse border-light-gray-200 ">
      <div className=" h-11 border flex justify-around items-center gap-x-12">
        <span className="labelTable">Name</span>
        <span className="labelTable">Id</span>
        <span className="labelTable">Status</span>
        <span className="labelTable">Amount</span>
        <span className="labelTable">Date</span>
      </div>
      <div>
        {dataTransactionUser.map(({ id, name, photo, status, amount, date }) => (
          <div key={id} className="border grid grid-cols-5 mt-5 py-2 items-center">
            <div className="flex items-center gap-x-1 mx-2 labelRow">
              {photo}
              {name}
            </div>
            <span className="text-center labelRow">{id}</span>
            <span
              className={`text-center  ml-9 rounded-2xl tex-sm font-medium font-['Inter'] leading-tight p-[2px] bg-light-emerald400 max-w-max ${
                status.includes("In") ? "text-light-success700 " : "bg-[#F044381A] text-[#F04437]"
              }`}
            >
              {status}
            </span>
            <span className="labelRow">{amount}</span>
            <span className="labelRow">{date.getDate()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
