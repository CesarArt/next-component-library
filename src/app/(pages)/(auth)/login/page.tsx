"use client";

import { Card, CardBody, CardHeader, LoginForm } from "@/components";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="flex flex-col gap-4 min-h-[calc(100vh-13rem)] items-center justify-center p-4">
            <Card className="w-full max-w-sm py-8">
                <CardHeader>
                    <div className="text-2xl font-semibold leading-none tracking-tight">Sign in</div>
                    <div className="text-sm text-muted"> Enter your information to access your account</div>
                </CardHeader>
                <CardBody>
                    <LoginForm />
                    <div className="mt-4 text-center text-sm">
                        {`Don't have an account? `}
                        <Link href="/register" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
