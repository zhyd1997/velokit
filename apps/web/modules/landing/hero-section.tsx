import type { FC } from "react";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";

import { Github, Zap } from "lucide-react";

import Link from "next/link";
import { APP_CONFIG } from "@/config/app";

export type HeroSectionProps = {};

export const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          <Zap className="h-3 w-3 mr-1" />
          Next.js 15 Ready
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          VeloKit
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A modern fullstack starter kit powered by Next.js 15, Supabase, and
          Prisma. Build production-ready applications with authentication,
          database, and UI components out of the box.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            <Github className="h-4 w-4 mr-2" />
            <Link href={APP_CONFIG.GITHUB_REPO_URL} target="_blank">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
