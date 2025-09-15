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
has been praised by Stage and Cinema for its “beauty, freedom of tone, and outstanding breath
control.
” Anthony has received some of the most prestigious honors in the opera industry,
including the 2025 LA Opera Eva and Marc Stern Award; being named a finalist for the Rising
Star Award at the 2024 International Opera Awards; the 2024 Richard Tucker Career Grant; the
2023 Metropolitan Opera Laffont Competition; and First Prize at Operalia 2022 — the most
important opera competition in the world — where he also won the Don Plácido Domingo Ferrer
Zarzuela Prize. He has additionally been awarded a Career Development Grant from the
Sullivan Foundation. Other recognitions include being featured in Opera News magazine and
being named “Best Up-and-Comer” in Inland Empire Magazine’s “Best of the Best 2019” list.`,
            `Anthony has made major debuts on leading stages around the world. In 2025, he sings
Ferrando in Mozart’s Così fan tutte at LA Opera, Nadir in Bizet’s Les pêcheurs de perles at the
Staatsoper Unter den Linden in Berlin, Lysander in Britten’s A Midsummer Night’s Dream at
Opera Theatre of St. Louis, Don Ottavio in Mozart’s Don Giovanni with Teatro dell’Opera di
Roma at the Caracalla Festival, and appears in concert with Mozart’s Mass in C Minor at the
Salzburg Festival.`,
            `He has performed on prestigious stages including The Metropolitan Opera, Los Angeles Opera,
the Hollywood Bowl, Salzburg’s Mozarteum, Santa Fe Opera, Carnegie Hall, Théâtre des
Champs-Élysées, Victoria Hall, and many others. Notable recent performances include creating
the role of The Consumer in the world premiere of Ellen Reid’s The Shell Trial at Dutch National
Opera in Amsterdam, and performances with The Santa Fe Symphony, Cologne Opera in
Germany, the Aix-en-Provence Festival in France, the Ravinia Festival with the Chicago
Symphony, and with the LA Philharmonic at the Hollywood Bowl under the direction of Gustavo
Dudamel.`,
            `Looking ahead to the 2025/26 season, Anthony will appear at Teatro Regio in Turin, Lyric Opera
of Chicago, return to LA Opera and Walt Disney Concert Hall with Gustavo Dudamel, the
Glyndebourne Festival, and more.`,
            `Anthony holds a Bachelor of Music degree from La Sierra University and a Master of Music
degree in Vocal Performance from the New England Conservatory of Music in Boston, where he
was awarded the Wendy Shattuck ’75 Presidential Scholarship for Vocal Studies, studying
under the tutelage of Bradley Williams.`,
            `In addition to his international performing career, Anthony is proud to serve his home community
as the new President and Artistic Director of Riverside Lyric Opera, where he brings his
vision, artistry, and leadership to further enrich the cultural life of the Inland Empire.`
        ]
    },
    {
        name: "Louis Lohraseb",
        teamRole: "Music Director",
        src: "/images/team/louis.jpeg",
        slug: "louis-lohraseb",
        teamIndex: 2,
        bio: [
            `Since making his professional debut at the Teatro dell’Opera di Roma in 2019, Louis
Lohraseb has quickly earned a reputation as one of the most exciting young conductors
on the international stage. His work has already brought him to leading houses including
the Semperoper Dresden, Los Angeles Opera, Staatsoper Hamburg, and Komische
Oper Berlin.`,
            `Highlights of the 2024–25 season include returns to Sarasota Opera (Le Nozze di
Figaro) and Indiana University Opera Theatre (Carmen), as well as debuts with Rice
University (Alcina) and the Baton Rouge Symphony Orchestra. Following his acclaimed
Los Angeles Opera debut conducting Tosca, Mr. Lohraseb was immediately invited back
for Il Barbiere di Siviglia and La Traviata. Other recent credits include Le Nozze di
Figaro at Staatsoper Hamburg, Carmen at Semperoper Dresden, La Traviata at
Komische Oper Berlin, and appearances with San Francisco Opera, Atlanta Opera,
Oakland Symphony, Peoria Symphony, and the Wintergreen Music Festival.`,
            `An accomplished pianist as well as conductor, he is a frequent recital and chamber
