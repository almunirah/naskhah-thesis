import "next-auth";
import "next-auth/jwt";
import type { Role } from "@prisma/client";

declare module "next-auth" {
  interface User {
    role: Role;
    sessionEpoch: number;
  }

  interface Session {
    user: {
      id: string;
      role: Role;
      sessionEpoch: number;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: Role;
    sessionEpoch?: number;
  }
}
