"use client";
import { useCallback, useEffect, useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

export default function Balance() {
  const [value, setValue] = useState(0);
  const localValue = value.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const updateValue = useCallback(() => {
    if (value < 1500) {
      setTimeout(() => {
        setValue((prevValue) => prevValue + 1);
      }, 1);
    }
  }, [value]);

  useEffect(() => {
    updateValue();
  }, [updateValue]);

  return (
    <section className=" relative w-full min-w-[17rem] max-h-[193px] bg-white dark:bg-dark-primaryBlue after:content-imageBalance after:inline-block after:absolute after:right-0 after:-bottom-1  rounded-md p-[1.4375rem] flex flex-col gap-3 md:gap-6">
      <div className=" items-center gap-x-6 justify-between inline-flex">
        <h4 className="text-light-gray-900  dark:text-dark-white text-xl font-bold font-manrope leading-[28.98px]">
          Balance
        </h4>
        <EllipsisVerticalIcon className=" cursor-pointer h-5 text-black dark:text-white" />
      </div>
      <p className="text-light-gray-800 dark:text-dark-white text-base md:text-[34px] font-bold font-manrope leading-[2.6563rem]">
        {localValue} USD
      </p>
      <p className="text-light-gray-800  dark:text-dark-white text-sm md:text-base font-semibold font-manrope leading-[1.4487rem]">
        Available
      </p>
    </section>
  );
}
