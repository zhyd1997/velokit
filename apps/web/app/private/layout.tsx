import { getUser } from "@/lib/dal/user";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const user = await getUser();

  if (!user) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
