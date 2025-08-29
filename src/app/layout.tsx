import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Alike, Poppins } from "next/font/google";

const alike = Alike({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alike",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Riverside Lyric Opera",
  description: "Riverside Lyric Opera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alike.variable} ${poppins.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
