import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  if (pathname.includes(".")) return NextResponse.next();

  // Frittståande statisk app i public/medleiingskart – skal ikkje inn i
  // /ss-strukturen. Reine URL-ar blir omskrivne til index.html i next.config.
  if (pathname === "/medleiingskart" || pathname.startsWith("/medleiingskart/")) {
    return NextResponse.next();
  }

  if (hostname.includes("selsengsystaddal")) {
    const url = request.nextUrl.clone();
    url.pathname = `/ss${pathname}`;
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/((?!_next|api|studio|favicon\\.ico).*)"],
};
