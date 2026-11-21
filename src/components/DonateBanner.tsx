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
    <section className="relative w-full scroll-mt-20 overflow-clip" id="donate">
      {/* Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,0 100,0 100,100 45,100" fill="#ded6eb" />

        <polygon points="0,0 55,0 45,100 0,100" fill="#FFFFFF" />
      </svg>

      {/* Text Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="min-h-150 md:min-h-190 relative z-10 flex flex-col py-10 md:py-18 md:w-5xl px-7 mx-auto max-w-dvw">
            <p className="headline-font font-bold uppercase text-brand-amber text-xl xl:text-3xl">
              Donate to RLO
            </p>
            <div className="max-w-[10.5rem] border-b-7 xl:max-w-[11.5rem] xl:border-b-10 my-2 md:my-3 xl:mt-5 border-brand-orange" />
            <div className="flex gap-5">
              <h2 className="text-[22px] md:text-[2rem] xl:text-5xl max-w-[13rem] md:max-w-sm xl:max-w-2xl xl:leading-16 font-bold uppercase headline-font text-brand-black">
                Carry opera into the future.
              </h2>
            </div>
            <p className="mt-3 pl-5 md:pl-10 body-font max-w-sm sm:max-w-[18.5rem] text-base sm:text-xl leading-relaxed text-gray-700 font-semibold">
              A monthly gift brings world-class opera to everyone in our
              community, season after season.
            </p>

            <Link
              href={PAYPAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="
                        inline-flex items-center justify-center 
                        rounded-4xl bg-gray-100 w-40 
                        mt-5 ml-5
                        py-3
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
              className="pt-3 ml-5 max-w-sm text-balance leading-4.5"
            >
              <small className="text-gray-600 xl:text-base body-font">
                Select “Monthly” on the PayPal page. One-time gifts are welcome
                too.
              </small>
            </p>

            <p className="mt-auto text-xs body-font leading-snug text-gray-600 max-w-md sm:max-w-[17rem]">
              Riverside Lyric Opera is a{" "}
              <span className="whitespace-nowrap">501(c)(3)</span> tax-exempt
              nonprofit organization. Donations are tax-deductible to the extent
              allowed by law.
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="relative z-10 flex flex-col ml-3">
            <div className="flex ml-15 mt-28 items-center">
              <h3 className="headline-font uppercase font-bold text-xl max-w-[10rem]">
                Where your gift goes.
              </h3>
              <LucideHandHeart
                className="text-brand-amber size-13 md:size-25"
                aria-hidden="true"
              />
            </div>

            <ul className="flex flex-col gap-3 mt-2">
              {GIFT_IMPACTS.map((impact) => (
                <li
                  key={impact}
                  className="flex flex-row items-center gap-1.5 ml-10 mr-2 font-semibold text-gray-700 text-base leading-relaxed"
                >
                  <span
                    className="h-[4px] w-[14px] bg-brand-orange shrink-0"
                    aria-hidden="true"
                  ></span>
                  {impact}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute left-[45%] right-0 top-[60%] bottom-0 z-10 [clip-path:polygon(7.27%_0,100%_0,100%_100%,0_100%)]">
            <Image
              sizes="55vw"
              src="/images/rlo-calendar-img.jpeg"
              alt="A RLO performer."
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateBanner;
