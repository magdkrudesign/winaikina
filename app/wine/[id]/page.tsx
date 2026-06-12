import Link from "next/link";
import { notFound } from "next/navigation";
import { mockWines } from "@/lib/mocks/wines";
import { mockPairings } from "@/lib/mocks/pairings";
import { mockFilms } from "@/lib/mocks/films";
import { Button } from "@/components/ui/button";

export default async function WineCardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const wine = mockWines.find((w) => w.id === id);
  if (!wine) notFound();

  const pairing = mockPairings.find((p) => p.wineId === id);
  const film = pairing ? mockFilms.find((f) => f.id === pairing.filmId) : null;

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-6">

        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground w-fit">
          ← Wróć
        </Link>

        {/* Wino header */}
        <div className="border rounded-xl p-5 flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-20 bg-muted rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
              🍷
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="text-xl font-semibold leading-tight">{wine.name}</h1>
              <p className="text-sm text-muted-foreground">{wine.producer}</p>
              <div className="flex gap-2 flex-wrap mt-1">
                <span className="text-xs border rounded-full px-2 py-0.5">{wine.vintage}</span>
                <span className="text-xs border rounded-full px-2 py-0.5">{wine.grape}</span>
                <span className="text-xs border rounded-full px-2 py-0.5">{wine.region}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{wine.description}</p>

          <div className="border-t pt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">Smak</p>
            <p className="text-sm italic">„{wine.tastingNotes}"</p>
          </div>
        </div>

        {/* Parowanie */}
        {pairing && film && (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Pasujący film
            </p>

            <div className="border rounded-xl p-5 flex flex-col gap-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-16 bg-muted rounded flex items-center justify-center text-xl flex-shrink-0">
                  🎬
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">{film.title}</h2>
                  <p className="text-sm text-muted-foreground">{film.director}, {film.year}</p>
                  <p className="text-xs text-muted-foreground">{film.duration}</p>
                </div>
              </div>

              <div className="border-t pt-4 flex flex-col gap-2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Most</p>
                <p className="text-sm font-medium">{pairing.bridgeTitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{pairing.bridge}</p>
              </div>

              <div className="bg-muted rounded-lg p-3 flex flex-col gap-1">
                <p className="text-xs font-medium">📖 {pairing.educationConcept}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{pairing.educationText}</p>
              </div>

              <Link href={`/pairing/${pairing.id}`}>
                <Button variant="outline" className="w-full">
                  Zobacz pełne parowanie →
                </Button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
