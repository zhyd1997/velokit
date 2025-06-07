import type { FC } from "react";

import { Code2, Zap, Folder, Settings } from "lucide-react";

type FeatureItemProps = {
  icon: any;
  title: string;
  description: string;
};

const FeatureItem: FC<FeatureItemProps> = (props) => {
  const { icon: Icon, title, description } = props;

  return (
    <div className="flex items-start space-x-3">
      <Icon className="h-5 w-5 text-primary mt-0.5" />
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export type DevExperienceSectionProps = {};

export const DevExperienceSection: FC<DevExperienceSectionProps> = () => {
  const features = [
    {
      key: "zero-config",
      icon: Settings,
      title: "Zero-config Tailwind CSS v4",
      description: "Latest Tailwind CSS with zero configuration required",
    },
    {
      key: "monorepo-structure",
      icon: Folder,
      title: "Monorepo Structure",
      description: "Organized monorepo with apps and shared packages",
    },
    {
      key: "typescript-ready",
      icon: Code2,
      title: "TypeScript Ready",
      description: "Full TypeScript support with strict type checking",
    },
    {
      key: "hot-reload",
      icon: Zap,
      title: "Hot Reload",
      description: "Instant feedback with Next.js Fast Refresh",
    },
    {
      key: "shared-packages",
      icon: Code2,
      title: "Shared Packages",
      description: "Reusable UI, database, and configuration packages",
    },
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Developer Experience First
          </h2>
          <p className="text-muted-foreground">
            Optimized for productivity with modern tooling and best practices
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">What's Included</h3>
            <div className="space-y-4">
              {features.map(({ key, ...feature }) => (
                <FeatureItem key={key} {...feature} />
              ))}
            </div>
          </div>
          <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-6 text-green-400 font-mono text-sm border dark:border-slate-800">
            <div className="mb-4 text-slate-400 dark:text-slate-500">
              Project Structure
            </div>
            <div className="space-y-1">
              <div className="text-slate-400 dark:text-slate-500">
                <span className="text-purple-400">
                  <i>!</i>
                </span>{" "}
                pnpm-workspace.yaml
              </div>
              <div>📁 apps/</div>
              <div className="ml-4">📁 web/</div>
              <div>📁 packages/</div>
              <div className="ml-4">📁 db/</div>
              <div className="ml-4">📁 eslint-config/</div>
              <div className="ml-4">📁 typescript-config/</div>
              <div className="ml-4">📁 ui/</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
