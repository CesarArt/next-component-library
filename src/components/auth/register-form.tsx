"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, Input } from "@/components";
import { toast } from "sonner";
import { registerUserReq } from "@/utils/types/user";
import { registerUser } from "@/app/api/auth/user";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z
        .string()
        .min(4, { message: "The name must be at least 4 characters long." })
        .max(8, { message: "The name must be no more than 8 characters." }),
    email: z.string().email({ message: "Invalid e-mail address." }),
    password: z
        .string()
        .min(8, { message: "The password must be at least 8 characters long." }),
});

export function RegisterForm() {
    const router = useRouter();
    const Form = FormProvider
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit  (values: z.infer<typeof formSchema>) {
        const registerData: registerUserReq ={
            username: values.name,
            email: values.email,
            password: values.password
        }
        const data = await registerUser(registerData)
        if(data){
            toast.success("Cuenta creada correctamente");
            router.push("/login")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <div className="flex flex-col items-start gap-2">
                    <Controller
                        name="name"
                        control={form.control}
                        rules={{ required: true, maxLength: 18 }}
                        render={({ field: { onChange } }) =>
                            <Input type="text" state={form.formState.submitCount === 0 ? "default" : form.formState.errors.name ? "error" : "success"} placeHolder={"Cesar"} label={"Nombre"} onChange={onChange} maxLength={8}/>
                        }
                    />
                    {form.formState.errors.name &&
                        <p className="text-red-500 px-2">{form.formState.errors.name.message}</p>
                    }
                </div>

                <div className="flex flex-col items-start gap-2">
                    <Controller
                        name="email"
                        control={form.control}
                        rules={{ required: true, maxLength: 18 }}
                        render={({ field: { onChange } }) =>
                            <Input type="email" state={form.formState.submitCount === 0 ? "default" : form.formState.errors.email ? "error" : "success"} placeHolder={"m@example.com"} label={"E-mail"} onChange={onChange}/>
                        }
                    />
                    {form.formState.errors.email &&
                        <p className="text-red-500 px-2">{form.formState.errors.email.message}</p>
                    }
                </div>

                <div className="flex flex-col items-start gap-2">
                    <Controller
                        name="password"
                        control={form.control}
                        rules={{ required: true, maxLength: 18 }}
                        render={({ field: { onChange } }) =>
                            <Input type="password"  state={form.formState.submitCount === 0 ? "default" : form.formState.errors.password ? "error" : "success"} placeHolder={"****"} label={"Password"} maxLength={16} onChange={onChange}/>
                        }
                    />
                    {form.formState.errors.password &&
                        <p className="text-red-500 px-2">{form.formState.errors.password.message}</p>
                    }
                </div>
                <Button type="submit" className="w-full justify-center">
                    Crear cuenta
                </Button>
            </form>
        </Form>
    );
}
