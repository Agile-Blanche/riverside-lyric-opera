"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useEffect, useRef } from "react";

let pendingHash: string | null = null;

type SmoothLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
  onClick?: ((e: MouseEvent<HTMLAnchorElement>) => void) | null;
};

const SCROLL_MS = 800; // slower than native smooth

function getEffectiveOffsetFromCSS(el: HTMLElement) {
  const smt = parseFloat(getComputedStyle(el).scrollMarginTop || "0");
  return Number.isFinite(smt) ? smt : 0;
}

function computeTargetTop(el: HTMLElement) {
  const offset = getEffectiveOffsetFromCSS(el);
  const absolute = Math.round(window.scrollY + el.getBoundingClientRect().top);
  return Math.max(absolute - Math.round(offset), 0);
}

function customScrollTo(to: number, duration = SCROLL_MS) {
  const start = window.scrollY;
  const change = to - start;
  const startTime = performance.now();

  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    window.scrollTo(0, Math.round(start + change * eased));

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Pin exactly to avoid sub-pixel drift
      window.scrollTo({ top: to, left: 0, behavior: "auto" });
    }
  }

  requestAnimationFrame(animate);
}

function tryScrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (el) {
    // Let layout (fonts/images) settle one frame
    requestAnimationFrame(() => customScrollTo(computeTargetTop(el)));
    return true;
  }
  return false;
}

export default function SmoothLink({
  href,
  label,
  active,
  className,
  onClick,
}: SmoothLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);

  // After route changes, if we carried a hash over, finish the smooth scroll
  useEffect(() => {
    if (lastPathRef.current !== pathname) {
      lastPathRef.current = pathname;

      if (pendingHash) {
        const okNow = tryScrollToHash(pendingHash);
        if (!okNow) {
          const t = setTimeout(() => tryScrollToHash(pendingHash!), 60);
          return () => clearTimeout(t);
        }
        pendingHash = null;
      }
    }
  }, [pathname]);

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Let caller do side effects (e.g., close mobile drawer) but
    // still proceed with our navigation/scroll logic.
    try {
      onClick?.(e);
    } catch {
      /* ignore user callback errors */
    }

    const base =
      typeof window !== "undefined" ? window.location.origin : "https://example.org";
    const url = new URL(href, base);

    // If external origin, let browser handle normally.
    if (url.origin !== base) return;

    const targetPath = url.pathname + url.search;
    const targetHash = url.hash;
    const samePath = targetPath === pathname;

    if (targetHash) {
      e.preventDefault();

      if (samePath) {
        const ok = tryScrollToHash(targetHash);
        if (!ok) {
          pendingHash = targetHash.slice(1);
          router.push(targetPath + targetHash);
        }
      } else {
        pendingHash = targetHash.slice(1);
        router.push(targetPath + targetHash);
      }
      return;
    }

    // No hash → SPA navigate
    e.preventDefault();
    router.push(targetPath);
  }

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={className}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
}
