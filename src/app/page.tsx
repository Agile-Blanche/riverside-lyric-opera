import styles from "./page.module.css";
import DonateBanner from "@/components/DonateBanner";
import AboutRLO from "@/components/AboutRLO";

export default function Home() {
  return (
    <>
      <AboutRLO />
      <DonateBanner />
    </>
  );
}
