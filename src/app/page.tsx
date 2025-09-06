import styles from "./page.module.css";
import DonateBanner from "@/components/DonateBanner";
import LandingBanner from "@/components/LandingBanner";
import AboutRLO from "@/components/AboutRLO";
import FadeInOnMount from "@/components/FadeInOnMount";

export default function Home() {
  return (
    <FadeInOnMount>
      <LandingBanner />
      <AboutRLO />
      <DonateBanner />
    </FadeInOnMount>

  );
}
