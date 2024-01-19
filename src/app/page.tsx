import Balance from "./Components/Balance/Balance";
import ChartDates from "./Components/Chart/Chart";
import FavTransfer from "./Components/FavTransfer/FavTransfer";
import Transactions from "./Components/Transactions/Transactions";

export default function Dashboard() {
  return (
    <main className="m-3 laptop:m-[31px] flex flex-col items-center  ">
      <section className=" flex flex-col items-center laptop:gap-7 laptop:flex-row w-full mb-[0.8125rem]">
        <div className=" w-full laptop:max-w-[412px] mb-4 laptop:mb-0 flex items-center flex-col md:flex-row laptop:flex-col gap-4 laptop:gap-[1.9375rem]">
          <Balance />
          <FavTransfer />
        </div>
        <div className=" w-full">
          <ChartDates />
        </div>
      </section>
      <Transactions />
    </main>
  );
}
