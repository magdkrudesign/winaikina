export interface Pairing {
  id: string;
  wineId: string;
  filmId: string;
  bridge: string;
  bridgeTitle: string;
  educationConcept: string;
  educationText: string;
}

export const mockPairings: Pairing[] = [
  {
    id: "p1",
    wineId: "w1",
    filmId: "f1",
    bridgeTitle: "Dwaj nostalgiści z Piemontu",
    bridge: "Borgogno i Fellini urodzili się kilka kilometrów od siebie — jeden w Langhe, drugi w Rimini. Obaj stworzyli dzieła, które są hołdem dla przemijającego świata: Barolo Cannubi to pamięć o konkretnym roku i miejscu, Amarcord to pamięć o dzieciństwie które nigdy nie istniało dokładnie tak jak je pamiętamy.",
    educationConcept: "Terroir",
    educationText: "Terroir to suma miejsca: gleba, klimat, ekspozycja, ręce producenta. Cannubi to parcela z XIII wieku — każda butelka stamtąd niesie historię konkretnego kawałka ziemi.",
  },
  {
    id: "p2",
    wineId: "w2",
    filmId: "f2",
    bridgeTitle: "Cierpliwość bez kompromisów",
    bridge: "Chantal Akerman i Jean-François Ganevat pracują w tej samej filozofii: zero skrótów, zero komercjalnych ustępstw. Jeanne Dielman trwa 3,5 godziny bo tak długo trwa dzień kobiety. Savagnin Ganevata nie ma SO2 bo tak rośnie winogrono — oba produkty są dokładnie tym czym są, bez żadnego retuszu.",
    educationConcept: "Wino naturalne",
    educationText: "Wino naturalne = minimalna interwencja w winnicy i piwnicy. Brak lub minimalne SO2, dzikie drożdże, bez filtrowania. Ganevat to jeden z ojców tego ruchu we Francji.",
  },
  {
    id: "p3",
    wineId: "w3",
    filmId: "f3",
    bridgeTitle: "Archaiczne naczynia pełne tajemnicy",
    bridge: "Qvevri to gliniane naczynie zakopywane w ziemi — Gruzini używają go od 8000 lat. Strefa Tarkowskiego to miejsce bez mapy, bez logiki, bez gwarancji. Oba naczynia — dosłowne i metaforyczne — kryją w sobie coś co wymyka się definicjom i zmienia każdego kto do środka wejdzie.",
    educationConcept: "Qvevri",
    educationText: "Qvevri to tradycyjne gruzińskie naczynie ceramiczne zakopywane w ziemi. Wino fermentuje i dojrzewa w kontakcie ze skórką przez kilka miesięcy, stąd pomarańczowy kolor i taniny w białym winie.",
  },
];
