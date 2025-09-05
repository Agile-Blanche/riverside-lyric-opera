export type Social = {
    name: string;
    href: string;
    icon: string; // path to svg in /public/icons
};

export const SOCIALS: Social[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/Riversidelyricopera/",
        icon: "/icons/facebook.svg",
    },
    {
        name: "X",
        href: "https://x.com/riverlyricopera",
        icon: "/icons/x.svg",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/riversidelyricopera/",
        icon: "/icons/instagram.svg",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@riversidelyricopera5673",
        icon: "/icons/youtube.svg",
    },
    //   {
    //     name: "LinkedIn",
    //     href: "https://www.linkedin.com/company/riverside-lyric-opera/",
    //     icon: "/icons/linkedin.svg",
    //   },
];
