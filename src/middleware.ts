import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default async function middleware(req: Request) {
    const session = await auth();
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Define public and protected routes
    const authRoutes = ["/auth/signin", "/auth/signup"];
    const protectedRoutes = ["/dashboard"];

    if (session?.user) {
        // Redirect authenticated users away from auth pages
        if (authRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/", req.url));
        }
        return NextResponse.next();
    }

    // Redirect unauthenticated users trying to access protected routes
    if (protectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"], 
};

