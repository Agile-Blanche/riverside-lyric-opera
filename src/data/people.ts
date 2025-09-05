export type Person = {
    name: string;
    teamRole?: string;
    boardRole?: string;
    src: string;
    slug: string;
    teamIndex?: number;
    boardIndex?: number;
};

export const PEOPLE: Person[] = [
    {
        name: "Anthony León",
        teamRole: "President & Artistic Director",
        boardRole: "President & Chairman",   // 👈 in both
        src: "/images/team/anthony.png",
        slug: "anthony-leon",
        teamIndex: 1,
        boardIndex: 3
    },
    {
        name: "Louis Lohrasbi",
        teamRole: "Music Director",
        src: "/images/team/louis.png",
        slug: "louis-lohrasbi",
        teamIndex: 2
    },
    {
        name: "Andrew León",
        teamRole: "CEO",
        boardRole: "Secretary",   // 👈 in both
        src: "/images/team/andrew.png",
        slug: "andrew-leon",
        teamIndex: 3,
        boardIndex: 4
    },
    {
        name: "Andrés Maldonado",
        teamRole: "CFO",
        boardRole: "Treasurer",   // 👈 in both
        src: "/images/team/andres.png",
        slug: "andres-maldonado",
        teamIndex: 4,
        boardIndex: 5
    },
    {
        name: "Maia Aramburú",
        teamRole: "Artistic Advisor",
        src: "/images/team/maia.png",
        slug: "maia-aramburu",
        teamIndex: 5
    },
    {
        name: "Stan Morrison",
        boardRole: "Board Member",
        src: "/images/board/stan.png",
        slug: "stan-morrison",
        boardIndex: 1
    },
    {
        name: "Daniel E. Olson",
        boardRole: "Board Member",
        src: "/images/board/daniel.png",
        slug: "daniel-olson",
        boardIndex: 2
    },
];
