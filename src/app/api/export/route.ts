import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { BACKEND_URL } from '@/lib/config';

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const { searchParams } = new URL(req.url);
    const format = searchParams.get("format") || "csv";

    // Request to the real backend
    const backendRes = await fetch(`${BACKEND_URL}/api/components/export?format=${format ?? "csv"}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    });

    if (!backendRes.ok) {
      return NextResponse.json({ success: false, message: "Error tho get data" }, { status: 500 });
    }

    const blob = await backendRes.blob();
    return new Response(blob, {
      status: 200,
      headers: {
        "Content-Type": backendRes.headers.get("Content-Type") || "application/octet-stream",
        "Content-Disposition": `attachment; filename="export.${format}"`,
      },
    });
  } catch (error) {
    console.error("Error get file", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
