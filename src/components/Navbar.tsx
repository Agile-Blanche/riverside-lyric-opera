"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/schedule", label: "SCHEDULE" },
  { href: "/about", label: "ABOUT US" },
  { href: "/donate", label: "DONATE" },
  { href: "/on-demand", label: "ON-DEMAND" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#66023c] md:h-[9rem] lg:h-[10rem] flex relative">
        {/* Logo / left side */}
        <Link
          href="/"
          className="my-8 ml-8 sm:ml-12 inline-block hover:cursor-pointer hover:opacity-90"
          aria-label="Go to homepage"
        >
          <Image
            src="/faux-logo.jpeg"
            alt="Riverside Lyric Opera Logo"
            width={95}
            height={95}
            priority
            className="w-20 h-20 lg:w-24 lg:h-24"
          />
        </Link>

        {/* Right side: links + hamburger */}
        <div className="flex ml-auto space-x-12 items-start">
          <ul className="hidden sm:flex space-x-12 items-center pt-12 sm:text-sm lg:text-base">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      active
                        ? "text-[#d9bb9b]"
                        : "text-white hover:text-[#d9bb9b]",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="text-white pr-9 pt-11 hover:cursor-pointer hover:opacity-90 sm:hidden"
            aria-label="Expand Menu"
            aria-expanded={open}
            aria-controls="dropdown-menu"
            type="button"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        {open && (
          <div
            id="dropdown-menu"
            className="absolute top-full left-0 w-full bg-[#66023c] sm:hidden z-50"
          >
            <ul className="flex flex-col items-center space-y-10 py-8">
              {NAV_LINKS.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)} // close menu after click
                      aria-current={active ? "page" : undefined}
                      className={
                        active
                          ? "text-[#d9bb9b]"
                          : "text-white hover:text-[#d9bb9b]"
                      }
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
