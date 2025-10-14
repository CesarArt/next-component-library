import { HeadBar } from "@/components";
import { Input } from "@/components/ui/input";

export default function ShowcaseInputsPage() {
    return (
        <div className="w-full h-full md:h-screen bg-background">
            <HeadBar title="Inputs"/>

            <div className="flex flex-col">
                <div className="">
                    <h3 className="text-5xl text-slate-500">Variant button</h3>
                    <span className="text-xl text-slate-400">The Button comes with three variants:
                        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                            primary, secondary, and danger
                        </code>
                        .
                    </span>
                    <div className="flex flex-col md:flex-row gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Input type="text" placeHolder={"Name"} label={"algo"}></Input>
                        <Input type="email" placeHolder={"E-mail"} label={"algo"}></Input>
                        <Input type="password" placeHolder={"password"} label={"algo"}></Input>
                    </div>
                </div>
                <div>
                    <h3 className="text-5xl text-slate-500">State</h3>
                    <span className="text-xl text-slate-400">The Button comes with three variants:
                        <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                            Default, error, and success
                        </code>
                        .
                    </span>
                    <div className="flex flex-col md:flex-row  gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Input type="text" placeHolder={"Name"} label={"Default"}></Input>
                        <Input type="text" state="error" placeHolder={"Error"} label={"algo"}></Input>
                        <Input type="text"  state="success" placeHolder={"Success"} label={"algo"}></Input>
                    </div>
                </div>
                <div>
                    <h3 className="text-5xl text-slate-500">Disabled</h3>
                    <div className="flex flex-col md:flex-row  gap-2 w-full rounded-xl justify-center p-4 ring-1 ring-indigo-100">
                        <Input type="text" placeHolder={"Name"} label={"Default"} disabled></Input>
                    </div>
                </div>
            </div>
        </div>
    );
}
