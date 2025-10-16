"use client";
import { Card, CardBody, CardHeader, CardMedia, CardProps } from "."
import { Star } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { JSX, ReactNode, useMemo, useState } from "react";

interface ShowCaseInputCardProps extends CardProps {
    title: string
    src?: string | StaticImport;
    description?: ReactNode
    children?: JSX.Element

    registerTrack: (action: string) => void
}
export const ShowCaseInputCard = ({ variant, title, src, description, registerTrack, children }: ShowCaseInputCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavorite = async () => {
        registerTrack("favorite")
        setIsFavorite(!isFavorite)
    }
    const favoriteClass = useMemo(() => {
        return isFavorite ? "fill-amber-200 text-amber-200" : ""
    }, [isFavorite])

    return (
        <Card variant={variant}>
            {src &&
                <CardMedia src={src} />
            }
            <CardHeader>
                <div className="flex w-full justify-between pt-4">
                    <p className="title-card">{title}</p>
                    <Star className={`cursor-pointer hover:opacity-70 ${favoriteClass}`} onClick={handleFavorite} />
                </div>
            </CardHeader>
            <CardBody>
                {description &&
                    <p className="desc-text">{description}</p>
                }
                <span>
                    {children}
                </span>
            </CardBody>
        </Card>
    )
}
