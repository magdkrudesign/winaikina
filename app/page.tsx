import { ModeCard } from "@/components/home/ModeCard";

export default function HomePage() {
  return (
    <main className="min-h-dvh flex justify-center px-4 py-10">
      <div className="w-full max-w-sm flex flex-col gap-8">

        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Wina i Kina</h1>
          <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            Sparuj wino z filmem.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <ModeCard
            label="Zeskanuj etykietę"
            description="Sfotografuj wino, a AI dobierze pasujący film."
            badge="AI"
          />
          <ModeCard
            label="Wpisz film"
            description="Podaj tytuł, a my znajdziemy odpowiednie wino."
          />
        </section>

      </div>
    </main>
  );
}
