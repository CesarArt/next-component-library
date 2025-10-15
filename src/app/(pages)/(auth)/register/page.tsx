"use client";

import { Card, CardBody, CardHeader, RegisterForm } from "@/components";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex flex-col gap-4 min-h-[calc(100vh-13rem)] items-center justify-center p-4">
      <Card className="w-full max-w-sm py-8">
        <CardHeader>
          <div className="text-2xl font-semibold leading-none tracking-tight">Create your account</div>
          <div className="text-sm text-muted">Enter your information to create an account</div>
        </CardHeader>
        <CardBody>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            {`Already have an account? `}
            <Link href="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
