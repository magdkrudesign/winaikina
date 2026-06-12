"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ScanPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  function handleAnalyze() {
    setLoading(true);
    // Mock: po 1.5s idzie do karty wina
    setTimeout(() => router.push("/wine/w1"), 1500);
  }

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-6">

        <header className="flex flex-col gap-1">
          <button onClick={() => router.back()} className="text-sm text-muted-foreground mb-2 w-fit hover:text-foreground">
            ← Wróć
          </button>
          <h1 className="text-2xl font-semibold tracking-tight">Zeskanuj etykietę</h1>
          <p className="text-sm text-muted-foreground">
            Zrób zdjęcie etykiety — AI rozpozna wino i dobierze film.
          </p>
        </header>

        <div
          className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-4 p-8 cursor-pointer hover:bg-muted/50 transition-colors min-h-[240px]"
          onClick={() => inputRef.current?.click()}
        >
          {preview ? (
            <img src={preview} alt="Etykieta" className="max-h-48 rounded-lg object-contain" />
          ) : (
            <>
              <span className="text-4xl">📷</span>
              <p className="text-sm text-muted-foreground text-center">
                Dotknij żeby zrobić zdjęcie<br />lub wybrać z galerii
              </p>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={handleFile}
          />
        </div>

        {preview && (
          <Button size="lg" className="w-full" onClick={handleAnalyze} disabled={loading}>
            {loading ? "Analizuję etykietę…" : "Rozpoznaj wino →"}
          </Button>
        )}

        {!preview && (
          <Button variant="outline" size="lg" className="w-full" onClick={() => inputRef.current?.click()}>
            Wybierz zdjęcie
          </Button>
        )}

      </div>
    </main>
  );
}
