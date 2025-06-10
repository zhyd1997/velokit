import { z } from "zod/v4";

export const SignupFormSchema = z
  .object({
    email: z
      .email({
        pattern: z.regexes.html5Email,
        error: "Invalid email address",
      })
      .trim(),
    fullName: z.string().trim().optional(),
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .trim()
      .optional(),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .trim()
      .optional(),
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
  })
  .refine(
    (data) => {
      // At least one name field must be provided
      return data.fullName || (data.firstName && data.lastName);
    },
    {
      message: "Please provide either full name or both first and last name",
      path: ["fullName"],
    },
  );

export type SignupFormState =
  | {
      errors?: {
        email?: {
          errors: string[];
        };
        fullName?: {
          errors: string[];
        };
        firstName?: {
          errors: string[];
        };
        lastName?: {
          errors: string[];
        };
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
