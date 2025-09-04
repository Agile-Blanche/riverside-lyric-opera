import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function LandingBanner() {
  return (
 <section className="relativel max-w-[1512px] max-h-[600px]">
  {/* Background image */}
  <Image
    src="/assets/images/landing.png"
    alt="Landing Page Image"
    width={1600}
    height={800}
    priority
    className="w-full h-full object-cover"
  />
</section>

  );
}
