"use server";

import { z } from "zod/v4";
import { createClient } from "@/utils/supabase/server";
import type { ForgotPasswordFormState } from "@/lib/definitions/users/forgot-password";
import { ForgotPasswordFormSchema } from "@/lib/definitions/users/forgot-password";

export async function forgotPasswordAction(
  state: ForgotPasswordFormState,
  formData: FormData,
) {
  // Validate form fields
  const validatedFields = ForgotPasswordFormSchema.safeParse({
    email: formData.get("email"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  const data = validatedFields.data;

  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  });

  if (error) {
    return { message: error.message };
  }

  return { message: "Check your email for the password reset link" };
}
