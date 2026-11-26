import Image from "next/image";
import { notFound } from "next/navigation";
import { getPersonBySlug, getPeople } from "@/data/people";
import FadeInOnMount from "@/components/FadeInOnMount";
import FadeOutChevron from "@/components/FadeOutChevron";

/** Prebuild the static routes */
export function generateStaticParams() {
  return getPeople().map((p) => ({ slug: p.slug }));
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
    <main id="top" className="min-h-screen bg-brand-white scroll-mt-28">
      <FadeInOnMount>
        {/* Framed content block */}
        <section className="mx-auto max-w-[1300px] pt-8 sm:pt-10 pb-8">
          {/* Header: person name */}
          <div className="text-start px-4 xs:px-8 pt-8 sm:pt-12">
            <h1 className="headline-font font-bold text-[2.75rem] xs:text-6xl sm:text-8xl md:text-[7.5rem] lg:text-9xl leading-[0.95] tracking-wide text-black">
              {person.name}
            </h1>
          </div>

          {/* Body: image left / bio right */}
          <div className="pb-10 px-4 xs:px-8 border-brand-amber border-b-3">
            <div className="mt-6 sm:mt-7 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 sm:items-start">
              {/* Column 1 */}
              <div id="bio-portrait">
                {/* Portrait */}
                <div className="relative w-full aspect-[4/5] overflow-hidden ring-1 ring-black/10 shadow-[0_20px_40px_rgba(0,0,0,0.25)] bg-white">
                  <Image
                    src={person.src}
                    alt={person.name}
                    fill
                    sizes="(min-width: 1300px) 640px, (min-width: 640px) 50vw, 300px"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Artwork strip */}
                <div className="relative mt-4 xs:mt-8 h-20 sm:h-35 w-full overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/banner.png"
                    alt="Monet banner"
                    priority={false}
                    fill
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div id="bio-content">
                {/* Title */}
                {person.teamRole && (
                  <p className="body-font text-3xl xs:text-4xl lg:text-[2.7rem] tracking-wide xs:leading-12 sm:leading-13 lg:leading-14 text-brand-amber mb-8 sm:-mt-[10px]">
                    {person.teamRole}
                  </p>
                )}
                {!person.teamRole && person.boardRole && (
                  <p className="body-font text-3xl xs:text-4xl lg:text-[2.7rem] tracking-wide xs:leading-12 sm:leading-13 lg:leading-14 text-brand-amber mb-8 sm:-mt-[10px]">
                    {person.boardRole}
                  </p>
                )}

                {/* Bio paragraphs */}
                <article className="body-font prose prose-neutral max-w-none text-base xs:text-lg sm:text-base leading-7 xs:leading-8">
                  {person.bio.map((para, i) => (
                    <p key={i} className="text-black/80 mb-4">
                      {para}
                    </p>
                  ))}
                </article>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-8 px-4 xs:px-8 text-brand-amber sticky bottom-8 pointer-events-none">
            <FadeOutChevron targetId="bio-portrait" />
          </div>
        </section>
      </FadeInOnMount>
    </main>
  );
}
