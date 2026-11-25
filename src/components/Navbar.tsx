"use client";

import { LucideMenu, LucideX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, ReactNode } from "react";
import SmoothLink from "./SmoothLink";
import CalendarIcon from "./CalendarIcon";
import { SOCIALS } from "@/data/socials";

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
      <span className="flex items-center md:justify-center w-15 h-5">
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
      document.body.classList.add("max-md:overflow-hidden");
    }
    return () => {
      document.body.classList.remove("max-md:overflow-hidden");
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-brand-amber bg-brand-white">
      <nav
        className={`
    flex relative w-full items-center
    h-[7rem] container-wide
  
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
            {open ? <LucideX size={32} /> : <LucideMenu size={32} />}
          </button>
        </div>
        {open && (
          <div
            id="dropdown-menu"
            className="absolute top-full h-[calc(100dvh-7rem)] overflow-y-auto left-0 w-full bg-brand-orange md:hidden z-50 p-7.5"
          >
            <div className="flex flex-col border-3 border-brand-amber gap-y-20 min-h-full">
              <ul className="space-y-12 py-10 ps-8 sm:pl-10 text-3xl headline-font">
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
                            active
                              ? "text-black"
                              : "text-brand-white hover:text-brand-amber"
                          }
                        />
                        {href === "/#donate" && <p className="text-base pl-2 pt-0.5 sm:pt-2 body-font text-brand-black/70">One-time or monthly</p>}
                      </li>
                    );
                  })}
              </ul>
              <div className="flex gap-4 min-[340px]:gap-6 sm:gap-8 ps-7 sm:ps-10 mt-auto pb-10">
                {SOCIALS.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    <div className="flex items-center justify-center bg-brand-orange">
                      <Image
                        src={s.icon}
                        alt={s.name}
                        width={20}
                        height={20}
                        className="h-6 w-6 sm:h-7.5 sm:w-7.5"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
