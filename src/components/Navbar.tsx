import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
    <nav className="bg-[#66023c] h-[10rem] flex">
      {/* Logo or left side */}
      <Link href="/" className="my-8 ml-12 hover:cursor-pointer inline-block">
        <Image
          src="/faux-logo.jpeg"
          alt="Riverside Lyric Opera Logo"
          width={95}
          height={95}
          priority
        />
      </Link>
      {/* Right side: links + hamburger */}
      <div className="flex ml-auto space-x-12 items-start">
        <ul className="hidden md:flex space-x-12 text-white items-center pt-12">
          <li>
            <Link href="/schedule">SCHEDULE</Link>
          </li>
          <li>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li>
            <Link href="/donate">DONATE</Link>
          </li>
          <li>
            <Link href="/on-demand">ON-DEMAND</Link>
          </li>
        </ul>

        <button className="text-white pr-12 pt-11 hover:cursor-pointer">
          <Menu size={32} />
        </button>
      </div>
    </nav>
    </header>
  );
}
