"use client";

import type { FC } from "react";

import Image from "next/image";

import { cn } from "@workspace/ui/lib/utils";

type TechStackItemProps = {
  iconSrc: string;
  label: string;
  iconSrcDark?: string;
  hasBorder?: boolean;
  hasBackground?: boolean;
  className?: string;
};

const TechStackItem: FC<TechStackItemProps> = (props) => {
  const {
    iconSrc,
    label,
    iconSrcDark,
    hasBorder = false,
    hasBackground = false,
    className = "",
  } = props;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={`w-16 h-16 ${hasBackground ? "bg-black" : "bg-transparent"} ${hasBorder ? "border" : ""} rounded-lg flex items-center justify-center`}
      >
        <span className="text-white font-bold text-xl">
          <Image
            src={iconSrc}
            alt={`${label} icon`}
            width={64}
            height={64}
            className={cn(className, iconSrcDark && "dark:hidden")}
          />

          {iconSrcDark && (
            <Image
              src={iconSrcDark}
              alt={`${label} icon`}
              width={64}
              height={64}
              className={cn(className, "hidden dark:block")}
            />
          )}
        </span>
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export type TechStackSectionProps = {};

export const TechStackSection: FC<TechStackSectionProps> = () => {
  const techStackItems = [
    {
      key: "nextjs",
      iconSrc: "/images/light/nextjs-icon.svg",
      iconSrcDark: "/images/dark/nextjs-icon.svg",
      label: "Next.js 15",
      hasBackground: true,
    },
    {
      key: "tailwind",
      iconSrc: "/images/tailwindcss-mark.d52e9897.svg",
      label: "Tailwind CSS v4",
    },
    {
      key: "shadcn",
      iconSrc: "/images/shadcn-ui-icon.svg",
      label: "shadcn/ui",
      className: "dark:invert",
    },
    {
      key: "prisma",
      iconSrc: "/images/Prisma-IndigoSymbol.svg",
      label: "Prisma",
    },
    {
      key: "supabase",
      iconSrc: "/images/supabase-logo-icon.svg",
      label: "Supabase",
    },
  ];

  return (
    <section id="tech-stack" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-muted-foreground">
            Carefully selected tools for the best developer experience
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {techStackItems.map(({ key, ...item }) => (
            <TechStackItem key={key} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
