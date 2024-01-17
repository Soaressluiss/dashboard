import React from "react";
import Image from "next/image";
import Avata03 from "../../../../public/assets/avatares/Avatar03.png";
import Avata04 from "../../../../public/assets/avatares/Avatar04.png";
import Avata05 from "../../../../public/assets/avatares/Avatar05.png";
import dayjs from "dayjs";

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
    <div className=" w-full">
      <table className="w-full border-collapse border-light-gray-200">
        <thead>
          <tr className="hidden md:flex h-11 justify-around border rounded-lg items-center gap-x-16">
            <th className="labelTable">Name</th>
            <th className="labelTable">ID</th>
            <th className="labelTable">Status</th>
            <th className="labelTable">Amount</th>
            <th className="labelTable">Date</th>
          </tr>
        </thead>
        <tbody>
          {dataTransactionUser.map(({ id, name, photo, status, amount, date }) => (
            <tr
              key={id}
              className=" border rounded-lg flex flex-col p-5 md:grid md:grid-cols-5 mt-5 py-2 items-center justify-center "
            >
              <td data-title="Name:" className=" tableLabelMobile labelRow ">
                <div className="flex items-center sm:gap-0 laptop:gap-x-3 mx-2 truncate ">
                  <span className=" hidden laptop:block">{photo}</span>
                  <p className=" text-sm md:text-base">{name}</p>
                </div>
              </td>
              <td data-title="Id:" className=" tableLabelMobile text-right md:text-center labelRow">
                {id}
              </td>

              <td>
                <span
                  data-title="Status:"
                  className={` truncate tableLabelMobile md:text-center ml-0 md:ml-9 rounded-2xl text-[13px] md:text-sm font-medium font-['Inter'] leading-tight px-2 bg-light-emerald400 ${
                    status.includes("In") ? "text-light-success700" : "bg-light-pink200 text-[#F04437]"
                  }`}
                >
                  {status}
                </span>
              </td>

              <td data-title="Amount:" className=" tableLabelMobile labelRow">
                {amount}
              </td>
              <td data-title="Date:" className=" tableLabelMobile labelRow">
                {dayjs(date.toISOString()).format("DD MMM YY")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
