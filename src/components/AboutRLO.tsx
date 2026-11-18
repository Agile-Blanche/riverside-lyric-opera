import Image from "next/image";
import { PEOPLE, Person } from "@/data/people";
import Link from "next/link";
import {
  LucideIcon,
  LucideMicVocal,
  BookOpen,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  headline: string;
  blurb: string;
  href?: string;
};

const PILLARS: Pillar[] = [
  {
    icon: LucideMicVocal,
    headline: "perform",
    blurb:
      "World-class opera, concerts, and recitals that showcase great voices and bring the art form to everyone.",
    href: "/calendar",
  },
  {
    icon: BookOpen,
    headline: "educate",
    blurb:
      "Lectures, student outreach, and resources that open the door to opera’s beauty, power, and history.",
  },
  {
    icon: HeartHandshake,
    headline: "gather",
    blurb:
      "Galas, fundraisers, and community events, created with local arts partners, that bring Riverside together.",
  },
];

export default function AboutRLO() {
  const team = PEOPLE.filter((p) => p?.teamRole?.length).sort(
    (a, b) => (a.teamIndex ?? 0) - (b.teamIndex ?? 0),
  );

  const board = PEOPLE.filter((p) => p?.boardRole?.length).sort(
    (a, b) => (a?.boardIndex ?? 0) - (b?.boardIndex ?? 0),
  );

  return (
    <section className="w-full scroll-mt-20" id="about">
      <div className="bg-brand-white px-6 sm:px-15 pt-10 sm:pt-20 lg:pt-40">
        <div className="p-8 md:px-12 lg:px-24 border-t-10 border-l-10 border-r-10 border-brand-orange">
          <p className="md:pt-12 headline-font font-bold uppercase text-brand-amber text-xl xl:text-3xl">
            ABOUT RLO
          </p>
          <div className="max-w-[7.5rem] md:max-w-[9rem] border-b-7 xl:max-w-[11.5rem] xl:border-b-10 my-2 md:my-3 xl:mt-5 border-brand-orange" />
          <h2 className="text-[22px] lg:text-[1.8rem] xl:text-5xl max-w-xs lg:max-w-sm  xl:max-w-2xl  xl:leading-16 font-bold uppercase headline-font">
            Change hearts. <br /> Change the world.
          </h2>
          <p className="mt-3  pb-5 md:pb-0 pl-5 md:pl-10 body-font max-w-md md:max-w-2xl text-base sm:text-xl leading-relaxed text-gray-700 font-semibold">
            Riverside Lyric Opera is a nonprofit organization in Riverside,
            California, dedicated to celebrating and sharing classical and opera
            music. We aim to preserve these rich traditions and make
            them accessible to everyone.
          </p>

          <ul className="pl-5 md:pl-10 pt-4 md:pt-6 pb-12 grid grid-cols-1 lg:grid-cols-3 max-w-7xl gap-10 lg:gap-17">
            {PILLARS.map(({ icon: Icon, headline, blurb, href }) => {
              return (
                <li key={headline}>
                  <Icon
                    // size={40}
                    aria-hidden="true"
                    className="text-brand-amber size-7 lg:size-10"
                  />
                  <h3 className="text-xl lg:text-[1.8rem] font-bold uppercase headline-font py-3">
                    {headline}
                  </h3>
                  <p className="max-w-xs md:max-w-md text-base md:text-lg text-gray-800 body-font">
                    {blurb}
                  </p>
                  {href && (
                    <Link
                      href={href}
                      className="pt-3 text-sm md:text-base text-brand-amber group ml-0.5 font-semibold lg:whitespace-nowrap inline-block"
                    >
                      See upcoming
                      {" "}
                      <span className="whitespace-nowrap">
                        performances{" "}
                        <ArrowRight
                          size={18}
                          className="transition duration-400 group-hover:translate-x-1 inline-block"
                        />
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Orange band with teams */}
      <div className="bg-brand-orange px-6 sm:px-15 pb-10 sm:pb-14">
        <div className="p-8 sm:p-12 border-b-10 border-l-10 border-r-10 border-brand-white">
          <div className="mx-auto max-w-screen-xl lg:px-25 lg:py-1">
            <SectionBlock title="TEAM">
              <TeamGrid people={team} type="team" />
            </SectionBlock>

            <div className="mt-10 sm:mt-14">
              <SectionBlock title="BOARD">
                <TeamGrid people={board} type="board" />
              </SectionBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {/* Title with right-side rule */}
      <div className="flex items-center gap-10">
        <h2 className="headline-font font-light text-4xl sm:text-6xl tracking-wider uppercase text-black">
          Our&nbsp;
          <span className="text-brand-lavender">{title}</span>
        </h2>
        <div className="h-1 flex-1 bg-brand-white rounded-md" />
      </div>

      {/* People Grid */}
      <div className="mt-6 sm:mt-12">{children}</div>
    </div>
  );
}

function TeamGrid({
  people,
  type,
}: {
  people: Person[];
  type: "team" | "board";
}) {
  const hoverShadow =
    "shadow-lg transition duration-300 ease-out group-hover:shadow-xl group-hover:-translate-y-2";
  const isTeamGrid = type === "team" ? true : false;

  const gridClasses = isTeamGrid
    ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-7"
    : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6";

  const imgContainer = isTeamGrid
    ? `relative aspect-[2/3] overflow-hidden ring-1 ring-black/10 ${hoverShadow}`
    : `relative aspect-square overflow-hidden ring-1 ring-black/10 ${hoverShadow}`;

  const imgSize =
    "(max-width:640px) 75vw, (max-width:768px) 50vw, 30vw"

  return (
    <ul className={gridClasses}>
      {people.map((p) => (
        <li
          key={p.name}
          className="space-y-2 transition-transform duration-500 ease-out hover:scale-110 hover:brightness-125"
        >
          <div className={imgContainer}>
            <Link href={`bio/${p.slug}`}>
              <Image
                src={p.src}
                alt={p.name}
                fill
                className="object-cover grayscale object-top scale-105"
                sizes={imgSize}
                priority={false}
              />
            </Link>
          </div>
          <div className="text-sm sm:text-md break-words leading-tight text-black body-font lg:w-1/2">
            <div className="font-bold">{p.name}</div>
            <div className="border-t border-black my-2 sm:my-3 w-5"></div>
            {p.teamRole && isTeamGrid && (
              <div className="text-xs sm:text-sm italic">{p.teamRole}</div>
            )}
            {p.boardRole && !isTeamGrid && (
              <div className="text-xs sm:text-sm italic">{p.boardRole}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
