import type { DefaultSession, NextAuthConfig, User } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
    } & DefaultSession['user']
  }
  
  interface User {
    role: string;
  }
}

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/signin',
    error: '/error',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = (user as User & { role: string }).role || 'user';
      }
      return token;
    },
    session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      if (token.role) {
        (session.user as any).role = token.role;
      }
      return session;
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  session: { strategy: 'jwt' },
  providers: [],
};
