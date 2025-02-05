import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // Example:
        if (
          credentials?.username === process.env.ADMIN_USERNAME &&
          credentials?.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login", // Custom login page
  },
  session: {
    strategy: "jwt",
  },
};
