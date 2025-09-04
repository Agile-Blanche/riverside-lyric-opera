import Image from 'next/image'
import aboutBannerImg from '/public/imgs/aboutBanner.jpg'
import Link from 'next/link'

const AboutUsBanner = () => {
    return (
        <section className="bg-[#f7efe5] font-accent pt-30 overflow-hidden">
            {/* Card */}
            <div className="relative bg-[#66023c] ring-1 ring-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-visible">
                {/* Inner Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* IMAGE COLUMN */}
                    <div className="relative flex justify-center md:justify-end px-4 sm:px-6 pt-6 md:pt-0">
                        <div
                            className="
                                relative
                                w-[240px] sm:w-[300px] md:w-[340px]
                                aspect-[4/5]
                                overflow-hidden
                                ring-1 ring-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                                -translate-y-6 md:-translate-y-10
                                z-10
                                [--tw-shadow-color:rgba(0,0,0,0.4)]
                                [-webkit-box-reflect:below_6px_linear-gradient(transparent,rgba(0,0,0,0.2))]
                            ">
                            <Image
                                src={aboutBannerImg}
                                alt="Backstage laughs from an opera tech crew"
                                fill
                                className="object-cover grayscale"
                                priority
                            />
                        </div>
                    </div>


                    {/* COPY COLUMN */}
                    <div className="px-6 sm:px-10 lg:px-14 py-10 sm:py-12 flex flex-col justify-center">
                        <h2
                            className="
                      text-center md:text-left
                      text-white text-3xl sm:text-4xl lg:text-5xl
                      font-light
                      tracking-[0.25em]    /* spaced letters like mock */
                      mb-6 sm:mb-8
                    "
                        >
                            We are R.L.O.
                        </h2>

                        <p
                            className="
                      text-[#e4a9a9]
                      text-base sm:text-lg lg:text-xl
                      leading-relaxed lg:leading-8
                      tracking-[0.05em] text-justify
                    "
                        >
                            Riverside Lyric Opera is dedicated to making world-class opera
                            accessible to everyone in our community. Whether through grand
                            productions, intimate recitals, or innovative On-Demand
                            streaming, Riverside Lyric Opera brings timeless works and
                            powerful new voices to audiences of today and tomorrow.
                        </p>

                        <div className="mt-8 sm:mt-10">
                            <Link
                                href="/about"
                                className="
                                  text-lg
                                  group inline-flex items-center gap-2
                                  text-white font-semibold uppercase tracking-widest
                                  hover:text-[#f4d8c0] hover:font-bold transition
                                "
                                aria-label={'Learn More about Riverside Lyric Opera'}
                            >
                                Learn More  →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUsBanner