import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Button } from "@workspace/ui/components/button";
import { logOut } from "@/app/actions/auth";

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>

      <Button className="hover:cursor-pointer" onClick={logOut}>
        Sign Out
      </Button>
    </div>
  );
}
