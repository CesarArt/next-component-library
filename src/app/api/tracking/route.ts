import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const body = await req.json();

    // Request to the real backend
    const backendRes = await fetch("http://localhost:4000/api/components/track", {
      method: "POST",
      headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
       },
      body: JSON.stringify(body),
      
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Error tracking component" },
        { status: backendRes.status }
      );
    }

    const response = NextResponse.json({ success: true });
    return response;
  } catch (error) {
    console.error("Error tracking event", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
