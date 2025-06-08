"use client";

import type { FC } from "react";

import { useTransition } from "react";

import { Button } from "@workspace/ui/components/button";
import { logOut } from "@/app/actions/auth";

export type SignoutButtonProps = {};

export const SignoutButton: FC<SignoutButtonProps> = () => {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(logOut);
  };

  return (
    <Button className="hover:cursor-pointer" onClick={handleLogout}>
      {isPending ? "Signing out..." : "Sign Out"}
    </Button>
  );
};
