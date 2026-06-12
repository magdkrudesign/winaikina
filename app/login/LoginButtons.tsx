"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase-browser";

export function LoginButtons() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Nieprawidłowy email lub hasło.");
      } else {
        router.push("/welcome");
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
      } else {
        router.push("/welcome");
      }
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex rounded-lg border overflow-hidden text-sm">
        <button
          className={`flex-1 py-2 transition-colors ${mode === "login" ? "bg-foreground text-background" : "hover:bg-muted"}`}
          onClick={() => { setMode("login"); setError(null); }}
          type="button"
        >
          Zaloguj się
        </button>
        <button
          className={`flex-1 py-2 transition-colors ${mode === "register" ? "bg-foreground text-background" : "hover:bg-muted"}`}
          onClick={() => { setMode("register"); setError(null); }}
          type="button"
        >
          Utwórz konto
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="ty@example.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="min. 6 znaków"
          />
        </div>

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? "Ładowanie..." : mode === "login" ? "Zaloguj się" : "Utwórz konto"}
        </Button>
      </form>
    </div>
  );
}
