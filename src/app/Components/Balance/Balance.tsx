"use client";
import { useCallback, useEffect, useState } from "react";
import { Info } from "../../../../public/assets/Icons/Info";

export default function Balance() {
  const [value, setValue] = useState(0);
  const localValue = value.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const updateValue = useCallback(() => {
    if (value < 10500) {
      setTimeout(() => {
        setValue((prevValue) => prevValue + 1);
      }, 1);
    }
  }, [value]);

  useEffect(() => {
    updateValue();
  }, [updateValue]);

  return (
    <section className=" w-[370px] md:w-[412.47px] h-[193.19px] bg-white rounded-md p-[23px] flex flex-col gap-6">
      <div className="justify-start items-center gap-[268.54px] inline-flex">
        <h4 className="text-light-gray-900 text-xl font-bold font-manrope leading-[28.98px]">Balance</h4>
        <Info />
      </div>
      <p className="text-light-gray-800 text-[34.78px] font-bold font-manrope leading-[42.50px]">{localValue} USD</p>
      <p className="text-light-gray-800 text-base font-semibold font-manrope leading-[23.18px]">Available</p>
    </section>
  );
}
