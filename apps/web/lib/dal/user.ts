import "server-only";
import { cache } from "react";
import { createClient } from "@/utils/supabase/server";
import type { UsersType } from "@/types/model";
import { verifySession } from "@/lib/dal/verifySession";

export const getUser = cache(async (userId?: string) => {
  const session = await verifySession();
  if (!session) return null;

  try {
    const supabase = await createClient();

    const id = userId || session.user.id;

    const { data, error } = await supabase
      .from("users")
      .select<string, UsersType["Row"]>("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;

    return data;
  } catch (error) {
    throw error;
  }
});

export const createUser = async (
  data: UsersType["Insert"] & Pick<UsersType["Row"], "id">,
) => {
  const supabase = await createClient();
  return supabase.from("users").insert<UsersType["Insert"]>(data);
};

export const deleteRegisteredUser = async (userId: string) => {
  const supabase = await createClient();
  return supabase.auth.admin.deleteUser(userId);
};
