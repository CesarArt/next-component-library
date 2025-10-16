import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    // Request to the real backend
    const backendRes = await fetch("http://localhost:4000/api/components/stats", {
      method: "GET",
      headers: { "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
       },
    });

    const data = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Error tracking component" },
        { status: backendRes.status }
      );
    }

    const response = NextResponse.json( data );
    return response ;
  } catch (error) {
    console.error("Error get stats event", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
