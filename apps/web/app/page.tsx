import { LandingHome } from "@/modules/landing/home-section";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const isAuth = Boolean(data.user && !error);

  return <LandingHome isAuth={isAuth} />;
}
