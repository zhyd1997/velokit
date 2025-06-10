import { z } from "zod/v4";

export const ForgotPasswordFormSchema = z.object({
  email: z
    .email({
      pattern: z.regexes.html5Email,
      error: "Invalid email address",
    })
    .trim(),
});

export type ForgotPasswordFormState =
  | {
      errors?: {
        email?: {
          errors: string[];
        };
      };
      message?: string;
    }
  | undefined;
