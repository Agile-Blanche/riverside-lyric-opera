import Image from "next/image";
import { notFound } from "next/navigation";
import { getPersonBySlug, getPeople } from "@/data/people";
import FadeInOnMount from "@/components/FadeInOnMount";

/** Prebuild the static routes */
export function generateStaticParams() {
    return getPeople().map(p => ({ slug: p.slug }));
}

/** In Next 15+, params is a Promise — await it */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const person = getPersonBySlug(slug);
    if (!person) return { title: "Person not found" };
    return {
        title: `${person.name} | Riverside Lyric Opera`,
        description: person.bio?.[0]?.slice(0, 160) ?? `${person.name} bio`,
        openGraph: {
            title: `${person.name} | Riverside Lyric Opera`,
            images: person.src ? [{ url: person.src }] : [],
        },
    };
}

export default async function PersonPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const person = getPersonBySlug(slug);
    if (!person) return notFound();

    return (
        <main className="min-h-screen bg-brand-white">
            <FadeInOnMount>
                {/* Framed content block */}
                <section className="mx-auto max-w-[1300px] pt-8 sm:pt-10">
                    {/* Header: person name */}
                    <div className="px-6 sm:px-10 pt-8 sm:pt-12">
                        <h1 className="headline-font font-bold text-7xl sm:text-9xl leading-[0.95] tracking-wide text-black">
                            {person.name}
                        </h1>
                    </div>

                    {/* Body: image left / bio right */}
                    <div className=" pb-10 sm:pb-14 px-4 xs:px-8 xl:px-4">
                        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:items-start">
                            {/* Column 1 */}
                            <div className="m-auto sm:m-0">
                                {/* Portrait */}
                                <div className="relative w-75 sm:w-full aspect-[4/5] overflow-hidden ring-1 ring-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.25)] bg-white">
                                    <Image
                                        src={person.src}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* Artwork strip */}
                                <div className="relative mt-8 h-20 sm:h-35 w-75 sm:w-full overflow-hidden bg-neutral-200">
                                    <Image
                                        src="/images/banner.png"
                                        alt="Monet banner"
                                        priority={false}
                                        fill
                                    />
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="px-6 sm:px-0">
                                {/* Title */}
                                {person.teamRole && (
                                    <p className="body-font text-4xl tracking-wide text-brand-amber mb-8">
                                        {person.teamRole}
                                    </p>
                                )}
                                {!person.teamRole && person.boardRole && (
                                    <p className="text-4xl tracking-wide text-brand-amber mb-8">
                                        {person.boardRole}
                                    </p>
                                )}

                                {/* Bio paragraphs */}
                                <article className="body-font prose prose-neutral max-w-none text-sm leading-7 sm:leading-8">
                                    {person.bio.map((para, i) => (
                                        <p key={i} className="text-black/80 mb-2">
                                            {para}
                                        </p>
                                    ))}
                                </article>
                            </div>

                        </div>
                    </div>
                </section>
            </FadeInOnMount>
        </main>
    );
}
