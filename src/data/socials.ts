export type Social = {
    name: string;
    href: string;
    icon: string; // path to svg in /public/icons
};

export const SOCIALS: Social[] = [
    {
        name: "Facebook",
        href: "https://facebook.com/yourpage",
        icon: "/icons/facebook.svg",
    },
    {
        name: "X",
        href: "https://x.com/yourhandle",
        icon: "/icons/x.svg",
    },
    {
        name: "Instagram",
        href: "https://instagram.com/yourhandle",
        icon: "/icons/instagram.svg",
    },
    {
        name: "YouTube",
        href: "https://youtube.com/yourchannel",
        icon: "/icons/youtube.svg",
    },
    //   {
    //     name: "LinkedIn",
    //     href: "https://linkedin.com/in/yourpage",
    //     icon: "/icons/linkedin.svg",
    //   },
];
