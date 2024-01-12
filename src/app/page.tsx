import Balance from "./Components/Balance/Balance";
import ChartDates from "./Components/Chart/Chart";
import FavTransfer from "./Components/FavTransfer/FavTransfer";
import Transactions from "./Components/Transactions/Transactions";

export default function Dashboard() {
  return (
    <main className=" m-8 grid grid-cols-2">
      <div className=" flex flex-col gap-y-7">
        <Balance />
        <FavTransfer />
      </div>
      <ChartDates />
      <Transactions />
    </main>
  );
}
