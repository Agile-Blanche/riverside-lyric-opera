import Image from 'next/image'
import aboutBannerImg from '/public/assets/imgs/aboutBanner.jpg'
import Link from 'next/link'

const AboutUsBanner = () => {
    return (
        <section className="bg-[#f7efe5] font-accent py-12 sm:py-16">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
                {/* Card */}
                <div
                    className="
                relative rounded-xl bg-[#66023c]
                shadow-[0_20px_40px_rgba(0,0,0,0.25)]
                ring-1 ring-black/10
                overflow-hidden
              "
                >
                    {/* Inner layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image */}
                        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                            <Image
                                src={aboutBannerImg}
                                alt='Backstage laughs from an opera tech crew'
                                fill
                                className="object-cover grayscale"
                                priority
                            />
                        </div>

                        {/* Copy */}
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
                      text-[#f4d8c0]
                      text-base sm:text-lg lg:text-xl
                      leading-relaxed lg:leading-8
                      tracking-[0.05em]
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
                        group inline-flex items-center gap-2
                        text-[#f4d8c0] font-semibold uppercase tracking-widest
                        border-b-2 border-[#f4d8c0]/60 pb-1
                        hover:text-white hover:border-white transition
                      "
                                    aria-label={'Learn More about Riverside Lyric Opera'}
                                >
                                    Learn More  →
                                    {/* <ArrowRight
                        className="h-5 w-5 translate-x-0 transition group-hover:translate-x-1"
                        aria-hidden
                      /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsBanner