import type { ReactNode } from "react";

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      {children}
    </main>
  );
}
