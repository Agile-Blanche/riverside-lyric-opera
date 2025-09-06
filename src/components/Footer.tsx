import { COMPANY } from "@/data/company";
import { SOCIALS } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 font-accent">
      {/* Logo */}
      <div className="mx-3">
        <Image
          src="/images/footer-logo.png"
          alt="RLO logo"
          width={200}
          height={60}
          className="w-100 h-auto"
        />
      </div>

      <div className="mx-auto max-w-screen-xl px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Contact info */}
          <div>
            <h3 className="text-md font-bold tracking-widest uppercase mb-2">
              Company Phone
            </h3>
            <ul className="space-y-1 text-gray-300">
              <li className="text-sm ps-3">{COMPANY.phone}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold tracking-widest uppercase mb-2">
              Company Address
            </h3>
            <ul className="space-y-1 text-gray-300">
              {COMPANY.address.map((addressLine: string, i: number) => {
                return (
                  <li key={i} className="text-sm ps-3">
                    {addressLine}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h3 className="text-md font-bold tracking-widest uppercase mb-4">
              Socials
            </h3>
            <div className="flex items-center gap-4 ps-3">
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
