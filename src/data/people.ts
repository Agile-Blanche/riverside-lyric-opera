export type Person = {
    name: string;
    role?: string;
    groups: ("team" | "board")[]; // 👈 array of group tags
    src: string;
    slug: string;
    teamIndex?: number;
    boardIndex?: number;
};

export const PEOPLE: Person[] = [
    {
        name: "Anthony León",
        role: "President & Artistic Director",
        groups: ["team", "board"],   // 👈 in both
        src: "/images/team/anthony.png",
        slug: "anthony-leon",
        teamIndex: 1,
        boardIndex: 3
    },
    {
        name: "Louis Lohrasbi",
        role: "Music Director",
        groups: ["team"],
        src: "/images/team/louis.png",
        slug: "louis-lohrasbi",
        teamIndex: 2
    },
    {
        name: "Andrew León",
        role: "CEO",
        groups: ["team", "board"],   // 👈 in both
        src: "/images/team/andrew.png",
        slug: "andrew-leon",
        teamIndex: 3,
        boardIndex: 4
    },
    {
        name: "Andrés Maldonado",
        role: "CFO",
        groups: ["team", "board"],   // 👈 in both
        src: "/images/team/andres.png",
        slug: "andres-maldonado",
        teamIndex: 4,
        boardIndex: 5
    },
    {
        name: "Maia Aramburú",
        role: "Artistic Advisor",
        groups: ["team"],
        src: "/images/team/maia.png",
        slug: "maia-aramburu",
        teamIndex: 5
    },
    {
        name: "Stan Morrison",
        groups: ["board"],
        src: "/images/board/stan.png",
        slug: "stan-morrison",
        boardIndex: 1
    },
    {
        name: "Daniel E. Olson",
        groups: ["board"],
        src: "/images/board/daniel.png",
        slug: "daniel-olson",
        boardIndex: 2
    },
];
