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
    <section className=" relative w-[300px] smPhone:w-[490px] md:w-[700px] laptop:w-[412.47px] h-[193.19px] bg-white dark:bg-dark-primaryBlue after:content-imageBalance after:inline-block after:absolute after:right-0 after:-bottom-1  rounded-md p-[23px] flex flex-col gap-6">
      <div className=" items-center gap-x-6 justify-between inline-flex">
        <h4 className="text-light-gray-900  dark:text-dark-white text-xl font-bold font-manrope leading-[28.98px]">
          Balance
        </h4>
        <EllipsisVerticalIcon className=" h-5 text-black dark:text-white" />
      </div>
      <p className="text-light-gray-800  dark:text-dark-white text-[34.78px] font-bold font-manrope leading-[42.50px]">
        {localValue} USD
      </p>
      <p className="text-light-gray-800  dark:text-dark-white text-base font-semibold font-manrope leading-[23.18px]">
        Available
      </p>
    </section>
  );
}
