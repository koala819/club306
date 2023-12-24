// import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { onlyStaff } from '@/lib/supabase';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // const supabase = createMiddlewareClient({ req, res });

  // const session = await supabase.auth.getSession();
  // if (session.data.session !== null) {
  //   const staff = await onlyStaff(session.data.session?.user?.email);

  //   if (!staff && req.nextUrl.pathname.startsWith('/cpanel/admin')) {
  //     return NextResponse.rewrite(new URL('/login', req.url));
  //   }
  // }

  // if (
  //   session.data.session === null &&
  //   req.nextUrl.pathname.startsWith('/cpanel')
  // ) {
  //   return NextResponse.rewrite(new URL('/login', req.url));
  // }

  return res;
}

// export const config = {
//   matcher: ['/', '/cpanel/:path*', '/memberfinish'],
// };
