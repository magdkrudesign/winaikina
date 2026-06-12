import Link from "next/link";
import { notFound } from "next/navigation";
import { mockPairings } from "@/lib/mocks/pairings";
import { mockWines } from "@/lib/mocks/wines";
import { mockFilms } from "@/lib/mocks/films";

export default async function PairingCardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pairing = mockPairings.find((p) => p.id === id);
  if (!pairing) notFound();

  const wine = mockWines.find((w) => w.id === pairing.wineId)!;
  const film = mockFilms.find((f) => f.id === pairing.filmId)!;

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-6">

        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground w-fit">
          ← Strona główna
        </Link>

        <header className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Parowanie</p>
          <h1 className="text-xl font-semibold leading-tight">{pairing.bridgeTitle}</h1>
        </header>

        {/* Wino + Film obok siebie */}
        <div className="grid grid-cols-2 gap-3">
          <Link href={`/wine/${wine.id}`} className="border rounded-xl p-4 flex flex-col gap-2 hover:bg-muted/50 transition-colors">
            <span className="text-2xl">🍷</span>
            <p className="text-sm font-medium leading-tight">{wine.name}</p>
            <p className="text-xs text-muted-foreground">{wine.producer}</p>
            <p className="text-xs text-muted-foreground">{wine.vintage}</p>
          </Link>
          <Link href={`/film/${film.id}`} className="border rounded-xl p-4 flex flex-col gap-2 hover:bg-muted/50 transition-colors">
            <span className="text-2xl">🎬</span>
            <p className="text-sm font-medium leading-tight">{film.title}</p>
            <p className="text-xs text-muted-foreground">{film.director}</p>
            <p className="text-xs text-muted-foreground">{film.year}</p>
          </Link>
        </div>

        {/* Most */}
        <div className="border rounded-xl p-5 flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Most</p>
          <p className="text-sm leading-relaxed">{pairing.bridge}</p>
        </div>

        {/* Edukacja */}
        <div className="border rounded-xl p-5 flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            📖 Pojęcie wieczoru
          </p>
          <p className="font-medium">{pairing.educationConcept}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{pairing.educationText}</p>
        </div>

        {/* Notatki smakowe */}
        <div className="border rounded-xl p-5 flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Nuty smakowe
          </p>
          <p className="text-sm italic text-muted-foreground">„{wine.tastingNotes}"</p>
        </div>

      </div>
    </main>
  );
}
