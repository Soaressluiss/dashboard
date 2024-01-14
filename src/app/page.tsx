import Balance from "./Components/Balance/Balance";
import ChartDates from "./Components/Chart/Chart";
import FavTransfer from "./Components/FavTransfer/FavTransfer";
import Transactions from "./Components/Transactions/Transactions";

export default function Dashboard() {
  return (
    <main className=" md:m-8 md:grid flex flex-col items-center md:grid-cols-2 ">
      <div className=" flex items-center flex-col gap-y-7">
        <Balance />
        <FavTransfer />
      </div>
      <div className=" w-full">
        <ChartDates />
      </div>
      <Transactions />
    </main>
  );
}
