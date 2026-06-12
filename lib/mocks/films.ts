export interface Film {
  id: string;
  title: string;
  director: string;
  year: number;
  genre: string[];
  description: string;
  rating: { filmweb?: number; rottenTomatoes?: number };
  posterUrl?: string;
  duration: string;
}

export const mockFilms: Film[] = [
  {
    id: "f1",
    title: "Amarcord",
    director: "Federico Fellini",
    year: 1973,
    genre: ["Dramat", "Komedia"],
    description: "Poetyckie wspomnienia z włoskiego miasteczka w czasach faszyzmu. Fellini w szczytowej formie.",
    rating: { filmweb: 8.1, rottenTomatoes: 98 },
    duration: "2h 3min",
    posterUrl: undefined,
  },
  {
    id: "f2",
    title: "Jeanne Dielman",
    director: "Chantal Akerman",
    year: 1975,
    genre: ["Dramat"],
    description: "Trzy dni z życia brukselskiej gospodyni domowej. Rewolucja formalna i feministyczna.",
    rating: { filmweb: 7.4, rottenTomatoes: 97 },
    duration: "3h 28min",
    posterUrl: undefined,
  },
  {
    id: "f3",
    title: "Stalker",
    director: "Andriej Tarkowski",
    year: 1979,
    genre: ["Sci-Fi", "Dramat"],
    description: "Podróż przez Strefę — miejsce gdzie spełniają się głęboko skryte pragnienia. Medytacja o wierze.",
    rating: { filmweb: 8.3, rottenTomatoes: 100 },
    duration: "2h 41min",
    posterUrl: undefined,
  },
];
