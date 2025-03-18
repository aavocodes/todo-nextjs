import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default async function middleware(req: Request) {
    const session = await auth();
    const url = new URL(req.url);
    const pathname = url.pathname;

    // If user is authenticated and tries to access /auth/signin, redirect them
    if (session?.user && pathname === "/auth/signin") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
