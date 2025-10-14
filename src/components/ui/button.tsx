import { cva, VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"
import * as lucideIcons from 'lucide-react';

const IconRenderer: React.FC<{ iconName: keyof typeof lucideIcons, size: number }> = ({ iconName, size }) => {
    const IconComponent = lucideIcons[iconName]; // Gets the icon component using the name (string)

    if (typeof IconComponent === "function" || typeof IconComponent === "object") // Check if Icon Component is a valid component
        return React.createElement(IconComponent as React.ElementType, { size });
    else
        return null;
};

const buttonVariants = cva(
    "flex gap-2 rounded-xl p-1.5 px-4 items-center hover:opacity-60 btn-hover shadow-md shadow-slate-500/50 dark:shadow-none text-sm",
    {
        variants: {
            variant: {
                primary: "bg-primary text-text-primary",
                danger:
                    "bg-rose-500 text-white",
                secondary:
                    "bg-secondary text-text-secondary ring-1 ring-primary",
            },
            state: {
                default: "cursor-pointer",
                loading: "cursor-progress bg-slate-500",
                disabled: "cursor-not-allowed bg-slate-50 ring-1 ring-slate-200 text-slate-500"
            }
        },
        defaultVariants: {
            variant: "primary",
            state: "default",
        },
    }
)


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    iconName?: keyof typeof lucideIcons;
    iconSize?: number
    iconRight?: true
}

export const Button = ({ className, children, iconName, iconSize, iconRight, variant, state, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(buttonVariants({ variant, state, className }))}
            {...props}
        >
            {(iconName && !iconRight) && <IconRenderer iconName={iconName} size={iconSize ?? 24} />}
            {children}
            {(iconName && iconRight) && <IconRenderer iconName={iconName} size={iconSize ?? 24} />}
        </button>
    )
}
