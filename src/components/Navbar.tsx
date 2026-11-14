"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";
import SmoothLink from "./SmoothLink";
import CalendarIcon from "./CalendarIcon";

type NavLink = {
  href: string;
  label: ReactNode;
};

const NAV_LINKS: NavLink[] = [
  { href: "/#about", label: "ABOUT US" },
  { href: "/#donate", label: "DONATE" },
  {
    href: "/calendar",
    label: (
      <span className="flex items-center justify-center w-10 h-5">
        <p className="md:hidden uppercase">Calendar</p>
        <CalendarIcon className="w-full h-full" />
      </span>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
 
  useEffect(() => {
    if (open) {
      document.body.classList.add('max-md:overflow-hidden')
    }
     return () => {
      document.body.classList.remove('max-md:overflow-hidden');
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-brand-amber bg-brand-white">
      <nav
        className={`
    flex relative w-full items-center
    h-[7rem]
  
  `}
      >
        {/* Logo / left side */}
        <Link
          href="/"
          className="px-2 md:px-10 inline-block transition duration-400 hover:cursor-pointer hover:opacity-80"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.svg"
            alt="Riverside Lyric Opera Logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Right side: links + hamburger */}
        <div className="flex ml-auto mr-2 space-x-12 items-start">
          <ul className="hidden md:flex space-x-12 items-center text-base -translate-y-[.5rem]">
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
                        : "text-black transition duration-400 hover:text-brand-orange",
                    ].join(" ")}
                  />
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className={`text-black pr-9 hover:cursor-pointer hover:opacity-90 md:hidden -translate-y-[.5rem]
                      
              `}
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
            className="absolute top-full h-[100vh] left-0 w-full bg-brand-orange md:hidden z-50"
          >
            <ul className="flex flex-col space-y-10 py-8 items-center">
              {[...NAV_LINKS]
                .sort((a, b) => (a.href === "/calendar" ? -1 : 0))
                .map(({ href, label }) => {
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
