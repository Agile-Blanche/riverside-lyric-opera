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
  { href: "/calendar", label: (  <span className="flex items-center w-10 h-5">
    <CalendarIcon className="w-full h-full"/>
  </span>)}
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-brand-amber bg-brand-white">
  
<nav
  className={`
    flex relative w-full items-center
    transition-[height] duration-300 ease-out
    ${isScrolled ? "h-[6rem]" : "h-[10rem]"}
  `}
>
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
  className={`
    transition-transform duration-300 ease-out 
    ${isScrolled ? "scale-120 translate-x-4" : "scale-250 translate-x-18"}
  `}
/>
        </Link>

        {/* Right side: links + hamburger */}
        <div className="flex ml-auto mr-2 space-x-12 items-start">
          <ul className="hidden sm:flex space-x-12 items-center sm:text-sm md:text-base -translate-y-[.5rem]">
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
