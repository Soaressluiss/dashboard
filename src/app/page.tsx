import Balance from "./Components/Balance/Balance";
import ChartDates from "./Components/Chart/Chart";
import FavTransfer from "./Components/FavTransfer/FavTransfer";
import Transactions from "./Components/Transactions/Transactions";

export default function Dashboard() {
  return (
    <main className="m-4 laptop:m-[31px] flex flex-col items-center  ">
      <section className=" flex flex-col items-center md:gap-[31px] laptop:flex-row w-full mb-[13px]">

        <div className="mb-4 md:mb-0 w-auto flex items-center flex-col md:flex-row laptop:flex-col gap-4 laptop:gap-[31px]">
          <Balance />
          <FavTransfer />
        </div>

        <div className="w-full">
          <ChartDates />
        </div>
      </section>

      <Transactions />
    </main>
  );
}
