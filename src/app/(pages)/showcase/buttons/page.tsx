'use client'

import { trackEvent } from "@/app/api/tracking/trackEvent";
import { Button, HeadBar } from "@/components";
import { ComponentEnum, trackEventReq } from "@/utils/types/trackEvent";

export default function ShowcaseButtonsPage() {

    const registerTrack = async (variant: string, action: string) =>{
        const trackData: trackEventReq ={
            component: ComponentEnum.Button,
            variant: variant,
            action: action
        }
        await trackEvent(trackData)
    }

    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Buttons"/>
            <div className="flex flex-col px-8">
                
                <div>
                    <h3 className="text-5xl text-slate-500">Variant button</h3>
                    <span className="text-xl text-slate-400">The Button comes with three variants:
                        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                            primary, secondary, and danger
                        </code>
                        .
                    </span>
                    <div className="flex gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Button variant="primary" onClick={() => registerTrack("primary","click")} >Primary</Button>
                        <Button variant="secondary" onClick={() => registerTrack("secondary","click")}>Secondary</Button>
                        <Button variant="danger" onClick={() => registerTrack("danger","click")}>Danger</Button>
                    </div>
                </div>
                <div>
                    <h3 className="text-5xl text-slate-400">State </h3>
                    <span className="text-xl text-slate-400">The button manages three states, which can be:
                        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                            default, loading, and disabled
                        </code>
                        .
                    </span>
                    <div className="flex gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Button state={"default"} onClick={() => registerTrack("default","click")}>Default</Button>
                        <Button state={"loading"}>Loading...</Button>
                        <Button state={"disabled"}>Disabled</Button>
                    </div>
                </div>
                <div>
                    <h3 className="text-5xl text-slate-400">Icon </h3>
                    <span className="text-xl text-slate-400">You can add icons from the next doc:
                        <code className="bg-black/[.05] dark:bg-white/[.06]  font-mono font-semibold px-1 py-0.5 rounded ">
                            iconName: Name  of the icon can yo use 
                            <a href="https://lucide.dev/icons" className="text-sky-700 underline" target="_blank">
                                https://lucide.dev/icons
                            </a>
                        </code>
                    </span>
                    <div className="flex gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Button variant="primary" state={"default"} iconName="BellOff" iconSize={16} onClick={() => registerTrack("iconLeft","click")}>Right Icon</Button>
                    </div>
                    <div className="flex gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Button variant="primary" state={"default"} iconName="BellOff" iconSize={16} iconRight onClick={() => registerTrack("iconRight","click")}>Left Icon</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