music collaborator with artists including Erica Petrocelli, Liv Redpath, Charles
Castronovo, Taylor Raven, Eric Silberger, Madalyn Parnas, and Cicely Parnas.`,
            `Mr. Lohraseb’s artistry has been recognized with numerous honors, including the Solti
Foundation U.S. Career Assistance Award (2022) and the Eva and Marc Stein Artist
Award (2024) from Los Angeles Opera. A former member of the Domingo-Colburn-Stein
Young Artist Program at Los Angeles Opera, he has worked closely with music director
James Conlon and conducted alongside leading figures such as Lorin Maazel, John
Adams, and Krzysztof Penderecki.`,
            `Born to Iranian and Italian parents, Mr. Lohraseb graduated summa cum laude from
SUNY Geneseo as an Edgar Fellow, studied conducting at the Yale School of Music,
and pursued further postgraduate training at Indiana University Jacobs School of Music.
His career reflects both extraordinary talent and a deep commitment to bringing the
power of music to audiences around the world.`
        ]
    },
    {
        name: "Andrew León",
        teamRole: "CEO",
        boardRole: "Secretary",   // 👈 in both
        src: "/images/team/andrew.jpeg",
        slug: "andrew-leon",
        teamIndex: 3,
        boardIndex: 4,
        bio: [
            `Andrew A. León serves as CEO and Secretary of Riverside Lyric Opera, bringing a dynamic blend of creative leadership and strategic insight to the organization. With a strong background in healthcare management and nonprofit leadership, Andrew leads with a people first mindset, fostering collaboration across artistic, administrative, and community focused teams.`,
            `He holds an MBA in Healthcare Management from La Sierra University, where he was honored with the President’s Award for academic excellence and leadership, as well as a BS in Business. Prior to joining Riverside Lyric Opera, Andrew honed his skills across diverse sectors from patient experience strategy at Prime Healthcare to ministry leadership and creative production roles. His experience spans service improvement, project planning, and team development, all grounded in a deep passion for the arts and community impact.`
        ]
    },
    {
        name: "Andrés Maldonado",
        teamRole: "CFO",
        boardRole: "Treasurer",   // 👈 in both
        src: "/images/team/andres.JPG",
        slug: "andres-maldonado",
        teamIndex: 4,
        boardIndex: 5,
        bio: [
            `Andres Maldonado is a visionary financial healthcare leader and telemedicine expert,
spearheading innovation across a network of 51 hospitals across the country. As
Corporate Manager of Telemedicine Services at Prime Healthcare, Andres oversees the
Telemedicine budget for 14 different telehealth and virtual care specialties and services
across all hospitals. Known for his strategic problem-solving and operational expertise,
he excels at optimizing workflows, ensuring regulatory compliance, and delivering
high-quality patient care through cutting-edge virtual health solutions.`,
            `Andres brings a unique blend of technical expertise and financial acumen, backed by an
MBA from the Zapara School of Business and certifications from UCLA in Accounting.
Fluent in English, Spanish, and Portuguese, he’s a global-minded innovator who thrives
in complex, fast-paced environments. Beyond the boardroom, Andres is a bass singer
with vocal performances as Betto in Gianni Schicchi and Bass Choir in the "Oh My Son"
Opera at the Walt Disney Concert Hall.`,
            `In his personal time Andrés is an avid mountain biker and a passionate photographer.
Whether he’s hiking with his wife or orchestrating transformative healthcare solutions,
Andres approaches every challenge with creativity, precision, and an unstoppable drive
for excellence.`
        ]
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
tutte, Minskwoman in Flight, Mrs. Hayes in Susannah, Lauretta in Gianni Schicchi, at La Sierra University, Dorothée
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
        bio: [
            `Stan Morrison’s story is one of leadership on the court, in the community, and
throughout the Inland Empire. A national champion with the University of California,
Berkeley, Stan’s early years were filled with basketball triumphs — from winning the
1959 NCAA Championship to competing internationally with Real Madrid of Spain as a
European All-Star. He later became the only coach in NCAA history to lead three
different California universities — the University of the Pacific, USC, and San Jose State
— to the NCAA tournament. His players and peers celebrated him not only for his
victories, but for the way he inspired young people to reach for more, both in sports and
in life.`,
            `When Stan transitioned from coaching to leadership at UC Riverside, he guided the
