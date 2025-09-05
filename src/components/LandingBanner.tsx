import Image from "next/image";

export default function LandingBanner() {
  return (
    <section className="full-bleed relative aspect-[16/9] sm:aspect-[21/9]">
      <Image
        src="/images/landing.png"
        alt="Landing Page Image"
        fill
        priority
        className="object-cover"
      />
    </section>
  );
}
