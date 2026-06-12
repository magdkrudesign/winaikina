"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockFilms } from "@/lib/mocks/films";
import { Button } from "@/components/ui/button";

export default function FilmSearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const results = query.length > 1
    ? mockFilms.filter((f) =>
        f.title.toLowerCase().includes(query.toLowerCase()) ||
        f.director.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-6">

        <header className="flex flex-col gap-1">
          <button onClick={() => router.back()} className="text-sm text-muted-foreground mb-2 w-fit hover:text-foreground">
            ← Wróć
          </button>
          <h1 className="text-2xl font-semibold tracking-tight">Wpisz film</h1>
          <p className="text-sm text-muted-foreground">
            Podaj tytuł lub reżysera — dobierzemy odpowiednie wino.
          </p>
        </header>

        <input
          type="search"
          placeholder="np. Fellini, Stalker, Amarcord…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          className="border rounded-md px-3 py-2.5 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring w-full"
        />

        {query.length > 1 && results.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            Nie znaleziono pasujących filmów.
          </p>
        )}

        {results.length > 0 && (
          <div className="flex flex-col gap-2">
            {results.map((film) => (
              <button
                key={film.id}
                onClick={() => router.push(`/film/${film.id}`)}
                className="border rounded-xl p-4 flex gap-3 items-start text-left hover:bg-muted/50 transition-colors w-full"
              >
                <div className="w-10 h-14 bg-muted rounded flex items-center justify-center text-lg flex-shrink-0">
                  🎬
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-sm">{film.title}</p>
                  <p className="text-xs text-muted-foreground">{film.director}, {film.year}</p>
                  <div className="flex gap-1 flex-wrap mt-1">
                    {film.genre.map((g) => (
                      <span key={g} className="text-xs border rounded-full px-2 py-0.5">{g}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {query.length === 0 && (
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Przykłady</p>
            {mockFilms.map((film) => (
              <button
                key={film.id}
                onClick={() => router.push(`/film/${film.id}`)}
                className="border rounded-xl p-4 flex gap-3 items-start text-left hover:bg-muted/50 transition-colors"
              >
                <div className="w-10 h-14 bg-muted rounded flex items-center justify-center text-lg flex-shrink-0">
                  🎬
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="font-medium text-sm">{film.title}</p>
                  <p className="text-xs text-muted-foreground">{film.director}, {film.year}</p>
                </div>
              </button>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
