export type Person = {
    name: string;
    teamRole?: string;
    boardRole?: string;
    src: string;
    slug: string;
    teamIndex?: number;
    boardIndex?: number;
    bio: string[];
};

export const placeholderBio = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum neque massa, ac congue libero ullamcorper in. Phasellus iaculis turpis eu ante imperdiet, sit amet viverra purus pellentesque. Nunc orci mi, placerat ac tristique nec, sollicitudin et turpis. Curabitur sit amet magna ut nunc luctus pellentesque. Quisque fringilla tellus sit amet finibus sagittis. Pellentesque felis odio, blandit quis auctor et, egestas at magna. Nulla ultrices libero sapien.",
    "Maecenas non dolor maximus, malesuada nunc sit amet, pulvinar lorem. Morbi sit amet eleifend turpis, eget semper dui. Praesent ac lacus ut libero vulputate commodo. Integer sed arcu convallis, auctor ante in, placerat quam. Nunc efficitur in nisl non accumsan. Donec bibendum erat ut convallis rutrum. Pellentesque sit amet leo massa. Aenean malesuada sem quis ultrices sodales. In hac habitasse platea dictumst. Sed at sollicitudin felis, eu ultrices enim. Sed sed placerat erat. Aenean finibus nisi nec sagittis malesuada. Nam blandit quis tellus vel aliquet.",
    "Curabitur blandit posuere leo et luctus. Mauris vestibulum pharetra rhoncus. Donec ullamcorper id nisi non faucibus. Curabitur eu nulla aliquet, malesuada elit a, vestibulum elit. Phasellus lobortis convallis odio. Curabitur blandit auctor arcu et dapibus. Nam iaculis euismod libero eu condimentum. Mauris commodo commodo maximus. Donec vulputate vitae turpis vel pretium. Nunc tempus quam vitae elit faucibus, quis dictum eros egestas. Vivamus cursus dui vitae dolor imperdiet, in varius enim finibus. Suspendisse potenti.",
    "Nulla laoreet pretium tortor tempor ultricies. Suspendisse ultrices est eget ante condimentum, non iaculis neque iaculis. Pellentesque malesuada ullamcorper sem sed viverra. Pellentesque varius sollicitudin magna. Phasellus lacinia luctus lorem non bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet lectus ac lectus mattis vulputate vel vitae massa. Proin eget dui auctor, rhoncus sem sit amet, pretium ante. Sed dictum pharetra ornare. Nullam sed egestas quam, vitae faucibus odio. Curabitur ullamcorper urna a venenatis imperdiet. Duis cursus vitae urna non aliquet. Vivamus nec nisl eu ipsum molestie pulvinar at ac lectus.",
    "Mauris mattis eleifend dui, quis suscipit massa posuere quis. Suspendisse potenti. Suspendisse placerat interdum purus at rhoncus. Aliquam ut nisl sed erat pulvinar faucibus sit amet porta neque. Nam bibendum dapibus felis id tincidunt. Mauris sed risus metus. Donec hendrerit iaculis ligula tincidunt sollicitudin. Morbi dolor orci, dictum tempor mi vitae, bibendum imperdiet diam. Vivamus consequat, purus eu egestas pretium, mauris tellus tristique justo, at pulvinar nulla quam ac nunc. Etiam lobortis, mi et rhoncus interdum, urna nunc ultrices velit, ac hendrerit ipsum libero sed lorem. Quisque venenatis faucibus venenatis."
]

