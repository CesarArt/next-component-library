import { Card, CardBody, CardFooter, CardHeader } from "@/components";
import { Command, FileAxis3d, IdCard, TextCursorInput } from "lucide-react";
import Link from "next/link";


export default function ShowcasePage() {

    const componentesLinks = [
        { href: "/buttons", title: "Buttons", icon: <Command />, label: "Explore our custom buttons" },
        { href: "/inputs", title: "Inputs", icon: <TextCursorInput />, label: "Explore our custom inputs" },
        { href: "/cards", title: "Cards", icon: <IdCard />, label: "Explore how our cards work" },
        { href: "/modal", title: "Modals", icon: <FileAxis3d />, label: "Explore the use of personalized modals" },
    ];
    return (
        <div className="container mx-auto px-2 py-4 w-full h-full bg-background">
            <section className="relative flex flex-col gap-2 h-full w-full p-4">
                <div className="space-y-1 px-4">
                    <h1 className="text-4xl font-bold">
                        Components Show Case
                    </h1>
                    <h2 className="text-xl text-muted">
                        Explore our component library
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                    {componentesLinks.map((cmp) => (
                        <Card key={cmp.href} scale={"scale"}>
                            <CardHeader className="p-4">
                                <div className="w-fit p-2 bg-indigo-100 text-sky-500 rounded-xl">
                                    {cmp.icon}
                                </div>
                            </CardHeader>
                            <CardBody className="pb-3">
                                <p className="text-xl md:text-3xl title-text">{cmp.title}</p>
                                <p className="text-sm! md:text-xl! subtitle-text text-justify">{cmp.label}</p>
                            </CardBody>
                            <CardFooter>
                                <Link href={`/showcase${cmp.href}`} className="text-xs md:text-xl link-text">View documentation</Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}
