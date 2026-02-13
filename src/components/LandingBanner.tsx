import Link from "next/link";
import Image from "next/image";

export default function LandingBanner() {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row w-full min-h-[500px]">
        {/* Left Side – Text Content */}
        <div className="lg:w-[40%] w-full flex pl-7 pt-8 bg-[#ff6d2c]">
          <div className="max-w-md">
            <Image
              width={320}
              height={320}
              src={"images/gala-logo.svg"}
              alt="RLO Logo"
            ></Image>
            <p className="mb-2 text-2xl font-semibold tracking-wide pl-12">
              presents
            </p>
            <p className="pr-5 pl-11 text-6xl headline-font font-bold text-[#ded6eb]">
              First Annual Opera Gala
            </p>
            <Link href="/calendar#2026-2-7">
              <span className="inline-block px-6 py-3 bg-black text-white rounded-full font-bold mb-10 mt-10 ml-10 sm:mt-12 sm:ml-15 cursor-pointer active:scale-90 transition duration-300">
                Learn More
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side – Image */}
        <div className="hidden md:block relative lg:w-[60%] w-full min-h-[350px]">
          <Image
            src="/images/rlo-gala-cropped.jpg"
            alt="Upcoming performance"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
