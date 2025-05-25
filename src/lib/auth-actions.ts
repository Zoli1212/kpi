"use server";

import bcrypt from 'bcryptjs';
import { db } from './db';
import { signIn, signOut } from '@/auth';
import { AuthError as NextAuthError } from 'next-auth';

type FormState = {
  message: string;
} | null;

export async function authenticate(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signIn('credentials', {
      email,
      password,
      redirect: false
    });

    return { message: 'success' };
  } catch (error) {
    console.error('Authentication error:', error);
    if (error instanceof NextAuthError) {
      return { message: 'Hibás email vagy jelszó.' };
    }
    return { message: 'Valami hiba történt a bejelentkezés során.' };
  }
}

export async function register(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    
    // Combine first and last name
    const name = `${firstName} ${lastName}`.trim();

    // Validate passwords match
    if (password !== confirmPassword) {
      return { message: 'A jelszavak nem egyeznek meg.' };
    }

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return { message: 'Ez az email cím már regisztrálva van.' };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with hashed password
    await db.user.create({
      data: {
        name,
        email,
        hashedPassword, // This is the correct field name that matches the schema
        description: 'New user', // Add a default description
      },
    });
    return { message: 'Sikeres regisztráció' };
  } catch (error: unknown) {
    console.error('Registration error:', error);
    if (error instanceof Error) {
      return { message: error.message || 'Valami hiba történt a regisztráció során.' };
    }
    return { message: 'Ismeretlen hiba történt a regisztráció során.' };
  }
}

export async function signOutAction(): Promise<{ success: boolean; message: string }> {
  try {
    await signOut({ redirect: false });
    return { success: true, message: 'Sikeres kijelentkezés' };
  } catch (error) {
    console.error('Sign out error:', error);
    return { success: false, message: 'Valami hiba történt a kijelentkezés során.' };
  }
}
