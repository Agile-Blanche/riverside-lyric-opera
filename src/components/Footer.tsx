import { COMPANY } from "@/data/company";
import { SOCIALS } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pb-12 pt-4 font-accent pl-5">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="/images/footer-logo.png"
          alt="RLO logo"
          width={200}
          height={60}
          className="w-100 h-auto pl-3"
        />
      </div>

      <div className="md:ml-9 max-w-screen-xl flex justify-center md:justify-start">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5">
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold tracking-[.3rem] uppercase mb-2 text-center md:text-left">
              Company Phone
            </h3>
            <ul className="space-y-1 text-gray-300">
              <li className="text-lg ps-3 font-bold text-center md:text-left">{COMPANY.phone}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold tracking-[.3rem] uppercase mb-3 text-center md:text-left">
              Company Address
            </h3>
            <ul className="space-y-1 text-gray-300 font-bold text-center md:text-left">
              {COMPANY.address.map((addressLine: string, i: number) => {
                return (
                  <li key={i} className="text-lg ps-3">
                    {addressLine}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h3 className="text-lg font-bold tracking-[.3rem] uppercase mb-4 text-center md:text-left">
              Socials
            </h3>
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 ps-3 flex-wrap">
              {SOCIALS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brand-orange hover:bg-orange-600 transition">
                    <Image
                      src={s.icon}
                      alt={s.name}
                      width={20}
                      height={20}
                      className="h-5 w-5"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
