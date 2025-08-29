import Link from 'next/link'
import { Music2 } from 'lucide-react'

const DonateBanner = () => {
    return (
        <section className="relative w-full h-100 font-accent">
            {/* Background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Teal */}
                <polygon points="0,0 100,0 100,100 45,100" fill="#1f8ab3" />
                {/* Cream */}
                <polygon points="0,0 55,0 45,100 0,100" fill="#fdf8f3" />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col py-15 md:py-25 w-3/4 m-auto ps-5">
                <span className="flex items-center text-[#4f5251]">
                    <h1 className="text-4xl md:text-6xl font-normal tracking-normal me-3 md:me-7">
                        Sustain the Arts
                    </h1>

                    <Music2 className="size-15" />
                </span>

                <h3 className="mt-3 md:mt-4 text-xl md:text-4xl font-normal text-[#77385c] opacity-80 tracking-wider">
                    Support Opera Today. Inspire Audiences Tomorrow
                </h3>

                <Link
                    href="/donate"
                    className="mt-4 md:mt-6 text-base font-bold md:text-xl text-[#d5b695] uppercase tracking-wide hover:text-[#aa9177]">
                    Become a Patron →
                </Link>
            </div>

        </section>

    )
}

export default DonateBanner