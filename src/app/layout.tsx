import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "@/components/providers/TanstackProvider";
const inter = Inter({ subsets: ["latin"] });
import type { PropsWithChildren } from "react";
export const metadata: Metadata = {
  title: "Hacker News",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
