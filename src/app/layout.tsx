import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins, Sarabun } from "next/font/google";
import Footer from "@/components/Footer";

const sarabun = Sarabun({
  weight: ["400", "700"],
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
  description: "Riverside Lyric Opera is a non-profit organization in Riverside, California, dedicated to celebrating and sharing classical and opera music.",
  icons: {
    icon: "/favicon.png",
  },
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
        <Footer />
      </body>
    </html>
  );
}
