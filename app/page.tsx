import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-8">

        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Wina i Kina</h1>
          <p className="text-sm text-muted-foreground">
            Sparuj wino z filmem.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <Link href="/scan">
            <div className="border rounded-xl p-5 flex flex-col gap-2 hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-2xl">📷</span>
                <span className="text-xs border rounded-full px-2 py-0.5 font-medium">AI</span>
              </div>
              <p className="font-medium">Zeskanuj etykietę</p>
              <p className="text-sm text-muted-foreground">
                Sfotografuj wino, a AI dobierze pasujący film.
              </p>
            </div>
          </Link>

          <Link href="/film">
            <div className="border rounded-xl p-5 flex flex-col gap-2 hover:bg-muted/50 transition-colors cursor-pointer">
              <span className="text-2xl">🎬</span>
              <p className="font-medium">Wpisz film</p>
              <p className="text-sm text-muted-foreground">
                Podaj tytuł, a my znajdziemy odpowiednie wino.
              </p>
            </div>
          </Link>
        </section>

        <section className="flex flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Przykładowe parowania
          </p>
          {[
            { id: "p1", wine: "Barolo Cannubi", film: "Amarcord" },
            { id: "p2", wine: "Savagnin Ganevat", film: "Jeanne Dielman" },
            { id: "p3", wine: "Rkatsiteli Amber", film: "Stalker" },
          ].map((p) => (
            <Link key={p.id} href={`/pairing/${p.id}`}>
              <div className="border rounded-xl p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors">
                <span className="text-lg">🍷</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{p.wine}</p>
                  <p className="text-xs text-muted-foreground">+ {p.film}</p>
                </div>
                <span className="text-muted-foreground text-sm">→</span>
              </div>
            </Link>
          ))}
        </section>

      </div>
    </main>
  );
}
