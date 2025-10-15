import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = (await cookies()).get("session")?.value;

  const isAuthRoute = request.nextUrl.pathname.startsWith("/login") || 
                      request.nextUrl.pathname.startsWith("/register");

  // If  try to enter protected routes without a token → it redirects to login
  if (!token && !isAuthRoute) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If  already have a token and are logged in → redirect to the dashboard
  if (token && isAuthRoute) {
    const dashboardUrl = new URL("/showcase", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
