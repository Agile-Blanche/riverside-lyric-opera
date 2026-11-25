import Link from "next/link";
import { LucideHandHeart } from "lucide-react";
import Image from "next/image";
import { PAYPAL_LINK } from "@/data/paypal";

const GIFT_IMPACTS = [
  "World-class performances",
  "Education & student outreach",
  "Community events",
  "Accessible opera for all",
] as const;

const DonateBanner = () => {
  return (
    <section
      className="relative w-full scroll-mt-20 overflow-clip bg-brand-lavender"
      id="donate"
    >
      <div className="absolute inset-0 z-20 drop-shadow-[8px_0_16px_rgb(0_0_0/0.25)]">
        <div className="[clip-path:polygon(0_0,55%_0,45%_100%,0_100%)] bg-brand-white h-[calc(100%+1px)]" />
      </div>

      {/* Text Content */}
      <div className="grid grid-cols-1 xs:grid-cols-2 max-w-[90rem] min-[120rem]:max-w-[120rem] mx-auto">
        <div>
          <div className="min-h-150 xs:min-h-170 sm:min-h-150 md:min-h-190 relative z-30 flex flex-col pt-10 pb-5 md:pt-18 md:pb-8 px-7 xs:px-5 sm:px-7 md:px-15 mx-auto max-w-dvw">
            <p className="headline-font font-bold uppercase text-brand-amber text-xl xl:text-3xl">
              Donate to RLO
            </p>
            <div className="max-w-[10.5rem] border-b-7 xl:max-w-[16rem] xl:border-b-10 my-2 md:my-3 xl:mt-5 border-brand-orange" />
            <div className="flex gap-5">
              <h2 className="text-[1.375rem] md:text-[2rem] xl:text-5xl max-w-[13rem] md:max-w-sm xl:max-w-2xl xl:leading-16 font-bold uppercase headline-font text-brand-black md:text-balance">
                Carry opera into the future.
              </h2>
            </div>
            <p className="mt-5 sm:mt-3 pl-3.5 sm:pl-5 md:pl-10 body-font max-w-md sm:max-w-[18.5rem] md:max-w-xs lg:max-w-[25rem] text-base sm:text-xl leading-relaxed text-gray-700 font-semibold">
              A monthly gift brings <span className="md:whitespace-nowrap">world-class</span> opera to everyone in our
              community, season after season.
            </p>
            <div className="flex flex-col items-center xs:items-start">
              <Link
                href={PAYPAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                        inline-flex items-center justify-center 
                        rounded-4xl bg-gray-100 w-40 md:w-45
                        xs:ml-3.5 mt-10 xs:mt-8 sm:mt-5 sm:ml-5 md:ml-10 md:mt-8
                        py-3 md:py-6
                        shadow-md hover:shadow-xl
                        transition-all
                        duration-500 ease-out hover:scale-110
                    "
                aria-describedby="donate-hint"
              >
                <Image
                  src="/images/paypal-logo.svg"
                  alt="Donate with PayPal"
                  width={130}
                  height={30}
                  priority
                />
              </Link>
              <p
                id="donate-hint"
                className="pt-5 sm:pt-3 md:pt-5 xs:ml-3.5 sm:ml-5 md:ml-10 max-w-[26rem] sm:max-w-sm text-balance leading-4.5 text-center xs:text-start"
              >
                <small className="text-gray-600 xl:text-base body-font">
                  Select “Monthly” on the PayPal page. One-time gifts are
                  welcome too.
                </small>
              </p>
            </div>
            <p className="mt-auto text-xs xl:text-sm body-font leading-snug text-gray-600 xs:max-w-[14rem] sm:max-w-[17rem] lg:max-w-xs ml-0">
              Riverside Lyric Opera is a{" "}
              <span className="whitespace-nowrap">501(c)(3)</span> tax-exempt
              nonprofit organization. Donations are tax-deductible to the extent
              allowed by law.
            </p>
          </div>
        </div>
        <div className="hidden xs:block">
          <div className="relative z-30 flex flex-col ml-2 md:ml-10 lg:ml-35 xl:ml-45 2xl:ml-70">
            <div className="flex flex-row ml-10 sm:ml-15 mt-30 sm:mt-28 md:mt-45 xl:mt-43 items-start sm:items-center">
              <h3 className="headline-font uppercase font-bold text-xl md:text-2xl xl:text-[2.125rem] max-w-[10rem] md:max-w-[15rem] xl:max-w-xs xl:leading-12 md:text-balance">
                Where your gift goes.
              </h3>
              <LucideHandHeart
                className="text-brand-amber -translate-x-2 sm:-translate-x-0 md:-translate-x-14 xl:-translate-x-16 size-13 md:size-16 xl:size-20 hidden min-[500px]:block shrink-0"
                aria-hidden="true"
              />
            </div>

            <ul className="flex flex-col gap-3 mt-2">
              {GIFT_IMPACTS.map((impact) => (
                <li
                  key={impact}
                  className="flex flex-row items-start gap-1.5 md:gap-2.5 ml-6 sm:ml-10 xl:ml-9.5 mr-2 font-semibold text-gray-700 text-[.9375rem] sm:text-base md:text-lg leading-relaxed text-balance"
                >
                  <span
                    className="h-[4px] w-[14px] xl:w-[16px] bg-brand-orange shrink-0 mt-[calc(0.5lh-2px)]"
                    aria-hidden="true"
                  ></span>
                  {impact}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute left-[45%] right-0 top-[60%] -bottom-px z-10 [clip-path:polygon(7.27%_0,100%_0,100%_100%,0_100%)]">
            <Image
              sizes="55vw"
              src="/images/rlo-calendar-img.jpeg"
              alt="An RLO performer."
              fill
              className="object-cover brightness-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateBanner;
