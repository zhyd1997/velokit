"use client";

import type { FC } from "react";
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
import { resetPasswordAction } from "@/app/actions/auth/reset-password";

export type ResetPasswordFormProps = {};

export const ResetPasswordForm: FC<ResetPasswordFormProps> = () => {
  const [state, action, isPending] = useActionState(
    resetPasswordAction,
    undefined,
  );

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your new password below</CardDescription>
      </CardHeader>
      <form action={action}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your new password"
            />
            {state?.errors?.password &&
              state.errors.password.errors.map((error) => (
                <p className="text-red-500" key={error} aria-live="polite">
                  {error}
                </p>
              ))}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Confirm your new password"
            />
            {state?.errors?.confirmPassword &&
              state.errors.confirmPassword.errors.map((error) => (
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
            {isPending ? "Resetting..." : "Reset Password"}
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
