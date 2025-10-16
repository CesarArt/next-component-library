import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const colorsGradient = [
    "from-gray-500 to-gray-500",
    "from-red-500 to-red-500",
    "from-orange-500 to-orange-500",
    "from-amber-500 to-amber-500",
    "from-yellow-500 to-yellow-500",
    "from-lime-500 to-lime-500",
    "from-green-500 to-green-500",
    "from-emerald-500 to-emerald-500",
    "from-teal-500 to-teal-500",
    "from-cyan-500 to-cyan-500",
    "from-sky-500 to-sky-500",
    "from-blue-500 to-blue-500",
    "from-indigo-500 to-indigo-500",
    "from-violet-500 to-violet-500",
    "from-purple-500 to-purple-500",
    "from-fuchsia-500 to-fuchsia-500",
    "from-pink-500 to-pink-500",
    "from-rose-500 to-rose-500",
    "from-red-400 to-red-400",
    "from-orange-400 to-orange-400",
    "from-amber-400 to-amber-400",
    "from-yellow-400 to-yellow-400",
    "from-lime-400 to-lime-400",
    "from-green-400 to-green-400",
    "from-emerald-400 to-emerald-400",
    "from-teal-400 to-teal-400",
    "from-cyan-400 to-cyan-400",
    "from-sky-400 to-sky-400",
    "from-blue-400 to-blue-400",
    "from-indigo-400 to-indigo-400",
    "from-violet-400 to-violet-400",
    "from-purple-400 to-purple-400",
    "from-fuchsia-400 to-fuchsia-400",
    "from-pink-400 to-pink-400",
    "from-rose-400 to-rose-400",
];
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colorByPercentageTop = [
    { min:0, max:0, color: colorsGradient.find(cl => cl.includes("gray")) ?? ""},
    { min:1, max:12.99,  color: colorsGradient.find(cl => cl.includes("yellow")) ?? ""} ,
    { min:13, max:23.99, color: colorsGradient.find(cl => cl.includes("lime")) ?? ""} ,
    { min:24, max:34.99, color: colorsGradient.find(cl => cl.includes("green")) ?? ""} ,
    { min:35, max:45.99, color: colorsGradient.find(cl => cl.includes("emerald")) ?? ""} ,
    { min:46, max:56.99, color: colorsGradient.find(cl => cl.includes("teal")) ?? ""} ,
    { min:57, max:67.99, color: colorsGradient.find(cl => cl.includes("cyan")) ?? ""} ,
    { min:68, max:78.99, color: colorsGradient.find(cl => cl.includes("sky")) ?? ""} ,
    { min:79, max:89.99, color: colorsGradient.find(cl => cl.includes("sky")) ?? ""} ,
    { min:90, max:100, color: colorsGradient.find(cl => cl.includes("blue")) ?? ""},
];