import "server-only";
import { createClient } from "@/utils/supabase/server";
import type { UsersType } from "@/types/model";
import { getUser } from "@/lib/dal/user";

function canSeeUsername(viewer: UsersType["Row"]) {
  if (!viewer) return false;
  return true;
}

export const getProfileDTO = async (email: string) => {
  const supabase = await createClient();
  const { data: user, error } = await supabase
    .from("users")
    .select<string, UsersType["Row"]>("*")
    .eq("email", email)
    .maybeSingle();

  if (!user || error) {
    return null;
  }

  const currentUser = await getUser(user.id);

  return {
    username:
      currentUser && canSeeUsername(currentUser)
        ? currentUser?.full_name
        : null,
  };
};
