import type { FC } from "react";

import { Code2 } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

import Link from "next/link";
import Image from "next/image";

import { APP_CONFIG } from "@/config/app";

type FooterLink = {
  href: string;
  label: string;
  imgSrc?: string;
};

type FooterSectionProps = {
  title: string;
  links: FooterLink[];
};

const FooterSection: FC<FooterSectionProps> = (props) => {
  const { title, links } = props;

  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map(({ label, href, imgSrc }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              className={cn(
                "hover:text-primary",
                imgSrc ? "flex flex-row gap-2" : "transition-colors",
              )}
            >
              {imgSrc && (
                <Image
                  src={imgSrc}
                  alt={`${label} icon`}
                  width={20}
                  height={20}
                  className="invert-0 dark:invert-1 bg-white"
                />
              )}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export type LandingFooterProps = {};

export const LandingFooter: FC<LandingFooterProps> = () => {
  const footerSections = [
    {
      id: "resources",
      title: "Resources",
      links: [
        { href: "#", label: "Documentation" },
        { href: "#", label: "Examples" },
        { href: "#", label: "Tutorials" },
      ],
    },
    {
      id: "community",
      title: "Community",
      links: [
        {
          href: APP_CONFIG.GITHUB_REPO_URL,
          label: "GitHub",
          imgSrc: "/images/github.svg",
        },
        { href: "#", label: "Discord", imgSrc: "/images/discord.svg" },
        { href: APP_CONFIG.X_LINK, label: "X", imgSrc: "/images/x.svg" },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      links: [
        { href: "#", label: "MIT License" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
      ],
    },
  ];

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6" />
              <span className="font-bold text-xl">VeloKit</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A modern fullstack starter kit for building production-ready
              applications.
            </p>
          </div>
          {footerSections.map((section) => (
            <FooterSection
              key={section.id}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VeloKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
