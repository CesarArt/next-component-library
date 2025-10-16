'use client'

import { trackEvent } from "@/app/api/tracking/trackEvent";
import { Button, HeadBar } from "@/components";
import { ShowCaseInputCard } from "@/components/showcase-input-card";
import { ComponentEnum, trackEventReq } from "@/utils/types/trackEvent";

export default function ShowcaseButtonsPage() {

    const buttonsVariantOptions: { name: string, variant: "primary" | "secondary" | "danger", title: string, description: string }[] = [
        { name: "primary", variant: "primary", title: "Primary", description: "This is the main button design" },
        { name: "secondary", variant: "secondary", title: "Secondary", description: "This is the secondary button design" },
        { name: "danger", variant: "danger", title: "Danger", description: "This is a danger button design" }
    ]
    const buttonsStateOptions: { name: string, state: "loading" | "disabled" | "default", title: string, description: string }[] = [
        { name: "default", state: "default", title: "Default", description: "This is the default button" },
        { name: "loading", state: "loading", title: "Loading", description: "This is a loading button design" },
        { name: "disabled", state: "disabled", title: "Disable", description: "This is a disabled button design" }
    ]
    const buttonsIconOptions = [
        { name: "leftIcon", title: "Left Icon", description: "This is the secondary button design", iconName: "BellOff" as keyof typeof import("lucide-react") },
        { name: "rightIcon", title: "Righ Icon", description: "This is a danger button design", iconName: "BellOff" as keyof typeof import("lucide-react"), righIcon: true }
    ]

    const registerTrack = async (variant: string, action: string) => {
        const trackData: trackEventReq = {
            component: ComponentEnum.Button,
            variant: variant,
            action: action
        }
        await trackEvent(trackData)
    }

    return (
        <div className="w-full h-full md:h-full bg-background">
            <HeadBar title="Buttons" />
            <div className="flex flex-col items-center gap-4 px-4 pb-4">
                <section className="flex flex-col max-w-md">
                    <h2 className="title-text text-4xl!">Variants</h2>
                    <h3 className="subtitle-text">The different variants of buttons</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {buttonsVariantOptions.map((v) => (
                            <ShowCaseInputCard key={v.name} title={v.title} description={v.description}
                                registerTrack={(action) => registerTrack(v.name, action)}
                            >
                                <Button variant={v.variant} onClick={() => registerTrack(v.name, "click")} >{v.title}</Button>
                            </ShowCaseInputCard>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col max-w-md">
                    <h2 className="title-text text-4xl!">States</h2>
                    <h3 className="subtitle-text">The different states of buttons</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {buttonsStateOptions.map((v) => (
                            <ShowCaseInputCard key={v.title} title={v.title} description={v.description}
                                registerTrack={(action) => registerTrack(v.name, action)}
                            >
                                <Button state={v.state} onClick={() => registerTrack(v.name, "click")} >{v.title}</Button>
                            </ShowCaseInputCard>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col max-w-md">
                    <h2 className="title-text text-4xl!">Button with icons</h2>
                    <h3 className="subtitle-text text-balance">These are the ways in which you can implement an icon to the button</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {buttonsIconOptions.map((v) => (
                            <ShowCaseInputCard key={v.title} title={v.title} description={v.description}
                                registerTrack={(action) => registerTrack(v.name, action)}
                            >
                                <Button iconName={v.iconName} iconRight={v.righIcon} onClick={() => registerTrack(v.name, "click")}>{v.title}</Button>
                            </ShowCaseInputCard>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
