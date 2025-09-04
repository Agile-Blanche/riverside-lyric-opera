import styles from "./page.module.css";
import DonateBanner from "@/components/DonateBanner";
import LandingBanner from "@/components/LandingBanner";
import AboutRLO from "@/components/AboutRLO";

export default function Home() {
  return (
    <>
    <LandingBanner/>
      <AboutRLO />
      <DonateBanner />
    </>
  
  );
}
