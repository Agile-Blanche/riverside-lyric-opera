import Link from "next/link";
import Image from "next/image";
import { PAYPAL_LINK } from "@/data/paypal";
import { LucideHeart } from "lucide-react";

export default function LandingBanner() {
  return (
    <section className="w-full">
      <div className="flex w-full max-sm:min-h-[calc(100dvh-20rem)] min-h-[720px]">
        <div className="flex flex-col justify-end relative w-full">
          <Image
            src="/images/RLO-gala-cropped.jpg"
            alt="Upcoming performance"
            fill
            priority
            className="object-cover 2xl:object-[center_30%] brightness-90"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-black/35 to-transparent"></div>
          <div className="relative pt-10 px-7 md:px-15 pb-15 md:pb-30 xl:pb-20 headline-font tracking-tight">
            <p className="font-bold uppercase text-brand-orange text-xl xl:text-3xl">
              support rlo
            </p>
            <div className="max-w-[9rem] border-b-7 xl:max-w-[13rem] xl:border-b-10 my-3 xl:my-5 border-brand-amber" />
            <h1 className="text-3xl min-[80rem]:text-5xl min-[106.25rem]:text-6xl max-w-6xl font-bold uppercase text-brand-white">
              Be part of every season.
            </h1>
            <p className="pl-5 md:pl-10 pb-4 pt-2 sm:pt-0 sm:pb-2 xl:pt-5 xl:pb-8 text-lg xl:text-3xl body-font text-brand-white max-w-md xl:max-w-2xl leading-8 sm:leading-10 xl:leading-13">
              A monthly gift keeps live opera on stage in Riverside, all year
              long.
            </p>
            <div className="ml-5 sm:ml-10">
              <Link
                href={PAYPAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group gap-x-2 inline-flex py-2.5 px-4 rounded-4xl bg-brand-lavender xl:text-2xl font-bold uppercase headline-font transition-all
                        duration-500 ease-out hover:scale-110 hover:bg-brand-orange text-brand-black"
                aria-describedby="hero-donate-hint"
              >
                Give Monthly
                <LucideHeart
                  className="fill-transparent transition
                        duration-500 ease-out group-hover:fill-black -mt-0.5 lg:mt-0.5"
                />
              </Link>
              <p
                id="hero-donate-hint"
                className="pt-3 ml-2 max-w-sm text-balance leading-4.5"
              >
                <small className="text-brand-lavender/70 xl:text-base body-font">
                  Select “Monthly” on the PayPal page. One-time gifts are
                  welcome too.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
