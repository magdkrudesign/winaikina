import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { SettingsActions } from "./SettingsActions";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10">
      <div className="w-full max-w-sm flex flex-col gap-8">

        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Ustawienia</h1>
        </header>

        <SettingsActions />

      </div>
    </main>
  );
}
