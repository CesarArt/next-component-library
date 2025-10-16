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
        <div className="flex gap-2 w-full p-2 items-center">
            <Button variant="secondary" iconName="ArrowLeft" iconSize={25} className="p-2.5! rounded-full! ring-0 w-fit!" onClick={back}></Button>
            <h4 className="title-text text-center w-full pe-8">{title}</h4>
        </div>
    )
}
