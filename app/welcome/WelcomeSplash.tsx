"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function WelcomeSplash({ name }: { name: string }) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/"), 2500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-dvh flex items-center justify-center px-4">
      <div className="text-center flex flex-col gap-3 animate-in fade-in duration-700">
        <p className="text-4xl">🍷</p>
        <h1 className="text-2xl font-semibold tracking-tight">
          Hej {name},
        </h1>
        <p className="text-muted-foreground">miłego wieczoru z winem i kinem.</p>
      </div>
    </main>
  );
}
