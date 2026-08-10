export interface EventItem {
    date: string;
    type: "Boksignering" | "TV" | "Radio" | "Arrangement";
    title: string;
    location?: string;
    description?: string;
    image?: string;
    href?: string;
    linkLabel?: string;
}

// Foreløpig fiktive arrangementer - byttes ut med ekte data (og ekte bilder) etter hvert.
export const events: EventItem[] = [
    {
        date: "2026-03-12",
        type: "Boksignering",
        title: "Boksignering hos ARK Trondheim",
        location: "ARK Trondheim City Syd",
        description:
            "Elin signerte bøker og hilste på lesere (og en del firbeinte venner) i butikken.",
        image: "/dog3.png",
    },
    {
        date: "2026-04-18",
        type: "Radio",
        title: "Praten om HOTDOG bok nummer to",
        location: "NRK P1 Trøndelag",
        description:
            "Elin gjestet formiddagssendingen og fortalte om reisen fra idé til ferdig bok.",
        image: "/dog5.png",
    },
    {
        date: "2026-05-27",
        type: "Arrangement",
        title: "Stand på Trondheim Strikkefestival",
        location: "Trondheim",
        description:
            "Boksalg, signering og mye prat om raglan-passform og HOTDOG-fellesskapet.",
        image: "/dog9.png",
    },
    {
        date: "2026-06-14",
        type: "TV",
        title: "God morgen Norge",
        location: "TV 2",
        description: "Elin viste frem noen av genserne fra boken i studio.",
        image: "/dog12.png",
    },
    {
        date: "2026-08-20",
        type: "Boksignering",
        title: "Boksignering hos Norli Oslo City",
        location: "Norli Oslo City",
        description:
            "Ta gjerne med hunden — Elin signerer bøker og tar bilder av firbeinte lesere.",
        image: "/dog6.png",
    },
    {
        date: "2026-09-04",
        type: "Radio",
        title: "Intervju om boken og fellesskapet",
        location: "P4 God morgen Norge",
        description:
            "Prat om hvordan et lite hundestrikk-univers ble til bok nummer to.",
        image: "/dog13.png",
    },
    {
        date: "2026-09-19",
        type: "TV",
        title: "Studiobesøk med genser-visning",
        location: "TV 2 God kveld Norge",
        description: "Nye design fra boken vises frem, med noen firbeinte modeller på slep.",
        image: "/dog1.png",
    },
    {
        date: "2026-10-10",
        type: "Arrangement",
        title: "Stand på Bokmessen i Bergen",
        location: "Bergen",
        description: "Signering, prat med lesere og mye strikkeglede på standen.",
        image: "/dog8.png",
    },
    {
        date: "2026-11-07",
        type: "Boksignering",
        title: "Boksignering hos ARK Bergen Storsenter",
        location: "ARK Bergen Storsenter",
        description: "Boksignering før jul — perfekt anledning for en julegave med personlighet.",
        image: "/dog4.png",
    },
];
