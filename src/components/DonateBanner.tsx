import Link from 'next/link'
import { Music2 } from 'lucide-react'
import Image from 'next/image'

const DonateBanner = () => {
    return (
        <section className="relative w-full h-145 font-accent scroll-mt-20" id='donate'>
            {/* Background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Purple */}
                <polygon points="0,0 100,0 100,100 45,100" fill="#ded7ea" />
                {/* Cream (light turquoise) */}
                <polygon points="0,0 55,0 45,100 0,100" fill="#ecefee" />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col pt-15 md:pt-18 w-4/5 m:w-3/4 lg:w-5xl ps-5 m-auto">
                <span className="flex items-center">
                    <h1 className="text-brand-orange text-5xl md:text-7xl tracking-normal md:me-7 font-bold whitespace-nowrap">
                        Become a part of RLO
                    </h1>

                    <Music2 className="text-black size-30 shrink-0 pt-5" />
                </span>

                <h3 className="mt-3 md:mt-3 text-2xl md:text-5xl text-black tracking-wider leading-20 font-bold">
                    Opera needs you! Donate now to support the arts and inspire audiences of the future.
                </h3>

                <Link
                    href="https://www.paypal.com/donate" // 👈 replace with your real donation link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center justify-center
                        rounded-4xl bg-white w-60 mt-10 ml-80
                        px-7 py-8
                        shadow-md hover:shadow-lg
                        transition-all
                    ">
                    <Image
                        src="/images/paypal-logo.svg"
                        alt="Donate with PayPal"
                        width={150}
                        height={30}
                        priority
                    />
                </Link>
            </div>

        </section>

    )
}

export default DonateBanner