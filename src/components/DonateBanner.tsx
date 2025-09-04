import Link from 'next/link'
import { Music2 } from 'lucide-react'
import Image from 'next/image'

const DonateBanner = () => {
    return (
        <section className="relative w-full h-100 font-accent">
            {/* Background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Purple */}
                <polygon points="0,0 100,0 100,100 45,100" fill="#ded7ea" />
                {/* Cream (light turquoise) */}
                <polygon points="0,0 55,0 45,100 0,100" fill="#ecefee" />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col py-15 md:py-25 w-4/5 m:w-3/4 m-auto ps-5">
                <span className="flex items-center">
                    <h1 className="text-brand-orange text-5xl md:text-6xl font-normal tracking-normal md:me-7">
                        Sustain the Arts
                    </h1>

                    <Music2 className="text-black size-15" />
                </span>

                <h3 className="mt-3 md:mt-4 text-2xl md:text-4xl font-normal text-black tracking-normal">
                    Support Opera Today. Inspire Audiences Tomorrow
                </h3>

                <Link
                    href="https://www.paypal.com/donate" // 👈 replace with your real donation link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center justify-center
                        rounded-2xl bg-white w-40 m-auto mt-5
                        px-7 py-4
                        shadow-md hover:shadow-lg
                        transition-all
                    ">
                    <Image
                        src="/images/paypal-logo.svg"
                        alt="Donate with PayPal"
                        width={100}
                        height={30}
                        priority
                    />
                </Link>
            </div>

        </section>

    )
}

export default DonateBanner