export const PEOPLE: Person[] = [
    {
        name: "Anthony León",
        teamRole: "President & Artistic Director",
        boardRole: "President & Chairman",   // 👈 in both
        src: "/images/team/anthony.jpg",
        slug: "anthony-leon",
        teamIndex: 1,
        boardIndex: 3,
        bio: [
            `Anthony León is a tenor with a career that has garnered rapid international acclaim. His voice
has been lauded by Stage and Cinema as possessing “beauty, freedom of tone, and outstanding
breath control.” Anthony has received some of the most prestigious honors in the opera industry
including the 2025 LA Opera Eva and Marc Stern Award; being a finalist for the Rising Star
award at the 2024 International Opera Awards; a winner of the 2024 Richard Tucker Career
Grant; a winner of the 2023 Metropolitan Opera Laffont Competition; and winner of the First
Prize at Operalia, 2022––the most important opera competition in the world––where he also won
the Don Plácido Domingo Ferrer Zarzuela Prize. Additionally, he has been awarded a Career
Development Grant from the Sullivan Foundation. Other accolades include being featured in
Opera News magazine and being named “Best up-and-comer” in the Inland Empire Magazine’s
“Best of the Best 2019” list, among other important awards.`,
            `Anthony has made many important debuts in stages and theaters around the world. Most recent
engagements in the 2025 season include singing Ferrando in Mozart’s Così fan tutte at LA
Opera, Nadir in Bizet’s Les pêcheurs de perles at the Staatsoper Unter den Linden in Berlin,
Lysander in Britten’s A Midsummer Night’ s Dream at Opera Theatre of St. Louis, Don Ottavio in
Mozart’s Don Giovanni with Teatro dell’Opera di Roma at the Caracalla Festival, and a concert
of Mozart’s Mass in C Minor at the Salzburg Festival.`,
            `He has performed on prestigious stages such as The Metropolitan Opera, Los Angeles Opera,
The Hollywood Bowl, the Mozarteum in Salzburg, Santa Fe Opera, Carnegie Hall, Théâtre des
Champs-Elysées, Victoria Hall, and others. Other recent notable performances include creating
the role of The Consumer in the world premiere of Ellen Reid’s opera The Shell Trial at Dutch
National Opera in Amsterdam, Netherlands, and performing at The Santa Fe Symphony,
Cologne Opera in Germany, the Aix-en-Provence Festival in France, the Ravinia Festival with
the Chicago Symphony, and with the LA Philharmonic at the Hollywood Bowl under the
direction of Gustavo Dudamel.`,
            `Anthony’s future engagements in the 2025/2026 season include singing at Teatro Regio in Turin,
Italy, the Chicago Lyric Opera, a return to LA Opera,Walt Disney Concert Hall with Gustavo
Dudamel, the Glyndebourne Festival, and more.`,
            `Anthony holds a Bachelor of Music from La Sierra University and a Master of Music degree
concentrating in V ocal Performance from the New England Conservatory of Music in Boston,
Massachusetts, where he was awarded the Wendy Shattuck ‘75 Presidential Scholarship for
V ocal Studies studying under the tutelage of Bradley Williams.`
        ]
    },
    {
        name: "Louis Lohrasbi",
        teamRole: "Music Director",
        src: "/images/team/louis.jpeg",
        slug: "louis-lohrasbi",
        teamIndex: 2,
        bio: placeholderBio
    },
    {
        name: "Andrew León",
        teamRole: "CEO",
        boardRole: "Secretary",   // 👈 in both
        src: "/images/team/andrew.jpeg",
        slug: "andrew-leon",
        teamIndex: 3,
        boardIndex: 4,
        bio: placeholderBio
    },
    {
        name: "Andrés Maldonado",
        teamRole: "CFO",
        boardRole: "Treasurer",   // 👈 in both
        src: "/images/team/andres.JPG",
        slug: "andres-maldonado",
        teamIndex: 4,
        boardIndex: 5,
        bio: placeholderBio
    },
    {
        name: "Maia Aramburú",
        teamRole: "Artistic Advisor",
        src: "/images/team/maia.jpg",
        slug: "maia-aramburu",
        teamIndex: 5,
        bio: [`Maia Aramburú's voice has been lauded by Opera Wire as having a “sweet and sparkling
timbre… with rich and expansive resonance”
. Born in 2000 in her beloved Lima, Peru, Maia
is a celebrated image in her home country, described as “Peru’s young opera promise” and
is considered “one of the seven new Peruvian voices of the new generation of artists”
(Cosas Magazine). With a commanding stage presence, she has performed sold-out
concerts across Peru for three consecutive years, being invited by the Sociedad Filarmonica
de Lima to perform a solo concert in their 2024 season, as well as performing in the Ravinia
Festival with the Ravinia Steans Institute this past summer.`,
            `Her roles include Mimì in La bohème, Rosalba in Florencia en el Amazonas, Anita in La
Navarraise, Susanna in Le nozze di Figaro, L’Ensolleiad in Chèrubin, Fiordiligi in Così fan
tutte, Minskwoman in Flight, Mrs. Hayes in Susannah, Lauretta in Gianni Schicchi, Dorothée
in Cendrillon, Papagena in Die Zauberflöte, among others. These debuted at major festivals
and companies such as the Yale Opera, Janiec Opera Company at the Brevard Music
Center, USC Opera Theatre, the Berlin Opera Academy, the LAH-SOW at the Academy of
Vocal Arts, the Vienna Summer Music Festival, the Miami Music Festival, and at the
University of Michigan Opera Theatre.`,
            `A celebrated award winner, Maia won the Martha Mifflin Award for “Best Peruvian Voice” at
the Concurso Latinoamericano de Canto Lírico - Radio Filarmonía, a competition run by
Ernesto Palacio. She has also been recognized as one of the MPower Artists by the Sphinx
Organization and was a finalist in the Duncan Williams Voice Competition with the New York
City Opera and MSM. In addition, she earned Third Place in the George Shirley Voice
Competition and First Place in the Medici International Music Competition.`,
            `Maia is a member of EXIGENCE, the Vocal Ensemble of the Sphinx Organization, with
whom she has performed at the prestigious John F. Kennedy Center for the Performing Arts
in Washington D.C., Hill Auditorium in Ann Arbor, Michigan, North Carolina ACDA
Residency, ACDA Southern Region Conference, and more.`,
            `In addition to her performing career, Maia is deeply committed to arts administration and
community engagement. She serves as the Executive Director of Aramburu Producciones in
Lima, Peru, and is the founder of ALMA TAKI, a nonprofit organization dedicated to
fostering music education and empowering Latino youth.`,
            `The Peruvian soprano currently studies her Master’s (MMA) in Opera at the prestigious Yale
School of Music with renowned voice teacher Gerald Martin Moore. She earned her
Bachelor of Music (BM) in Vocal Performance with a minor in Performing Arts Management
and Entrepreneurship (PAME) from the University of Michigan under the mentorship of
emeritus tenor George I. Shirley. She then obtained her Master’s (MM) in Vocal Arts and
Opera from the USC Thornton School of Music, under the tutelage of Elizabeth Hynes.`
        ]
    },
    {
        name: "Stan Morrison",
        boardRole: "Board Member",
        src: "/images/board/stan.jpg",
        slug: "stan-morrison",
        boardIndex: 1,
        bio: placeholderBio
    },
    {
        name: "Daniel E. Olson",
        boardRole: "Board Member",
        src: "/images/board/daniel.jpg",
        slug: "daniel-olson",
        boardIndex: 2,
        bio: placeholderBio
    },
];

// helpers (handy in routes/components)
export function getPeople() {
    return PEOPLE;
}
export function getPersonBySlug(slug: string) {
    return PEOPLE.find(p => p.slug === slug);
}