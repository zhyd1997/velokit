import { z } from "zod/v4";

export const ResetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .trim(),
    confirmPassword: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormState =
  | {
      errors?: {
        password?: {
          errors: string[];
        };
        confirmPassword?: {
          errors: string[];
        };
      };
      message?: string;
    }
  | undefined;
