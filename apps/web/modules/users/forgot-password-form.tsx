"use client";

import { useActionState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { forgotPasswordAction } from "@/app/actions/auth/forgot-password";

export const ForgotPasswordForm = () => {
  const [state, action, isPending] = useActionState(
    forgotPasswordAction,
    undefined,
  );

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Forgot Password</CardTitle>
        <CardDescription>
          Enter your email address and we'll send you a link to reset your
          password
        </CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your email"
            />
            {state?.errors?.email &&
              state.errors.email.errors.map((error) => (
                <p className="text-red-500" key={error} aria-live="polite">
                  {error}
                </p>
              ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full mt-4"
            aria-busy={isPending}
          >
            {isPending ? "Sending..." : "Send Reset Link"}
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="/login">Back to Login</Link>
          </Button>
        </CardFooter>
      </form>
      {state?.message && (
        <p
          className="text-center text-sm text-red-500 px-6 pb-6"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </Card>
  );
};
