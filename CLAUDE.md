# Wina i Kina — CLAUDE.md

Dokumentacja projektu dla Claude. Czytaj przed każdą sesją.

## Czym jest ten projekt

PWA do parowania win z filmami. Dwa tryby:
- **Wino → Film** — skanujesz etykietę, AI rozpoznaje wino i rekomenduje filmy
- **Film → Wino** — wpisujesz tytuł, AI rekomenduje wina pasujące do klimatu

Kontekst: eventy @wina.i.kina we Wrocławiu. Parowania mają głębię narracyjną — nie "pasuje nastrojem", ale spójność między historią producenta wina a historią reżysera/powstania filmu.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS** (v4, konfiguracja przez CSS)
- **shadcn/ui** — zainstalowane ręcznie (CLI nie działa w sandboxie), komponenty dodawaj manualnie do `components/ui/`
- **lucide-react** — ikony
- **Claude API** — Faza 2 (vision + rekomendacje)

## Struktura projektu

```
winaikina-app/
├── app/
│   ├── layout.tsx          # Root layout, meta, font Geist
│   ├── globals.css         # Design tokens jako CSS variables, klasy utility
│   ├── page.tsx            # Home Screen (ekran startowy)
│   ├── scan/
│   │   └── page.tsx        # Scan Screen — TODO Faza 1
│   ├── wine/
│   │   └── [id]/page.tsx   # Wine Card — TODO Faza 1
│   ├── film/
│   │   └── page.tsx        # Film Search — TODO Faza 1
│   │   └── [id]/page.tsx   # Film Card — TODO Faza 1
│   └── pairing/
│       └── page.tsx        # Pairing Card — TODO Faza 1
├── components/
│   ├── home/
│   │   └── ModeCard.tsx    # Karta trybu na Home Screen
│   ├── ui/                 # shadcn/ui komponenty (dodawaj manualnie)
│   └── shared/             # Wspólne komponenty (nav, loader, itp.)
├── lib/
│   └── utils.ts            # cn() helper
└── CLAUDE.md               # Ten plik
```

## Design System

### Filozofia estetyczna
Wieczorny, kinowy, zmysłowy — nie korporacyjny. Ciemne tło, ciepłe złoto, bordowe akcenty.
Referencja UX: Vivino. Mobile-first. Język UI: **polski**.

### CSS Variables (globals.css)

```css
--background: #0c0a09          /* tło główne */
--background-card: #141210     /* tło kart */
--background-elevated: #1c1915 /* tło modali/elevated */

--foreground: #f5f0e8          /* tekst główny */
--foreground-muted: #a09070    /* tekst drugorzędny */
--foreground-subtle: #5a4f3f   /* tekst trzeciorzędny, labels */

--accent-gold: #c9a96e         /* główny akcent złoty */
--accent-gold-light: #e8c99a   /* jasniejszy złoty */
--accent-gold-dim: #7a6040     /* przyciemniony złoty (bordery hover) */

--accent-wine: #7a1c2e         /* akcent bordowy */
--accent-wine-light: #b03050   /* jaśniejszy bordowy */

--border: #2a2218              /* border domyślny */
```

### Klasy utility (globals.css)
- `.cinema-bg` — kinowe tło z subtelnymi gradientami radial
- `.gold-line` — złota linia dekoracyjna (gradient)
- `.card-glow` — karta z cieniem i hover efektem

### Responsywność
- Aplikacja jest **mobile-first** (max-width: 448px dla contentu)
- Desktop: wycentrowany widok z ciemnym tłem po bokach
- Użyj `.app-shell` wrappera — patrz sekcja Layout

## Layout Pattern

Każdy ekran powinien używać tego wrappera:

```tsx
<main className="cinema-bg min-h-dvh flex flex-col items-center justify-between px-5 py-10 w-full" style={{ color: "var(--foreground)" }}>
  <div className="w-full max-w-[448px] flex flex-col flex-1">
    {/* treść ekranu */}
  </div>
</main>
```

Na desktop: `max-w-[448px]` centruje zawartość. Tło `.cinema-bg` wypełnia cały viewport.

## Fazy rozwoju

### Faza 1 — UI z mockami (aktualnie)
Działające ekrany bez backendu, bez auth, bez prawdziwego API.
Dane: hardcoded mocki w plikach lub `lib/mocks/`.

**Status ekranów:**
- [x] Home Screen (`/`) — wybór trybu
- [ ] Scan Screen (`/scan`) — mock skanowania etykiety
- [ ] Wine Card (`/wine/[id]`) — karta wina + rekomendacje filmów
- [ ] Film Search (`/film`) — wyszukiwarka filmów
- [ ] Film Card (`/film/[id]`) — karta filmu z ocenami
- [ ] Pairing Card (`/pairing`) — "most" między winem a filmem
- [ ] Profile Screen (`/profile`) — historia parowań

### Faza 2 — Backend i API
- Claude API Vision — rozpoznawanie etykiet
- Claude API — generowanie parowań
- FilmWeb / TMDB API — dane filmów
- Auth (opcjonalnie)

## Konwencje kodu

- Komponenty: PascalCase, jeden plik = jeden komponent
- Pliki: kebab-case
- Style: **inline CSS variables** dla kolorów projektu, Tailwind dla layoutu/spacingu
- Ikony: lucide-react lub inline SVG (nie instaluj dodatkowych bibliotek ikon)
- Mock data: trzymaj w `lib/mocks/` z TypeScript interfaces

## Mocki — format danych

```typescript
// lib/mocks/wines.ts
export interface Wine {
  id: string
  name: string
  producer: string
  region: string
  country: string
  grape: string
  vintage: number
  description: string
  imageUrl?: string
}

// lib/mocks/films.ts
export interface Film {
  id: string
  title: string
  director: string
  year: number
  genre: string[]
  description: string
  rating: { filmweb?: number; rottenTomatoes?: number }
  posterUrl?: string
}

// lib/mocks/pairings.ts
export interface Pairing {
  wine: Wine
  film: Film
  bridge: string  // narracyjne uzasadnienie parowania (1-2 zdania)
}
```

## Ważne decyzje techniczne

1. **shadcn CLI nie działa** w środowisku Cowork — dodawaj komponenty manualnie kopiując kod z ui.shadcn.com
2. **Tailwind v4** — konfiguracja przez CSS (`@theme inline {}` w globals.css), nie przez tailwind.config.js
3. **Brak `tailwind.config.ts`** — to normalne dla Tailwind v4, nie twórz go
4. **CSS variables zamiast Tailwind tokenów** dla kolorów projektu — łatwiej utrzymać spójność
