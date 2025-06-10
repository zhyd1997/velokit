"use client";

import type { FC } from "react";
import { useActionState } from "react";
import Link from "next/link";
import { loginAction } from "@/app/actions/auth/login";

export type LoginFormProps = {};

export const LoginForm: FC<LoginFormProps> = () => {
  const [state, action, isPending] = useActionState(loginAction, undefined);

  return (
    <form className="w-full max-w-md p-8 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
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
          />
          {state?.errors?.email &&
            state.errors.email.errors.map((error) => (
              <p className="text-red-500" key={error} aria-live="polite">
                {error}
              </p>
            ))}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          {state?.errors?.password &&
            state.errors.password.errors.map((error) => (
              <p className="text-red-500" key={error} aria-live="polite">
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <button
          disabled={isPending}
          formAction={action}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          aria-busy={isPending}
        >
          {isPending ? "Logging in..." : "Log in"}
        </button>
        <p className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {state?.message && (
        <p className="text-red-500" aria-live="polite">
          {state?.message}
        </p>
      )}
    </form>
  );
};
