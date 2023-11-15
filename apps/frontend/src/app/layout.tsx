import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "../contexts/Providers";
import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ascent | Community",
  description: "Ascent Community",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={inter.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
