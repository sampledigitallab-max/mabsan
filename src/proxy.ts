import { NextResponse, type NextRequest } from "next/server";

/**
 * Mevcut isteğin pathname'ini `x-pathname` header'ına yazar.
 * Root layout bu header'ı okuyarak <html lang> attribute'unu dinamik
 * olarak ayarlar (TR vs EN).
 */
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Statik dosyaları, _next, favicon, sitemap, robots ve api'yi atla
  matcher: ["/((?!_next/|api/|favicon|robots|sitemap|media/|video/|belgeler/|static/|manifest).*)"],
};
