"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase-browser";

export function SettingsActions() {
  const router = useRouter();
  const supabase = createClient();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  async function handleDeleteAccount() {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    setLoading(true);
    const res = await fetch("/api/delete-account", { method: "DELETE" });
    if (res.ok) {
      await supabase.auth.signOut();
      router.push("/");
    } else {
      setLoading(false);
      setConfirmDelete(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Button variant="outline" className="w-full" onClick={() => router.back()}>
        ← Wróć
      </Button>

      <Button variant="outline" className="w-full" onClick={handleSignOut}>
        Wyloguj się
      </Button>

      <div className="border-t pt-3 flex flex-col gap-2">
        <p className="text-xs text-muted-foreground">
          Usunięcie konta jest nieodwracalne. Wszystkie Twoje dane zostaną trwale usunięte.
        </p>
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleDeleteAccount}
          disabled={loading}
        >
          {loading
            ? "Usuwanie..."
            : confirmDelete
            ? "Na pewno? Kliknij ponownie aby potwierdzić"
            : "Usuń konto"}
        </Button>
        {confirmDelete && (
          <button
            className="text-xs text-muted-foreground underline text-center"
            onClick={() => setConfirmDelete(false)}
          >
            Anuluj
          </button>
        )}
      </div>
    </div>
  );
}
