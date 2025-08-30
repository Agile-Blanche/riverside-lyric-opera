import AboutUsBanner from "@/components/AboutUsBanner";
import styles from "./page.module.css";
import DonateBanner from "@/components/DonateBanner";
import LandingBanner from "@/components/LandingBanner";

export default function Home() {
  return (
    <>
    <LandingBanner/>
      <AboutUsBanner />
      <DonateBanner />
    </>
  
  );
}
