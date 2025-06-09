"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod/v4";

import { createClient } from "@/utils/supabase/server";
import type { AuthFormState } from "@/lib/definitions";
import { AuthFormSchema } from "@/lib/definitions";

export async function login(state: AuthFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = AuthFormSchema.safeParse({
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

export async function signup(state: AuthFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = AuthFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
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
    .select("*")
    .eq("email", data.email);

  if (retrieveUserError) {
    return { message: retrieveUserError?.message };
  }

  if (user) {
    return { message: "The user is existed, try another email!" };
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { message: error?.message };
  }

  const { error: creatingUserError } = await supabase
    .from("users")
    .insert({ email: data.email });

  if (creatingUserError) {
    return { message: creatingUserError?.message };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function logOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
