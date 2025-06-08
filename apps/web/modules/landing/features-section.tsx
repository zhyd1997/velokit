import type { FC } from "react";
import { Database, Lock, Palette, Zap, CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

type FeatureCardProps = {
  icon: any;
  title: string;
  description: string;
  features: string[];
};

const FeatureCard: FC<FeatureCardProps> = (props) => {
  const { icon: Icon, title, description, features } = props;

  return (
    <Card>
      <CardHeader>
        <Icon className="h-8 w-8 text-primary mb-2" />
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export type FeaturesSectionProps = {};

export const FeaturesSection: FC<FeaturesSectionProps> = () => {
  const features = [
    {
      key: "auth",
      icon: Lock,
      title: "Authentication",
      description: "Email login & social auth with Supabase Auth",
      features: [
        "Email/Password login",
        "Social providers",
        "Protected routes",
      ],
    },
    {
      key: "database",
      icon: Database,
      title: "Database Schema",
      description: "Type-safe database with Prisma ORM",
      features: ["Prisma schema", "Type generation", "Migrations"],
    },
    {
      key: "supabase",
      icon: Zap,
      title: "Supabase Integration",
      description: "Real-time database and storage",
      features: ["Real-time subscriptions", "File storage", "Edge functions"],
    },
    {
      key: "ui",
      icon: Palette,
      title: "UI Components",
      description: "Beautiful components with shadcn/ui",
      features: ["40+ components", "Dark mode support", "Fully customizable"],
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything You Need to Start Building
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Skip the setup and focus on building your product with these
            pre-configured features
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ key, ...feature }) => (
            <FeatureCard key={key} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
