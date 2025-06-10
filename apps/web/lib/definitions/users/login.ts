import { z } from "zod/v4";

export const LoginFormSchema = z.object({
  email: z
    .email({
      pattern: z.regexes.html5Email,
      error: "Invalid email address",
    })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .trim(),
});

export type LoginFormState =
  | {
      errors?: {
        email?: {
          errors: string[];
        };
        password?: {
          errors: string[];
        };
      };
      message?: string;
    }
  | undefined;
