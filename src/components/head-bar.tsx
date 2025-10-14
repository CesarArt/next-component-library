"use client";
import { useRouter } from "next/navigation";
import { Button } from "."

interface HeadBarProps {
    title: string
}
export const HeadBar = ({ title }: HeadBarProps) => {
    const router = useRouter();

    const back =() =>{
       router.back()
    }
    return (
        <div className="flex gap-2 w-full bg-slate-100 p-2">
            <Button variant="secondary" iconName="ArrowLeft" className="p-1! bg-transparent! rounded-full ring-0" onClick={back}></Button>
            <h4 className="text-3xl text-slate-700 text-center w-full pe-8">{title}</h4>
        </div>
    )
}
