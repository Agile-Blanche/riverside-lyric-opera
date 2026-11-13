import Link from "next/link";
import Image from "next/image";
import { PAYPAL_LINK } from "@/data/paypal";
import { LucideHeart } from "lucide-react";

export default function LandingBanner() {
  return (
    <section className="w-full">
      <div className="flex flex-row w-full min-h-[720px]">
        <div className="hidden md:block relative lg:w-[100%] w-full min-h-[350px]">
          <Image
            src="/images/RLO-gala-cropped.jpg"
            alt="Upcoming performance"
            fill
            priority
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/90 via-black/35 to-transparent"></div>
          <div className="px-15 absolute bottom-20  headline-font text-3xl tracking-tight">
            <p className="font-bold uppercase text-brand-orange">support rlo</p>
            <div className="max-w-[13rem] border-b-10 my-5 border-brand-amber"></div>
            <h1 className="xl:text-5xl 2xl:text-7xl max-w-6xl font-bold uppercase text-brand-white">
              Be part of every season.
            </h1>
            <p className="pl-10 pt-5 pb-8 text-3xl body-font text-brand-white max-w-2xl leading-13">
              A monthly gift keeps live opera on stage in Riverside, all year
              long.
            </p>

            <Link
              href={PAYPAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group gap-x-2 inline-flex py-2.5 px-4 rounded-4xl ml-10 bg-brand-lavender text-2xl font-bold uppercase headline-font transition-all
                        duration-500 ease-out hover:scale-110 hover:bg-brand-orange text-brand-black"
            >
              Give Monthly
              <LucideHeart
                className="mt-0.5 fill-transparent transition
                        duration-500 ease-out group-hover:fill-black"
                aria-describedby="donate-hint"
              />
            </Link>
            <p id="donate-hint" className="pt-3 max-w-sm ml-12 text-balance leading-4.5"><small className="text-brand-lavender/70 text-base body-font">Select “Monthly” on the PayPal page. One-time gifts are welcome too.</small></p>
          </div>
        </div>
      </div>
    </section>
  );
}
