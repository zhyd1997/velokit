"use server";

import { z } from "zod/v4";
import { createClient } from "@/utils/supabase/server";
import type { ForgotPasswordFormState } from "@/lib/definitions/users/forgot-password";
import { ForgotPasswordFormSchema } from "@/lib/definitions/users/forgot-password";

import type { UsersType } from "@/types/model";

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

  console.log(data);

  const supabase = await createClient();

  // Check if user exisits in db
  const { data: user, error: retrieveUserError } = await supabase
    .from("users")
    .select<string, UsersType["Row"]>("id")
    .eq("email", data.email)
    .maybeSingle();

  if (retrieveUserError) {
    return { message: retrieveUserError?.message };
  }

  if (!user) {
    return { message: "No user found!" };
  }

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
  });

  if (error) {
    return { message: error.message };
  }

  return { message: "Check your email for the password reset link" };
}
