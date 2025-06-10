import type { ReactNode } from "react";

export default function ResetPasswordLayout({
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
