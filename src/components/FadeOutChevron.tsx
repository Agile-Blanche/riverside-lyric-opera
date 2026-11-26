"use client";
import { useEffect, useState } from "react";
import { LucideSquareChevronUp } from "lucide-react";

export default function FadeOutChevron({ targetId }: { targetId: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.boundingClientRect.bottom < 0);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [targetId]);
  return (
    <a
      aria-label="Back to top"
      href="#top"
      className={`motion-safe:transition-[opacity,visibility] motion-safe:duration-300 pointer-events-auto ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <LucideSquareChevronUp className="fill-brand-white" size={45} strokeWidth={1.5} />
    </a>
  );
}
