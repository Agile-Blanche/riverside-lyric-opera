"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SmoothLink from "./SmoothLink";

const NAV_LINKS = [
  { href: "/#about", label: "ABOUT US" },
  { href: "/#donate", label: "DONATE" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="sticky top-0 z-50 border-b-2 border-brand-amber border-solid">
      <nav className="bg-brand-white md:h-[9rem] lg:h-[10rem] flex relative">
        {/* Logo / left side */}
        <Link
          href="/"
          className="inline-block hover:cursor-pointer hover:opacity-90"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.svg"
            alt="Riverside Lyric Opera Logo"
            width={95}
            height={95}
            priority
            className="sm:ml-3 md:ml-0 md:w-63 md:h-37 lg:w-70  lg:h-41"
          />
        </Link>

        {/* Right side: links + hamburger */}
        <div className="flex ml-auto space-x-12 items-start">
          <ul className="hidden sm:flex space-x-12 items-center pt-5 md:pt-10 lg:pt-12 sm:text-sm md:text-base">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <SmoothLink
                    href={href}
                    label={label}
                    active={active}
                    className={[
                      "headline-font font-bold",
                      active
                        ? "text-brand-orange"
                        : "text-black hover:text-brand-orange",
                    ].join(" ")}
                  />
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="text-black pr-9 pt-4 hover:cursor-pointer hover:opacity-90 sm:hidden"
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
            className="absolute top-full left-0 w-full bg-brand-orange sm:hidden z-50"
          >
            <ul className="flex flex-col items-center space-y-10 py-8">
              {NAV_LINKS.map(({ href, label }) => {
                const active = isActive(href);
                return (
                  <li key={href}>
                    <SmoothLink
                      href={href}
                      label={label}
                      active={active}
                      onClick={() => setOpen(false)} // close menu after click
                      className={
                        active ? "text-black" : "text-white hover:text-black"
                      }
                    />
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
