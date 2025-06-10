"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod/v4";

import { createClient } from "@/utils/supabase/server";
import type { SignupFormState } from "@/lib/definitions/users/signup";
import { SignupFormSchema } from "@/lib/definitions/users/signup";
import type { UsersType } from "@/types/model";
import { createUser, deleteRegisteredUser } from "@/lib/dal/user";

export async function signupAction(state: SignupFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get("email"),
    fullName: formData.get("fullName"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: z.treeifyError(validatedFields.error).properties,
    };
  }

  // Call the provider or db to create a user...
  const supabase = await createClient();

  const data = validatedFields.data;

  const { data: user, error: retrieveUserError } = await supabase
    .from("users")
    .select<string, UsersType["Row"]>("*")
    .eq("email", data.email)
    .maybeSingle();

  if (retrieveUserError) {
    return { message: retrieveUserError?.message };
  }

  if (user) {
    return { message: "The user is existed, try another email!" };
  }

  const { data: registeredUser, error } = await supabase.auth.signUp(data);

  if (error) {
    return { message: error?.message };
  }

  if (!registeredUser || !registeredUser.user?.id) {
    return { message: "User registered failed" };
  }

  const { error: creatingUserError } = await createUser({
    // @ts-expect-error FIXME should not omit user id or setup it using db trigger automatically
    id: registeredUser.user.id,
    email: data.email,
    first_name: data.firstName || data.fullName?.split(" ")[0] || "",
    last_name:
      data.lastName || data.fullName?.split(" ").slice(1).join(" ") || "",
    full_name: data.fullName || "",
  });

  if (creatingUserError) {
    const { error: deleteUserError } = await deleteRegisteredUser(
      registeredUser.user.id,
    );

    return {
      message: [creatingUserError?.message, deleteUserError?.message]
        .filter(Boolean)
        .join("\n"),
    };
  }

  revalidatePath("/signup", "layout");
  redirect("/signup/success");
}
