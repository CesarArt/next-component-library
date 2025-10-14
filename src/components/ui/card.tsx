import * as React from "react"
import Image from 'next/image';

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardMediaProps {
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
            className={cn("aspect-[3/2] object-cover rounded-t-lg", className)}
        />
    );
}
const CardHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white px-4", className)} {...props}>
            {children}
        </div>
    );
}



const CardBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("font-normal text-gray-700 dark:text-gray-400 text-sm px-4", className)}
            {...props}
        />
    )
}


const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("inline-flex items-center py-2 text-sm font-medium text-center text-black px-4", className)}
            {...props}
        />
    )
}

const cardVariants = cva(
    "bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow-xl/20",
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
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    className?: string
}
const Card = ({ className, variant, children, ...props }: CardProps) => {
    return (
        <div
            className={cn(cardVariants({ variant, className }))}
            {...props}
        >
            {children}
        </div>
    );
}

export { Card, CardHeader, CardFooter, CardBody, CardMedia }

