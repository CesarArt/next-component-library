"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, Input } from "@/components";
import { toast } from "sonner";
import { loginUserReq } from "@/utils/types/user";
import { logIn } from "@/app/api/auth/user";
import { useState } from "react";

const formSchema = z.object({
    email: z.string().email({ message: "Dirección de email inválida." }),
    password: z
        .string(),
});

export function LoginForm() {
    const [errorCredential, setErroCredential] = useState(false)
    const Form = FormProvider
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit  (values: z.infer<typeof formSchema>) {
        const registerData: loginUserReq ={
            email: values.email,
            password: values.password
        }
        const data = await logIn(registerData)
        console.log("data: ",data)
        if(data?.status === 200){
            setErroCredential(false)
            window.location.href = "/";
        }else{
            setErroCredential(true)
            toast.error(data?.message);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <div className="flex flex-col items-start gap-2">
                    <Controller
                        name="email"
                        control={form.control}
                        rules={{ required: true, maxLength: 18 }}
                        render={({ field: { onChange } }) =>
                            <Input type="email" state={form.formState.submitCount === 0 ? "default" : form.formState.errors.email || errorCredential ? "error" : "success"} placeHolder={"m@example.com"} label={"E-mail"} onChange={onChange} />
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
                            <Input type="password" state={form.formState.submitCount === 0 ? "default" : form.formState.errors.password || errorCredential ? "error" : "success"} placeHolder={"****"} label={"Password"} maxLength={16} onChange={onChange} />
                        }
                    />
                    {form.formState.errors.password &&
                        <p className="text-red-500 px-2">{form.formState.errors.password.message}</p>
                    }
                </div>
                <Button type="submit" className="w-full justify-center">
                    Log In
                </Button>
            </form>
        </Form>
    );
}
