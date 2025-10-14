import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";


const inputVariants = cva(
    "bg-slate-100 rounded-lg disabled:ring-slate-200 disabled:cursor-not-allowed text-black shadow-xl block min-w-0 grow py-3 pr-3 pl-1 text-base placeholder:text-slate-500 focus:outline-none focus:inset-shadow-sm inset-shadow-slate-400  sm:text-sm/6",
    {
        variants: {
            state: {
                default: "ring-1 ring-indigo-200",
                error: "ring-2 ring-rose-400",
                success: "ring-2 ring-teal-400",
            }
        },
        defaultVariants: {
            state: "default",
        },
    }
)

export interface inputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    type: "text" | "email" | "password"
    placeHolder: string,
    label: string
}
export const Input = ({ type, placeHolder, state, ...props }: inputProps) => {
    return (
        <input
            type={type}
            placeholder={placeHolder}
            className={cn(inputVariants({ state }))}
            {...props}
        />
    )
}


