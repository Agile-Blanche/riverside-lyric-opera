import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins, Sarabun } from "next/font/google";

const sarabun = Sarabun({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sarabun",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
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
    <html lang="en" className={`${sarabun.variable} ${poppins.variable}`}>
      <body className="font-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
