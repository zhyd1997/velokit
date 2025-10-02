"use client";

import type { FC } from "react";
import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@workspace/ui/components/button";
import { ModeToggle } from "@/components/mode-toggle";

import { gsap } from "gsap";

export type LandingHeaderProps = {
  isAuth: boolean;
};

export const LandingHeader: FC<LandingHeaderProps> = ({ isAuth }) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Logo + Brand
    tl.from(".header-logo", { x: -50, opacity: 0 });

    // Nav links stagger
    tl.from(".nav-link", { y: -20, opacity: 0, stagger: 0.2 }, "-=0.5");

    // Mode toggle + button
    tl.from(".header-action", { scale: 0.8, opacity: 0 }, "-=0.3");
  }, []);

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 header-logo">
          <Image
            src="/icon0.svg"
            alt="logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="font-bold text-xl">VeloKit</span>
        </div>

        {/* Actions + Navigation */}
        <div className="flex items-center space-x-2 header-action">
          <ModeToggle />
          <nav className="hidden md:flex items-center space-x-6 ml-4">
            <Link
              href="#features"
              className="text-sm hover:text-primary transition-colors nav-link"
            >
              Features
            </Link>
            <Link
              href="#tech-stack"
              className="text-sm hover:text-primary transition-colors nav-link"
            >
              Tech Stack
            </Link>
            <Link
              href="#docs"
              className="text-sm hover:text-primary transition-colors nav-link"
            >
              Docs
            </Link>
            {isAuth ? (
              <Button variant="outline" size="sm" className="nav-link">
                <Link href="/private">Dashboard</Link>
              </Button>
            ) : (
              <Button size="sm" className="nav-link">
                <Link href="/login">Get Started</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
