import type { FC } from "react";

import { Code2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@workspace/ui/components/button";

import { ModeToggle } from "@/components/mode-toggle";

export type LandingHeaderProps = {
  isAuth: boolean;
};

export const LandingHeader: FC<LandingHeaderProps> = (props) => {
  const { isAuth } = props;

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold text-xl">VeloKit</span>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <nav className="hidden md:flex items-center space-x-6 ml-4">
            <Link
              href="#features"
              className="text-sm hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#tech-stack"
              className="text-sm hover:text-primary transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              href="#docs"
              className="text-sm hover:text-primary transition-colors"
            >
              Docs
            </Link>
            {isAuth ? (
              <Button variant="outline" size="sm">
                <Link href="/private">Dashboard</Link>
              </Button>
            ) : (
              <Button size="sm">
                <Link href="/login">Get Started</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
