import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Alike } from "next/font/google";

const alike = Alike({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alike", // optional: exposes it as a CSS var
});

export const metadata: Metadata = {
  title: "RLO",
  description: "Riverside Lyric Opera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${alike.className}`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
