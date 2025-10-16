/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as d3 from "d3";
import { GroupedComponent } from "@/utils/types/stats";


const colors = [
  "bg-violet-500 dark:bg-violet-500",
  "bg-pink-400 dark:bg-pink-400",
  "bg-orange-400 dark:bg-orange-400",
];
interface TreemapChartProps {
  dataChart: GroupedComponent[]
}

export function TreemapChart({ dataChart }: TreemapChartProps) {
  // Transform the raw data into a hierarchical structur
  const data = {
    name: "root",
    children: dataChart.map((tp) => ({
      name: tp.component,
      children: Object.entries(tp.variants[0]).map(([name, value]) => ({
        name,
        value,
      })),
    })),
  };

  // Create root node
  const root = d3
    .hierarchy(data)
    .sum((d: any) => d.value)
    .sort((a: any, b: any) => (b.value ?? 0) - (a.value ?? 0));

  // Compute the treemap layout
  d3
    .treemap()
    .size([100, 100])
    .paddingInner(0.75) // Padding between
    .paddingOuter(1) // Padding between
    .round(false)(root as d3.HierarchyNode<unknown>);

  // Color scale
  const color = d3
    .scaleOrdinal()
    .domain(dataChart.map((d) => d.component))
    .range(colors);

  return (
    <div className="relative w-full h-[250px]">
      {root.leaves().map((leaf: any, i) => {
        console.log("leaf: ",leaf)
        const leafWidth = leaf.x1 - leaf.x0;
        const leafHeight = leaf.y1 - leaf.y0;
        const VISIBLE_TEXT_WIDTH = 15;
        const VISIBLE_TEXT_HEIGHT = 15;
        return (
          <div
            key={i}
            className={color(leaf.parent.data.name) as string}
            style={{
              position: "absolute",
              left: `${leaf.x0}%`,
              top: `${leaf.y0}%`,
              width: `${leafWidth}%`,
              height: `${leafHeight}%`,
              borderRadius: "6px",
              border: "1px solid #ffffff44",
              color: "white",
              padding: "6px",
              boxSizing: "border-box",
            }}
            title={`${leaf.data.name} ${leaf.parent.data.name} `}
          >
            {leafWidth > VISIBLE_TEXT_WIDTH && leafHeight > VISIBLE_TEXT_HEIGHT && (
              <div className="text-base leading-5 truncate capitalize">{`${leaf.data.name} ${leaf.parent.data.name}`}</div>
            )}
            {leafWidth > VISIBLE_TEXT_WIDTH && leafHeight > VISIBLE_TEXT_HEIGHT && (
              <div className="text-gray-100 text-sm leading-5">{leaf.value}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
