import * as React from "react"
import Image from 'next/image';

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface CardMediaProps {
    src: string | StaticImport;
    alt?: string;
    className?: string
}

const CardMedia = ({ src, alt, className }: CardMediaProps) => {
    return (
        <Image
            src={src}
            alt={alt ?? ""}
            priority
            className={cn("aspect-[3/2] object-cover rounded-t-lg p-2", className)}
        />
    );
}
const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("mb-1 text-xl font-bold tracking-tight text-title px-4", className)} {...props}>
            {children}
        </div>
    );
}

const CardBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("font-normal text-desc text-sm px-4 py-2 pb-4", className)}
            {...props}
        />
    )
}

const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("inline-flex items-center py-2 text-sm font-medium text-center text-muted px-4", className)}
            {...props}
        />
    )
}

const cardVariants = cva(
    "bg-card max-w-xl border border-gray-200 rounded-2xl border-border shadow-md hover:shadow-xl/20 transition-all duration-300 group",
    {
        variants: {
            variant: {
                default: "border",
                solid:
                    "border-3 border-solid",
                dotted:
                    "border-2 border-dotted",
                dashed:
                    "border-2 border-dashed",
                double:
                    "border-4 border-double",
            },
            scale:{
                default: "scale-none",
                scale: "scale-100 hover:scale-102"
            }
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string
}
const Card = ({ className, variant, scale, children, ...props }: CardProps) => {
    return (
        <div
            className={cn(cardVariants({ variant, scale, className }))}
            {...props}
        >
            {children}
        </div>
    );
}

export { Card, CardHeader, CardFooter, CardBody, CardMedia }

