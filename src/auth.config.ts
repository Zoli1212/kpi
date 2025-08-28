import type { DefaultSession, NextAuthConfig, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { db } from './lib/db';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
      incidentsReporter: boolean;
    } & DefaultSession['user']
  }
  
  interface User {
    role: string;
    incidentsReporter: boolean;
  }
}

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/signin',
    error: '/error',
  },
  callbacks: {
        jwt({ token, user, account, profile }) {
      if (user) {
        const dbUser = user as any;
        token.role = dbUser.role || 'REPORTER';
        token.email = dbUser.email;
        token.incidentsReporter = dbUser.incidentsReporter;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      if (token.role) {
        (session.user as any).role = token.role;
      }
      if (token.email) {
        session.user.email = token.email as string;
      }
      if (token.incidentsReporter !== undefined) {
        (session.user as any).incidentsReporter = token.incidentsReporter;
      }
      return session;
    },
    authorized({ auth }) {
      return !!auth?.user;
    },
  },
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.hashedPassword) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.hashedPassword
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
          role: user.role || 'REPORTER',
          incidentsReporter: user.incidentsReporter ?? false,
        } as User;
      },
    }),
  ],
};
