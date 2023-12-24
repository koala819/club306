import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import { isAuthenticatedUser } from '@/lib/isAuthenticatedUser';

export default withAuth(async function middleware(req: any) {
  const isAuth = await isAuthenticatedUser(req);
  if (!isAuth) {
    console.log('FORBIDDEN FOR USER');
    return NextResponse.redirect('/api/auth/signin');
  }

  console.log('User is authenticated');
  return NextResponse.next();
});

export const config = {
  matcher: ['/cpanel/:route*'],
};

// import { withAuth } from 'next-auth/middleware';

// export default withAuth(async function middleware() {
//   console.log('middleware');
// });

// export const config = {
//   matcher: ['/cpanel'],
// };
