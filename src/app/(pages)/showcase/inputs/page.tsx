'use client'
import { trackEvent } from "@/app/api/tracking/trackEvent";
import { HeadBar } from "@/components";
import { ShowCaseInputCard } from "@/components/showcase-input-card";
import { Input } from "@/components/ui/input";
import { ComponentEnum, trackEventReq } from "@/utils/types/trackEvent";

export default function ShowcaseInputsPage() {
    const inputsTypeOptions: { name: string, type: "text" | "email" | "password", label: string, placeHolder: string, title: string, description: string }[] = [
        { name: "text", type: "text", placeHolder: "Enter your username", label: "Name", title: "Text", description: "This input of type text" },
        { name: "email", type: "email", placeHolder: "m@example.com", label: "Email", title: "Email", description: "This input of type email" },
        { name: "password", type: "password", placeHolder: "Enter your password", label: "Password", title: "Password", description: "This input of type password" }
    ]
    const inputsStatesOptions: { name: string, type: "text" | "email" | "password", state: "default" | "success" | "error", label: string, placeHolder: string, title: string, description: string }[] = [
        { name: "default", type: "text", state: "default", placeHolder: "m@example.com", label: "Email", title: "Default", description: "This is the default state of the input" },
        { name: "success", type: "email", state: "success", placeHolder: "m@example.com", label: "Email", title: "Success", description: "This is the state when the input is in success state" },
        { name: "error", type: "password", state: "error", placeHolder: "m@example.com", label: "Email", title: "Error", description: "This is the state when the input is in error state" }
    ]

    const registerTrack = async (variant: string, action: string) => {
        const trackData: trackEventReq = {
            component: ComponentEnum.Input,
            variant: variant,
            action: action
        }
        await trackEvent(trackData)
    }
    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Inputs" />
            <div className="flex flex-col items-center gap-4 px-4 pb-4">
                <section className="flex flex-col">
                    <h2 className="title-text text-4xl!">Types</h2>
                    <h3 className="subtitle-text">The different types of inputs</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {inputsTypeOptions.map((v) => (
                            <ShowCaseInputCard key={v.name} title={v.title} description={v.description}
                                registerTrack={(action) => registerTrack(v.name, action)}
                            >
                                <Input type={v.type} placeHolder={v.placeHolder} label={v.label} onBlur={() => registerTrack(v.name, "focus")}></Input>
                            </ShowCaseInputCard>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col">
                    <h2 className="title-text text-4xl!">States</h2>
                    <h3 className="subtitle-text">The different input states</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {inputsStatesOptions.map((v) => (
                            <ShowCaseInputCard key={v.name} title={v.title} description={v.description}
                                registerTrack={(action) => registerTrack(v.name, action)}
                            >
                                <Input type={v.type} state={v.state} placeHolder={v.placeHolder} label={v.label} onBlur={() => registerTrack(v.name, "focus")}></Input>
                            </ShowCaseInputCard>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col">
                    <h2 className="title-text text-4xl!">Disabled</h2>
                    <ShowCaseInputCard key={"disabled"} title={"Disabled"} description={"This is a disabled input"}
                        registerTrack={(action) => registerTrack("disabled", action)}
                    >
                        <Input type="text" placeHolder={"Enter your name"} label={"Name"} disabled></Input>
                    </ShowCaseInputCard>
                </section>
            </div>
        </div>
    );
}