university’s athletic program through a historic move from Division II to Division I. For 12
years as Director of Intercollegiate Athletics, he worked tirelessly to create opportunities
for student-athletes to compete, grow, and represent Riverside on a national stage.`,
            `In the business sector, Morrison served as Senior Vice President for Business
Development at Pacific Premier Bank. However, the community has long recognized
Stan as more than a coach or administrator. He has been honored as “Distinguished
Citizen of the Year” by the Boy Scouts of America, “Citizen of the Year” by the Riverside
Chamber of Commerce, and the recipient of UC Berkeley’s prestigious “Pete Newell
Career Achievement Award.” In 2017, he was presented with the Ronald O. Loveridge
“Distinguished Community Leader Award,” a fitting tribute to his decades of service.`,
            `What truly defines Stan, however, is his heart for people. He has devoted his energy to
organizations that strengthen lives across Riverside and beyond, from Path of Life
Ministries and the Mission Inn Foundation to cancer research, adoption advocacy, and
the Riverside Arts Council. His work reflects a deep belief that the arts, athletics,
education, and service all play vital roles in shaping a stronger, more compassionate
community.`,
            `At Riverside Lyric Opera, we are proud to celebrate Stan Morrison not only for his
remarkable accomplishments, but for his enduring commitment to bringing people
together, uplifting the next generation, and enriching the cultural life of our city. His story
reminds us that when we share our talents and passions, we create harmony that
resonates far beyond the stage.`
        ]
    },
    {
        name: "Daniel E. Olson",
        boardRole: "Board Member",
        src: "/images/board/daniel.jpg",
        slug: "daniel-olson",
        boardIndex: 2,
        bio: [
            `Dan Olson is one of the founding members of Riverside Lyric Opera and has proudly
served on the Board of Directors since the company’s inception. In addition to his
leadership role, Dan has also shared his musical talents on stage, most often as a
member of the chorus.`,
            `Dan’s educational journey reflects both his love of music and his dedication to service.
He holds a Bachelor of Arts in Music Theory and Composition from Seattle Pacific
University, a Bachelor of Music in History and Literature from Pacific Lutheran
University, and a Juris Doctor from Pepperdine University School of Law. Since 1980,
he has practiced law in Riverside, focusing on real estate and construction, corporate
law, general business and civil litigation, family law, and probate. His legal service has
extended into the courtroom as a Judge Pro Tem, as well as an Arbitrator and Mediator
with the Riverside County Bar Association, Superior Court, and the California Court of
Appeals.`,
            `Music and the arts have always been central to Dan’s life. For 20 years he performed
with the Pacific Chorale and also served on the Board of Directors of the Performing
Arts Association of Orange County. His passion for community service extends far
beyond music. He has held leadership roles in the Riverside Optimist Club, served on
the City of Riverside Airport Commission, and contributed his expertise as an Alternate
Commissioner for the Riverside County Airport Land Use Commission.`,
            `A veteran of the U.S. Navy, Dan served as a Communications Officer on an aircraft
carrier during the Vietnam era. He has also been active with the Civil Air Patrol, where
he has served as Squadron Commander, Deputy Group Commander, and Deputy
Director of Legal Affairs (JAG) for both the California Wing and the Pacific Region.`,
            `Today, Dan continues his commitment to service as a board member of several
nonprofit organizations, including the Drug Alternative Program, Hyveth Williams
Ministries, and Precious Hearts Academy, a school for autistic and developmentally
disabled children.`,
            `Dan is deeply proud of his family — he is married, with four children and ten
grandchildren — and brings that same spirit of dedication and care to his work with
Riverside Lyric Opera. His life’s work reflects his belief in the power of service, the arts,
and community to enrich lives and inspire generations.`
        ]
    },
];

// helpers (handy in routes/components)
export function getPeople() {
    return PEOPLE;
}
export function getPersonBySlug(slug: string) {
    return PEOPLE.find(p => p.slug === slug);
}