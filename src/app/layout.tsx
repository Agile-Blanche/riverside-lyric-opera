import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Alike, Montserrat } from "next/font/google";

const alike = Alike({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alike",
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300'],
  // weight: ['300', '400', '500', '700'], // pick the weights you’ll use
  variable: '--font-montserrat',
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
    <html lang="en" className={`${alike.variable} ${montserrat.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
