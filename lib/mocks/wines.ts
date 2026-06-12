export interface Wine {
  id: string;
  name: string;
  producer: string;
  region: string;
  country: string;
  grape: string;
  vintage: number;
  description: string;
  imageUrl?: string;
  tastingNotes: string;
}

export const mockWines: Wine[] = [
  {
    id: "w1",
    name: "Barolo Cannubi",
    producer: "Giacomo Borgogno",
    region: "Piemont",
    country: "Włochy",
    grape: "Nebbiolo",
    vintage: 2018,
    description: "Klasyczne Barolo z jednej z najsławniejszych parceli w Langhe. Suche, taniczne, z długim potencjałem.",
    tastingNotes: "Wiśnia, dzika róża, skóra, tyton. Taniny jak aksamit po godzinie w karafce.",
    imageUrl: undefined,
  },
  {
    id: "w2",
    name: "Savagnin Ouillé",
    producer: "Domaine Ganevat",
    region: "Jura",
    country: "Francja",
    grape: "Savagnin",
    vintage: 2020,
    description: "Naturalne białe z Jury. Produkowane bez interwencji, bez SO2. Ganevat to legenda małych producentów.",
    tastingNotes: "Słone, rześkie, suszona morela, trochę siana i białych kwiatów.",
    imageUrl: undefined,
  },
  {
    id: "w3",
    name: "Rkatsiteli Amber",
    producer: "Pheasant's Tears",
    region: "Kachetia",
    country: "Gruzja",
    grape: "Rkatsiteli",
    vintage: 2021,
    description: "Orange wine fermentowane w qvevri przez 6 miesięcy. Jedna z najstarszych tradycji winiarskich świata.",
    tastingNotes: "Miedziane, lekko utlenione, suszona morela, herbata, garbniki ze skórki.",
    imageUrl: undefined,
  },
];
