import Link from "next/link";
import { createClient } from "@/lib/supabase-server";

export async function BottomNav() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background flex justify-around py-3 px-4">
      <Link href="/" className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Dom
      </Link>

      <Link href={user ? "/profile" : "/login"} className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        {user ? (
          <span className="w-5 h-5 rounded-full bg-foreground text-background flex items-center justify-center text-[10px] font-bold">
            {(user.email ?? "?")[0].toUpperCase()}
          </span>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M20 21a8 8 0 1 0-16 0"/>
          </svg>
        )}
        {user ? "Profil" : "Zaloguj się"}
      </Link>
    </nav>
  );
}
