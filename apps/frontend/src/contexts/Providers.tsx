"use client";

import { SessionProvider } from "next-auth/react";

type RootProps = {
  children: React.ReactNode;
};

export function Providers({ children }: RootProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
