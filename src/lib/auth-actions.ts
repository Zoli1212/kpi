"use server";
import { signIn } from "next-auth/react";
import { AuthError } from "next-auth";
import bcrypt from 'bcryptjs';
import { db } from './db';

type FormState = {
  message: string;
} | null;

export async function authenticate(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirectTo: "/dashboard",
    });
    return { message: 'Sikeres bejelentkezés' };
  } catch (error: unknown) {
    if (error instanceof Error) {
      if ('type' in error && error.type === 'CredentialsSignin') {
        return { message: 'Hibás email vagy jelszó.' };
      } else if (error.cause && 
                typeof error.cause === 'object' && 
                error.cause !== null && 
                'err' in error.cause && 
                error.cause.err && 
                typeof error.cause.err === 'object' && 
                'message' in error.cause.err && 
                error.cause.err.message === 'CredentialsSignin') {
        return { message: 'Hibás email vagy jelszó.' };
      }
      return { message: error.message || 'Valami hiba történt a bejelentkezés során.' };
    }
    return { message: 'Ismeretlen hiba történt a bejelentkezés során.' };
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
