import Link from "next/link";
import { notFound } from "next/navigation";
import { mockFilms } from "@/lib/mocks/films";
import { mockPairings } from "@/lib/mocks/pairings";
import { mockWines } from "@/lib/mocks/wines";
import { Button } from "@/components/ui/button";

export default async function FilmCardPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const film = mockFilms.find((f) => f.id === id);
  if (!film) notFound();

  const pairing = mockPairings.find((p) => p.filmId === id);
  const wine = pairing ? mockWines.find((w) => w.id === pairing.wineId) : null;

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-6">

        <Link href="/film" className="text-sm text-muted-foreground hover:text-foreground w-fit">
          ← Wróć
        </Link>

        {/* Film header */}
        <div className="border rounded-xl p-5 flex flex-col gap-4">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-20 bg-muted rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
              🎬
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h1 className="text-xl font-semibold leading-tight">{film.title}</h1>
              <p className="text-sm text-muted-foreground">{film.director}</p>
              <div className="flex gap-2 flex-wrap mt-1">
                <span className="text-xs border rounded-full px-2 py-0.5">{film.year}</span>
                <span className="text-xs border rounded-full px-2 py-0.5">{film.duration}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{film.description}</p>

          <div className="flex gap-4">
            {film.rating.filmweb && (
              <div className="flex flex-col gap-0.5">
                <p className="text-xs text-muted-foreground">Filmweb</p>
                <p className="text-sm font-medium">{film.rating.filmweb}/10</p>
              </div>
            )}
            {film.rating.rottenTomatoes && (
              <div className="flex flex-col gap-0.5">
                <p className="text-xs text-muted-foreground">Rotten Tomatoes</p>
                <p className="text-sm font-medium">{film.rating.rottenTomatoes}%</p>
              </div>
            )}
          </div>
        </div>

        {/* Parowanie */}
        {pairing && wine && (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Pasujące wino
            </p>

            <div className="border rounded-xl p-5 flex flex-col gap-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-16 bg-muted rounded flex items-center justify-center text-xl flex-shrink-0">
                  🍷
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">{wine.name}</h2>
                  <p className="text-sm text-muted-foreground">{wine.producer}</p>
                  <p className="text-xs text-muted-foreground">{wine.region}, {wine.country}</p>
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
