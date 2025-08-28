import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
 <nav className="bg-[#66023c] h-[10rem] flex">
      {/* Logo or left side */}
    <Image 
        src="/faux-logo.jpeg" 
        alt="Riverside Lyric Opera Logo" 
        width={95} 
        height={95} 
        priority 
        className="my-8 ml-12 hover:cursor-pointer"
      />

      {/* Right side: links + hamburger */}
      <div className="flex  ml-auto space-x-12 items-start">
        <ul className="hidden md:flex space-x-12 text-white items-center pt-12">
          <li><a href="">SCHEDULE</a></li>
          <li><a href="">ABOUT US</a></li>
          <li><a href="">DONATE</a></li>
          <li><a href="">ON-DEMAND</a></li>
        </ul>

        <button className="text-white pr-12 pt-11 hover:cursor-pointer">
          <Menu size={32} />
        </button>
      </div>
    </nav>
  );
}
