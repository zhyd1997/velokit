import type { ReactNode } from "react";

export default function ForgotPasswordLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
