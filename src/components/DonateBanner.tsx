import Link from 'next/link'

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
            <div className="relative z-10 flex flex-col m-auto py-10 w-2/5">
                <h1 className="text-4xl font-bold text-[#4f5251] tracking-normal">
                    Sustain the Arts 🎵
                </h1>
                <h3 className="mt-4 text-3xl font-bold text-[#77385c] opacity-80 tracking-wider">
                    Support Opera Today. Inspire Audiences Tomorrow
                </h3>
                <Link className="mt-6 text-lg text-[#d5b695] uppercase tracking-wide hover:text-[#aa9177]"
                    href="/donate">
                    Become a Patron →
                </Link>
            </div>
        </div>

    )
}

export default DonateBanner