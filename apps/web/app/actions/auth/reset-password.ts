"use server";

import { z } from "zod/v4";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import type { ResetPasswordFormState } from "@/lib/definitions/users/reset-password";
import { ResetPasswordFormSchema } from "@/lib/definitions/users/reset-password";

export async function resetPasswordAction(
  state: ResetPasswordFormState,
  formData: FormData,
) {
  // Validate form fields
  const validatedFields = ResetPasswordFormSchema.safeParse({
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: validatedFields.data.password,
  });

  if (error) {
    return { message: error.message };
  }

  redirect("/login?message=Password updated successfully");
}
