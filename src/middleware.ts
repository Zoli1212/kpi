import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/signin', '/signup', '/error', '/'];

export default auth(async (req) => {
  const { pathname } = req.nextUrl;
  const isPublicPath = publicPaths.includes(pathname);
  const isApiAuthRoute = pathname.startsWith('/api/auth');
  const isDashboardRoute = pathname.startsWith('/dashboard');

  // Allow API auth routes and public paths
  if (isApiAuthRoute || isPublicPath) {
    return NextResponse.next();
  }

  const session = req.auth;
  const isLoggedIn = !!session?.user;

  // For dashboard routes, ensure the session is valid
  if (isDashboardRoute && !isLoggedIn) {
    const signInUrl = new URL('/signin', req.nextUrl.origin);
    signInUrl.searchParams.set('callbackUrl', pathname);
    const response = NextResponse.redirect(signInUrl);
    // Clear any existing session cookies
    response.cookies.delete('next-auth.session-token');
    response.cookies.delete('__Secure-next-auth.session-token');
    return response;
  }

  // Redirect unauthenticated users to signin
  if (!isLoggedIn) {
    const signInUrl = new URL('/signin', req.nextUrl.origin);
    signInUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
