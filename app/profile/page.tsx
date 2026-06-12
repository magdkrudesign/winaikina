import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Database } from "@/lib/database.types";

type WineRow = Database["public"]["Tables"]["wines"]["Row"];

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const email = user.email ?? "";
  const name = user.user_metadata?.full_name ?? email.split("@")[0];

  const { data: winesData } = await supabase
    .from("wines")
    .select("id, name, producer, vintage, image_url, scanned_at")
    .order("scanned_at", { ascending: false })
    .limit(20);

  const wines: Pick<WineRow, "id" | "name" | "producer" | "vintage" | "image_url" | "scanned_at">[] = winesData ?? [];

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10 pb-24">
      <div className="w-full max-w-sm flex flex-col gap-8">

        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
          <p className="text-sm text-muted-foreground">{email}</p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Historia skanowań
          </h2>

          {wines.length === 0 ? (
            <div className="border rounded-lg p-6 text-center text-sm text-muted-foreground">
              Nie masz jeszcze żadnych zeskanowanych win.
              <br />
              <Link href="/" className="underline underline-offset-4 mt-2 inline-block hover:text-foreground">
                Zeskanuj pierwsze wino →
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {wines.map((wine) => (
                <div key={wine.id} className="border rounded-lg p-4 flex gap-3 items-center">
                  {wine.image_url ? (
                    <img
                      src={wine.image_url}
                      alt={wine.name}
                      className="w-12 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-16 bg-muted rounded flex items-center justify-center text-xl">
                      🍷
                    </div>
                  )}
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <p className="text-sm font-medium truncate">{wine.name}</p>
                    {wine.producer && (
                      <p className="text-xs text-muted-foreground truncate">{wine.producer}</p>
                    )}
                    {wine.vintage && (
                      <p className="text-xs text-muted-foreground">{wine.vintage}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <Link href="/settings">
          <Button variant="outline" className="w-full">
            Ustawienia
          </Button>
        </Link>

      </div>
    </main>
  );
}
