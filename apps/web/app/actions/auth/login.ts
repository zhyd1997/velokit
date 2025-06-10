"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod/v4";

import { createClient } from "@/utils/supabase/server";
import type { LoginFormState } from "@/lib/definitions/users/login";
import { LoginFormSchema } from "@/lib/definitions/users/login";

export async function loginAction(state: LoginFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  // Call the provider or db to sign in...
  const supabase = await createClient();

  const data = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { message: error?.message };
  }

  revalidatePath("/private");
  redirect("/private");
}
