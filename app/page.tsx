import { ModeCard } from "@/components/home/ModeCard";

export default function HomePage() {
  return (
    <main
      className="cinema-bg min-h-dvh flex justify-center"
      style={{ color: "var(--foreground)" }}
    >
      <div className="flex flex-col items-center justify-between px-5 py-10 w-full max-w-[448px]">
      {/* Header */}
      <header className="w-full flex flex-col items-center gap-1 pt-6">
        {/* Logo / wordmark */}
        <div className="flex items-center gap-3 mb-2">
          <WineGlassIcon />
          <span
            className="text-[11px] font-medium uppercase tracking-[0.25em]"
            style={{ color: "var(--accent-gold)" }}
          >
            Wrocław
          </span>
          <FilmIcon />
        </div>

        <h1
          className="text-4xl font-bold tracking-tight text-center leading-none"
          style={{ color: "var(--foreground)" }}
        >
          Wina i Kina
        </h1>

        {/* Złota linia */}
        <div
          className="gold-line h-px w-32 mt-3 mb-4"
          aria-hidden="true"
        />

        <p
          className="text-center text-sm leading-relaxed max-w-[260px]"
          style={{ color: "var(--foreground-muted)" }}
        >
          Sparuj wino z filmem.
          <br />
          Odkryj, co łączy kieliszek z ekranem.
        </p>
      </header>

      {/* Tryby */}
      <section className="w-full flex flex-col gap-4 my-auto py-12">
        <p
          className="text-[11px] uppercase tracking-widest font-medium mb-2"
          style={{ color: "var(--foreground-subtle)" }}
        >
          Wybierz tryb
        </p>

        <ModeCard
          variant="wine"
          icon={<span aria-hidden>🍷</span>}
          label="Zeskanuj etykietę"
          description="Sfotografuj wino, a AI dobierze do niego film pasujący klimatem i historią."
          badge="AI"
        />

        <ModeCard
          variant="film"
          icon={<span aria-hidden>🎬</span>}
          label="Wpisz film"
          description="Podaj tytuł, a my znajdziemy wino, które idealnie dopełni wieczór."
        />
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-3">
        {/* Tagline eventu */}
        <div
          className="flex items-center gap-2 text-[11px] uppercase tracking-widest"
          style={{ color: "var(--foreground-subtle)" }}
        >
          <span>Paruj świadomie</span>
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--accent-gold-dim)" }}
          />
          <span>Smakuj głębiej</span>
        </div>

        <p
          className="text-[10px] text-center"
          style={{ color: "var(--foreground-subtle)" }}
        >
          @wina.i.kina · Wrocław
        </p>
      </footer>
      </div>
    </main>
  );
}

/* Inline SVG ikony — lekkie, bez dependencji */
function WineGlassIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent-wine-light)" }}
      aria-hidden
    >
      <path d="M8 22h8M12 11v11M6 2h12l-2 7a4 4 0 0 1-8 0L6 2z" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent-gold)" }}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  );
}
