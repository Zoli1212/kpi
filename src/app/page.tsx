import { redirect } from 'next/navigation';

import { auth } from '@/auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import SignInForm from '@/components/auth/SignInForm';

export default async function Home() {
  const session = await auth();
  
  if (session) {
    redirect('/dashboard');
  }else{
    redirect('/signin');
  }
}
