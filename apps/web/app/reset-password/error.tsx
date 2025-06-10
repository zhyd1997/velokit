"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

export default function ResetPasswordErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Something went wrong!</CardTitle>
        <CardDescription>
          An error occurred while resetting your password
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground mb-4">
          Please try again or contact support if the problem persists.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={reset} className="w-full">
          Try again
        </Button>
      </CardFooter>
    </Card>
  );
}
