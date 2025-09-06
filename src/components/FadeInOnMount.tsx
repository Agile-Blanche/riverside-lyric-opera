"use client";
import { useEffect, useState } from "react";

export default function FadeInOnMount({ children }: { children: React.ReactNode; }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <div
            className={
                mounted
                    ? `opacity-0 animate-[fadeInUp_600ms_ease-out_forwards]`
                    : `opacity-0`
            }
        >
            {children}
        </div>
    );
}
