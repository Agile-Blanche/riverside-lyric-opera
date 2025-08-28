import Link from 'next/link'
import { Music2 } from 'lucide-react'

const DonateBanner = () => {
    return (
        <div className="relative w-full h-75">
            {/* Background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Teal */}
                <polygon points="0,0 100,0 100,100 45,100" fill="#1f8ab3" />
                {/* Cream */}
                <polygon points="0,0 55,0 45,100 0,100" fill="#fdf8f3" />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col m-auto py-15 md:py-10 w-3/4 md:w-4/5 lg:w-2/5">
                <span className="flex items-center text-[#4f5251]">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-normal me-3 md:me-7">
                        Sustain the Arts
                    </h1>

                    <Music2 className="size-11" />
                </span>

                <h3 className="mt-3 md:mt-4 text-xl md:text-3xl font-bold text-[#77385c] opacity-80 tracking-wider">
                    Support Opera Today. Inspire Audiences Tomorrow
                </h3>

                <Link
                    href="/donate"
                    className="mt-4 md:mt-6 text-base md:text-lg text-[#d5b695] uppercase tracking-wide hover:text-[#aa9177]"
                >
                    Become a Patron →
                </Link>
            </div>

        </div>

    )
}

export default DonateBanner