"use client";

import { Chart } from "react-google-charts";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

export default function ChartDates() {
  const randomValue = (value: number) => Math.floor(Math.random() * value);

  const data = [
    [" ", "Money In", "Money Out"],
    ["Jan", randomValue(50000), randomValue(70000)],
    [" ", randomValue(50000), randomValue(30000)],
    ["Mar", randomValue(50000), randomValue(30000)],
    [" ", randomValue(50000), randomValue(30000)],
    ["May", randomValue(50000), randomValue(30000)],
    [" ", randomValue(50000), randomValue(30000)],
    ["Jul", randomValue(50000), randomValue(30000)],
    [" ", randomValue(50000), randomValue(40000)],
    ["Sep", randomValue(50000), randomValue(40000)],
    [" ", randomValue(50000), randomValue(40000)],
    ["Nov", randomValue(50000), randomValue(40000)],
    ["Dec", randomValue(50000), randomValue(40000)],
  ];

  const options = {
    backgroundColor: "white",
    colors: ["#0062FF", "#99C0FF"],
    isStacked: true,
    legend: { position: "top", maxLines: 3, alignment: "end" },
    bar: { groupWidth: "50%" },
    vAxis: { format: "short", gridlines: { count: 0 } },
  };
  return (
    <section className="grid grid-cols-1 col-span-2 gap-5 bg-white dark:bg-dark-primaryBlue">
      <div className=" flex justify-between pt-5 px-5 items-center ">
        <h4 className="text-light-gray-900 dark:text-dark-white text-xl font-bold font-manrope leading-[28.98px]">
          Insights
        </h4>
        <EllipsisVerticalIcon className=" h-5 text-black dark:text-white" />
      </div>
      <Chart chartType="ColumnChart" height={"400px"} data={data} options={options} />
    </section>
  );
}
