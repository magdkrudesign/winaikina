# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Czym jest ten projekt

PWA do parowania win z filmami. Dwa tryby:
- **Wino → Film** — skanujesz etykietę, AI rozpoznaje wino i rekomenduje filmy
- **Film → Wino** — wpisujesz tytuł, AI rekomenduje wina pasujące do klimatu

Kontekst: eventy @wina.i.kina we Wrocławiu. Parowania mają głębię narracyjną — spójność między historią producenta wina a historią reżysera/powstania filmu.

## Komendy

```bash
pnpm dev        # dev server na localhost:3000
pnpm build      # produkcyjny build
pnpm lint       # ESLint
```

Jeśli PATH do node nie jest dostępny, użyj `./run.sh` zamiast `pnpm dev`.

Brak test suite — nie ma `pnpm test`.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** — konfiguracja przez `@theme inline {}` w CSS, **brak `tailwind.config.ts`**
- **shadcn/ui** — komponenty dodawaj **manualnie** do `components/ui/` (CLI nie działa); kod z ui.shadcn.com
- **lucide-react** — ikony

Path alias `@/*` → katalog główny projektu.

## Architektura

App Router Next.js 15. Każdy route = plik `app/<route>/page.tsx`. Obecnie tylko `/` istnieje.

```
app/
  layout.tsx        # Root layout — Geist font, PWA meta, viewport
  globals.css       # CSS variables (shadcn defaults) + @theme inline dla Tailwind v4
  page.tsx          # Home Screen
components/
  home/             # Komponenty specyficzne dla ekranu
  ui/               # shadcn/ui (dodawane ręcznie)
  shared/           # Wspólne komponenty (nav, loader itp.) — jeszcze nie istnieją
lib/
  utils.ts          # cn() helper (clsx + tailwind-merge)
  mocks/            # Mock data z TypeScript interfaces — jeszcze nie istnieje
```

## Design System

### Stan aktualny
`globals.css` używa **shadcn light mode defaults** (zmienne `oklch`). Ciemny kinowy motyw (opisany poniżej) jest intencją projektu, ale jeszcze nie zaimplementowany w CSS.

### Docelowa estetyka
Wieczorny, kinowy, zmysłowy. Ciemne tło, ciepłe złoto, bordowe akcenty. Mobile-first. Język UI: **polski**.

Docelowe tokeny do zaimplementowania w `:root` / `.dark`:

```
--background: #0c0a09          /* tło główne */
--background-card: #141210
--foreground: #f5f0e8
--foreground-muted: #a09070
--accent-gold: #c9a96e
--accent-wine: #7a1c2e
--border: #2a2218
```

### Layout pattern dla nowych ekranów

```tsx
<main className="min-h-dvh flex justify-center px-4 py-10">
  <div className="w-full max-w-sm flex flex-col gap-8">
    {/* treść */}
  </div>
</main>
```

## Fazy rozwoju

### Faza 1 — UI z mockami (aktualnie)
Dane: hardcoded mocki w `lib/mocks/`.

**Status ekranów:**
- [x] Home Screen (`/`)
- [ ] Scan Screen (`/scan`)
- [ ] Wine Card (`/wine/[id]`)
- [ ] Film Search (`/film`)
- [ ] Film Card (`/film/[id]`)
- [ ] Pairing Card (`/pairing`)
- [ ] Profile Screen (`/profile`)

### Faza 2 — Backend i API
- Claude API Vision — rozpoznawanie etykiet
- Claude API — generowanie parowań z narracyjnym uzasadnieniem
- FilmWeb / TMDB API — dane filmów

## Mock data interfaces

```typescript
// lib/mocks/wines.ts
export interface Wine {
  id: string; name: string; producer: string; region: string
  country: string; grape: string; vintage: number; description: string; imageUrl?: string
}

// lib/mocks/films.ts
export interface Film {
  id: string; title: string; director: string; year: number
  genre: string[]; description: string
  rating: { filmweb?: number; rottenTomatoes?: number }; posterUrl?: string
}

// lib/mocks/pairings.ts
export interface Pairing {
  wine: Wine; film: Film
  bridge: string  // narracyjne uzasadnienie (1-2 zdania)
}
```

## Konwencje kodu

- Style: **inline CSS variables** dla kolorów projektu, Tailwind dla layoutu/spacingu
- Ikony: lucide-react lub inline SVG — nie instaluj dodatkowych bibliotek ikon
- Komponenty `"use client"` tylko gdy potrzebny interaktywność (event handlery, hooks)
