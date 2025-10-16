import { dataChart } from "@/utils/types/charts";
import React from "react";


interface BarChartBenchmarkProps {
  dataChart: dataChart[]
}

export function BarChartBenchmark(props: BarChartBenchmarkProps) {
  const { dataChart: data } = props

  return (
    <div className="w-full h-full grid gap-4 py-4">
      {/* Bars */}
      {data.map((d, index) => {
        return (
          <div key={index}>
            <div
              className={`text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400`}
            >
              {d.key}
            </div>
            <div className="flex items-center gap-2.5">
              <div
                key={index}
                className="relative rounded-sm h-3 bg-gray-200 dark:bg-gray-200 overflow-hidden w-full"
              >
                <div
                  className={`absolute inset-0 rounded-r-sm bg-gradient-to-r ${d.color ??  "from-zinc-400 to-gray-400 dark:from-zinc-500 dark:to-zinc-400"}`}
                  style={{
                    width: `${(d.value / Math.max(...data.map((d) => d.value))) * 100}%`,
                  }}
                />
              </div>
              <div
                className={`text-sm whitespace-nowrap text-gray-500 dark:text-zinc-400 tabular-nums`}
              >
                {d.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
