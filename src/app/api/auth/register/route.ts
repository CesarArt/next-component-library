import { NextResponse } from "next/server";
import { BACKEND_URL } from '@/lib/config';

export async function POST(req: Request) {
  try {
    const body = await req.json();

  // Request to the real backend
  const backendRes = await fetch(`${BACKEND_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Error Register" },
        { status: backendRes.status }
      );
    }

    const response = NextResponse.json({ success: true });
    return response;
  } catch (error) {
    console.error("Internal error", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
