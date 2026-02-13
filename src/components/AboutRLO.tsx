import Image from "next/image";
import { PEOPLE, Person } from "@/data/people";
import Link from "next/link";

export default function AboutRLO() {

    // @ts-ignore
    const newTeam = PEOPLE.filter(p => p?.teamRole?.length).sort((a, b) => a?.teamIndex - b?.teamIndex);
    // @ts-ignore
    const board = PEOPLE.filter(p => p?.boardRole?.length).sort((a, b) => a?.boardIndex - b?.boardIndex);

    return (
        <section className="w-full scroll-mt-20" id="about">
            <div className="bg-brand-white px-6 sm:px-15 pt-10 sm:pt-14">
                <div className="p-8 sm:p-12 border-t-10 border-l-10 border-r-10 border-brand-orange">
                    <h1 className="pt-8 headline-font font-bold text-6xl sm:text-8xl tracking-wider text-center text-brand-black">
                        ABOUT RLO
                    </h1>

                    <p className="mt-12 body-font max-w-4xl mx-auto text-center text-base sm:text-lg leading-10 text-gray-800 font-bold">
                        Riverside Lyric Opera is a non-profit organization in Riverside, California, dedicated to celebrating and sharing classical and opera music.
                        We aim to preserve these rich traditions and make them accessible to everyone.
                        Through our performances and educational outreach, we enrich our community's cultural life and inspire a lasting appreciation for the arts.
                    </p>
                </div>
            </div>

            {/* Orange band with teams */}
            <div className="bg-brand-orange px-6 sm:px-15 pb-10 sm:pb-14">
                <div className="p-8 sm:p-12 border-b-10 border-l-10 border-r-10 border-brand-white">
                    <div className="mx-auto max-w-screen-xl lg:px-25 lg:py-1">
                        <SectionBlock title="NEW TEAM">
                            <TeamGrid people={newTeam} type="team" />
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
            <div className="mt-6 sm:mt-12">
                {children}
            </div>
        </div>
    );
}


function TeamGrid({ people, type }: { people: Person[], type: 'team' | 'board' }) {
    const hoverShadow = "shadow-lg transition duration-300 ease-out group-hover:shadow-xl group-hover:-translate-y-2";
    const isTeamGrid = type === 'team' ? true : false;

    const gridClasses = isTeamGrid
        ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-7"
        : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6";

    const imgContainer = isTeamGrid
        ? `relative aspect-[2/3] overflow-hidden ring-1 ring-black/10 ${hoverShadow}`
        : `relative aspect-square overflow-hidden ring-1 ring-black/10 ${hoverShadow}`;

    const imgSizes = isTeamGrid
        ? "(max-width:768px) 35vw, (max-width:1024px) 30vw, 150px"
        : "(max-width:768px) 45vw, (max-width:1024px) 30vw, 200px";

    return (
        <ul className={gridClasses}>
            {people.map((p) => (
                <li key={p.name} className="space-y-2 transition-transform duration-500 ease-out hover:scale-110 hover:brightness-125">
                    <div className={imgContainer}>
                        <Link href={`bio/${p.slug}`}>
                            <Image
                                src={p.src}
                                alt={p.name}
                                fill
                                className="object-cover grayscale object-top scale-105"
                                sizes={imgSizes}
                                priority={false}
                            />
                        </Link>
                    </div>
                    <div className="text-sm sm:text-md break-words leading-tight text-black body-font lg:w-1/2">
                        <div className="font-bold">
                            {p.name}
                        </div>
                        <div className="border-t border-black my-2 sm:my-3 w-5"></div>
                        {p.teamRole && isTeamGrid && (
                            <div className="text-xs sm:text-sm italic">
                                {p.teamRole}
                            </div>
                        )}
                        {p.boardRole && !isTeamGrid && (
                            <div className="text-xs sm:text-sm italic">
                                {p.boardRole}
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
