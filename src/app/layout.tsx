"use client"

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sora, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora", // optional but recommended
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter", // optional but recommended
});


// export const metadata: Metadata = {
//   title: "Riverside Lyric Opera",
//   description: "Riverside Lyric Opera is a non-profit organization in Riverside, California, dedicated to celebrating and sharing classical and opera music.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
{
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sora.variable} ${inter.variable} motion-safe:scroll-smooth`}>
      <body>
       <Navbar 
       />

      {/* spacer */}
      <div
        className={`transition-[height] duration-300 ease-out h-[7rem]`}
      />

        {children}
        <Footer />
      </body>
    </html>
  );
}
}
