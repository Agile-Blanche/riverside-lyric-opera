import { SOCIALS } from "@/data/socials";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 font-accent">
            {/* Logo / Name */}
            <div className="w-24 mx-8 mb-8">
                <h2 className="text-lg font-bold uppercase tracking-widest">
                    Riverside
                    <br />
                    <span className="font-normal">Lyric Opera</span>
                </h2>
            </div>

            <div className="mx-auto max-w-screen-xl px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    {/* Contact info */}
                    <div>
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-2">
                            Company Phone
                        </h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>1-800-999-9999</li>
                            <li>1-800-000-0000</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-2">
                            Company Address
                        </h3>
                        <ul className="space-y-1 text-gray-300">
                            <li>Riverside Lyric Opera</li>
                            <li>101 Cultural Center Drive, Suite 200</li>
                            <li>Riverside, CA 92507</li>
                        </ul>
                    </div>

                    {/* Social icons */}
                    <div>
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-4">
                            Socials
                        </h3>
                        <div className="flex items-center gap-4">
                            {SOCIALS.map((s) => (
                                <Link key={s.name} href={s.href} aria-label={s.name}>
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
