import Link from 'next/link'
import { Music2 } from 'lucide-react'
import Image from 'next/image'
import { PAYPAL_LINK } from '@/data/paypal'

const DonateBanner = () => {
    return (
        <section className="relative w-full h-160 md:h-190 lg:h-145 font-accent scroll-mt-20" id='donate'>
            {/* Background */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Purple */}
                <polygon points="0,0 100,0 100,100 45,100" fill="#ded7ea" />
                {/* Cream (light turquoise) */}
                <polygon points="0,0 55,0 45,100 0,100" fill="#ecefee" />
            </svg>

            {/* Text Content */}
            <div className="relative z-10 h-full flex flex-col items-center pt-15 md:pt-18 w-5/6 xs:w-4/5 md:w-3/4 lg:w-5xl px-2 xs:px-5 m-auto">
                <span className="flex items-center">
                    <h1 className="text-brand-orange text-4xl xs:text-5xl md:text-7xl tracking-normal md:me-7 font-bold">
                        Become a part of RLO
                    </h1>

                    <Music2 className="text-black size-20 xs:size-30 shrink-0 pt-5" />
                </span>

                <h3 className="mt-3 md:mt-3 text-2xl md:text-5xl text-black tracking-wider leading-20 font-bold max-w-9/10">
                    Opera needs you! Donate now to support the arts and inspire audiences of the future.
                </h3>

                <Link
                    href={PAYPAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex items-center justify-center
                        rounded-4xl bg-white w-60 
                        xs:mt-10 xs:ml-80
                        px-7 py-8
                        shadow-md hover:shadow-xl
                        transition-all
                        duration-500 ease-out hover:scale-110
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