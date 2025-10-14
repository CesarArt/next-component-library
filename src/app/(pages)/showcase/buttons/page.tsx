import { Button, HeadBar } from "@/components";

export default function ShowcaseButtonsPage() {
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
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
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
                        <Button state={"default"}>Default</Button>
                        <Button state={"loading"} >Loading...</Button>
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
                        <Button variant="primary" state={"default"} iconName="BellOff" iconSize={16} iconRight>Left Icon</Button>
                    </div>
                    <div className="flex gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Button variant="primary" state={"default"} iconName="BellOff" iconSize={16}>Right Icon</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
