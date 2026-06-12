import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { LoginButtons } from "./LoginButtons";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) redirect("/profile");

  return (
    <main className="min-h-dvh flex justify-center px-4 py-10">
      <div className="w-full max-w-sm flex flex-col gap-8 justify-center">
        <header className="flex flex-col gap-1 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Wina i Kina</h1>
          <p className="text-sm text-muted-foreground">
            Zaloguj się, żeby zachować historię skanowań i ulubione parowania.
          </p>
        </header>

        <LoginButtons />

        <p className="text-center text-xs text-muted-foreground">
          Możesz też{" "}
          <a href="/" className="underline underline-offset-4 hover:text-foreground">
            używać bez konta
          </a>
          {" "}— historia nie zostanie zapisana.
        </p>
      </div>
    </main>
  );
}
