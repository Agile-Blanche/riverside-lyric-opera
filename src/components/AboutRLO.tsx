import Image from "next/image";
import { PEOPLE, Person } from "@/data/people";

export default function AboutRLO() {

    const newTeam = PEOPLE.filter(p => p.groups.includes("team"));
    const board = PEOPLE.filter(p => p.groups.includes("board"));

    return (
        <section className="w-full">
            <div className="bg-[#ecf0ee] px-6 sm:px-15 pt-10 sm:pt-14">
                <div className="p-8 sm:p-12 border-t-5 border-l-5 border-r-5 border-[#f2683a]">
                    <h1 className="pt-13 font-accent font-bold text-7xl tracking-wider text-center text-[#1f2937]">
                        ABOUT RLO
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-center text-base sm:text-lg leading-relaxed text-gray-800">
                        Riverside Lyric Opera is dedicated to making world-class opera accessible to everyone in our community.
                        Whether through grand productions, intimate recitals, or innovative on-demand streaming, Riverside Lyric Opera brings timeless works and powerful new voices to audiences of today and tomorrow.
                    </p>
                </div>
            </div>

            {/* Orange band with teams */}
            <div className="bg-[#f2683a] px-6 sm:px-15 pb-10 sm:pb-14">
                <div className="p-8 sm:p-12 border-b-5 border-l-5 border-r-5 border-[#ecf0ee]">
                    <div className="mx-auto max-w-screen-xl px-25 py-12 sm:py-16">
                        <SectionBlock title="NEW TEAM">
                            <TeamGrid people={newTeam} />
                        </SectionBlock>

                        <div className="mt-10 sm:mt-14">
                            <SectionBlock title="BOARD">
                                <BoardGrid people={board} />
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
            <div className="flex items-center gap-4">
                <h2 className="font-accent font-light text-4xl tracking-normal uppercase text-white">
                    Our&nbsp;
                    <span className="text-[#ded7ea]">{title}</span>
                </h2>
                <div className="h-1 flex-1 bg-[#ecf0ee] rounded-md" />
            </div>

            {/* People Grid */}
            <div className="mt-6 sm:mt-8">
                {children}
            </div>
        </div>
    );
}

function TeamGrid({ people }: { people: Person[] }) {
    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-7">
            {/* @ts-ignore */}
            {people.sort((a, b) => a?.teamIndex - b?.teamIndex).map((p) => (
                <li key={p.name} className="space-y-2">
                    <div className="relative aspect-[2/3] overflow-hidden ring-1 ring-black/10">
                        <Image
                            src={p.src}
                            alt={p.name}
                            fill
                            className="object-cover grayscale"
                            sizes="(max-width:768px) 35vw, (max-width:1024px) 30vw, 150px"
                            priority={false}
                        />
                    </div>
                    <div className="text-md break-words leading-tight text-black w-1/2">
                        <div className="font-semibold">
                            {p.name}
                        </div>
                        <div className="border-t border-black my-3 w-5"></div>
                        {p.role && (
                            <div className="text-sm italic">
                                {p.role}
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}

function BoardGrid({ people }: { people: Person[] }) {
    return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6">
            {/* @ts-ignore */}
            {people.sort((a, b) => a?.boardIndex - b?.boardIndex).map((p) => (
                <li key={p.name} className="space-y-2">
                    <div className="relative aspect-square overflow-hidden ring-1 ring-black/10">
                        <Image
                            src={p.src}
                            alt={p.name}
                            fill
                            className="object-cover grayscale"
                            sizes="(max-width:768px) 45vw, (max-width:1024px) 30vw, 200px"
                            priority={false}
                        />
                    </div>
                    <div className="text-[0.85rem] leading-tight text-black">
                        <div className="border-t border-black my-3 w-5"></div>
                        <div className="font-semibold">
                            {p.name}
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
