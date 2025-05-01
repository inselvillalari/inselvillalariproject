import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname, locale } = request.nextUrl;

  // Sadece anasayfa (/) ise ve locale yoksa tr'ye yönlendir
  if (pathname === "/" && locale === "en") {
    const url = request.nextUrl.clone();
    url.pathname = "/tr";
    url.locale = "tr";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}