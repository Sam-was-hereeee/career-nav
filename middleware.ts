
import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@lib/supabase/middleware";

export async function middleware(request: NextRequest) {
    const url = request.nextUrl;

    // if url is /api, return early
    if (url.pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    return await updateSession(request);
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
