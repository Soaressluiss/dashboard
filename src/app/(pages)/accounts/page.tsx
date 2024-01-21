import { ChevronDownIcon, ArrowsUpDownIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid";

export default function Accounts() {
  return (
    <main className=" h-screen m-3 md:m-6">
      <section className=" flex flex-col  items-center gap-y-3 md:gap-y-6">
        <div className="flex items-center justify-between px-3 gap-x-2 min-w-64 w-full h-14 md:h-20 bg-light-gray-250 dark:bg-light-secondaryBlue border border-light-gray-800/40 dark:border-dark-white/40 rounded-lg p-2">
          <h4 className=" text-sm md:text-lg  font-manrope font-semibold tracking-wide text-light-gray-800 dark:text-dark-white">
            Sald $200.00 USD
          </h4>
          <button className="flex items-center gap-x-2 border bg-light-emerald400 text-light-success700 p-1 rounded-lg outline-none hover:bg-light-">
            <span className="hidden smPhone:block uppercase text-sm text-light-success700 font-manrope font-semibold tracking-wide ">
              Add value
            </span>
            <ArrowRightEndOnRectangleIcon className="w-6 h-6 text-lg text-light-success700 font-bold" />
          </button>
        </div>

        <div className=" flex flex-col gap-4 md:gap-6  pb-8 min-w-64 w-full max-h-max p-3 bg-light-gray-250 dark:bg-light-secondaryBlue border border-light-gray-800/40 dark:border-dark-white/40 rounded-lg">
          <div className=" flex  items-center justify-between ">
            <h5 className="text-light-gray-900  dark:text-dark-white text-sm md:text-xl font-bold font-manrope tracking-wide leading-[28.98px]">
              My Financy Summary
            </h5>
            <button className=" flex items-center gap-x-1">
              <span className=" hidden smPhone:block text-light-gray-900  dark:text-dark-white text-sm md:text-lg font-light font-manrope tracking-wider leading-[28.98px]">
                month
              </span>
              <ChevronDownIcon className=" w-4 h-4 text-black dark:text-white" />
            </button>
          </div>

          <div className="w-full h-36 flex items-center justify-between p-4 shadow bg-light-emerald400 rounded-md ">
            <div className="flex flex-col items-start gap-y-2">
              <p className=" text-base md:text-lg  font-manrope font-semibold tracking-wider text-light-gray-800">
                Money In
              </p>
              <span className="text-base md:text-lg font-manrope font-semibold tracking-wide text-light-gray-800">
                +$ 200,00
              </span>
              <span className="text-xl md:text-2xl font-manrope font-bold tracking-wide text-light-gray-800">
                *** *** *** - **
              </span>
            </div>
            <ArrowsUpDownIcon className=" w-13 h-10 text-light-success700 font-bold" />
          </div>
          <div className="w-full h-36 flex items-center justify-between p-4 shadow bg-light-pink200 rounded-md">
            <div className="flex flex-col items-start gap-y-2">
              <p className=" text-base md:text-lg  font-manrope font-semibold tracking-wider text-light-gray-800">
                Money Out
              </p>
              <span className="text-base md:text-lg font-manrope font-semibold tracking-wide text-light-gray-800">
                -$ 100,00
              </span>
              <span className="text-xl md:text-2xl font-manrope font-bold tracking-wide text-light-gray-800">
                *** *** *** - **
              </span>
            </div>
            <ArrowsUpDownIcon className=" w-13 h-10  text-[#F04437] font-bold" />
          </div>
        </div>
      </section>
    </main>
  );
}
