import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth({
  ...authConfig,
  // Add any additional NextAuth configuration here
});

export { auth };
