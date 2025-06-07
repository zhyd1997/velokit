import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "@workspace/ui/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js 15 Starter Kit with Turborepo",
  description:
    "A modern monorepo starter kit featuring Next.js 15, Turborepo, shadcn/ui, Tailwind CSS v4, Supabase, and Prisma - perfect for building scalable full-stack applications with efficient monorepo architecture",
  keywords: [
    "nextjs",
    "next.js 15",
    "turborepo",
    "monorepo",
    "shadcn",
    "tailwindcss",
    "supabase",
    "prisma",
    "starter kit",
    "fullstack",
    "typescript",
    "react",
    "pnpm",
    "workspace",
  ],
  authors: [{ name: "zhyd1997" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Next.js 15 Starter Kit with Turborepo",
    description:
      "A modern monorepo starter kit featuring Next.js 15, Turborepo, shadcn/ui, Tailwind CSS v4, Supabase, and Prisma - perfect for building scalable full-stack applications with efficient monorepo architecture",
    siteName: "Next.js 15 Starter Kit with Turborepo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15 Starter Kit with Turborepo",
    description:
      "A modern monorepo starter kit featuring Next.js 15, Turborepo, shadcn/ui, Tailwind CSS v4, Supabase, and Prisma - perfect for building scalable full-stack applications with efficient monorepo architecture",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
