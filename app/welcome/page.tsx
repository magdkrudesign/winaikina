import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { WelcomeSplash } from "./WelcomeSplash";

export default async function WelcomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name = user.user_metadata?.full_name?.split(" ")[0] ?? "tam";

  return <WelcomeSplash name={name} />;
}
