'use client'
import { Card, CardBody, CardFooter, CardHeader, CardMedia, HeadBar } from "@/components";
import image from "@/assets/images/star-trails.jpg"
import { ShowCaseInputCard } from "@/components/showcase-input-card";
import { ComponentEnum, trackEventReq } from "@/utils/types/trackEvent";

export default function ShowcaseCardsPage() {

    const cardBorderVariants = [
        { name: "default", variant: "default" as "default" | "solid" | "dashed" | "dotted" | "double", title: "Default", description: "This is the basic card design" },
        { name: "solid", variant: "solid" as "default" | "solid" | "dashed" | "dotted" | "double", title: "Solid", description: "Card with border solid" },
        { name: "dashed", variant: "dashed" as "default" | "solid" | "dashed" | "dotted" | "double", title: "Dashed", description: "Card with border dashed" },
        { name: "dotted", variant: "dotted" as "default" | "solid" | "dashed" | "dotted" | "double", title: "Dotted", description: "Card with border dotted" },
        { name: "double", variant: "double" as "default" | "solid" | "dashed" | "dotted" | "double", title: "Double", description: "Card with border double" }
    ]

    const registerTrack = async (variant: string, action: string) => {
        const trackData: trackEventReq = {
            component: ComponentEnum.Card,
            variant: variant,
            action: action
        }
        console.log("track:", trackData)
        // await trackEvent(trackData)
    }
    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Cards" />
            <div className="flex flex-col items-center">
                <section className="flex flex-col p-4 gap-2">
                    <h2 className="title-text text-4xl!">Variants</h2>
                    <h3 className="subtitle-text">The different variants of buttons</h3>
                    {cardBorderVariants.map((v) => (
                        <ShowCaseInputCard key={v.name} variant={v.variant} title={v.title} description={v.description}
                            registerTrack={(action) => registerTrack(v.name, action)}
                        >
                        </ShowCaseInputCard>
                    ))
                    }
                </section>
                <section className="flex flex-col p-4 gap-2">
                    <h2 className="title-text text-4xl!">Media</h2>
                    <ShowCaseInputCard title={"Card with image"} description={"This is an example of a card with an image"}
                        registerTrack={(action) => registerTrack("cardMedia", action)}
                    >
                        <Card>
                            <CardMedia src={image} alt="Iamge" className="mask-b-from-20% mask-b-to-100%" />
                            <CardHeader>Card Header</CardHeader>
                            <CardBody>This is a brief description of the card </CardBody>
                        </Card>
                    </ShowCaseInputCard>
                </section>
                <section className="flex flex-col p-4 gap-2">
                    <h2 className="title-text text-4xl!">Card options</h2>
                    <ShowCaseInputCard title={"Card Header"} description={"This is an example of a card with only Card Header"}
                        registerTrack={(action) => registerTrack("cardHeader", action)}
                    >
                        <Card>
                            <CardHeader>This a card header</CardHeader>
                        </Card>
                    </ShowCaseInputCard>
                    <ShowCaseInputCard title={"Card Body"} description={"This is an example of a card with only Card Body"}
                        registerTrack={(action) => registerTrack("cardBody", action)}
                    >
                        <Card>
                            <CardBody>This is a  body text</CardBody>
                        </Card>
                    </ShowCaseInputCard>
                    <ShowCaseInputCard title={"Card Footer"} description={"This is an example of a card with only Card Footer"}
                        registerTrack={(action) => registerTrack("cardFooter", action)}
                    >
                        <Card>
                            <CardFooter>This is a Footer text</CardFooter>
                        </Card>
                    </ShowCaseInputCard>
                </section>
            </div>
        </div>
    );
}
