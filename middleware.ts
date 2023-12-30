import { NextResponse, NextRequest } from "next/server"
let locales = ["en", "es"]

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}/`
  )
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(new URL(`/en/home`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
}
