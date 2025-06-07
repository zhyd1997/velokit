import type { FC } from "react";

import { Button } from "@workspace/ui/components/button";
import { FileText, ExternalLink } from "lucide-react";

export type CtaSectionProps = {};

export const CtaSection: FC<CtaSectionProps> = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get started with VeloKit and ship your next project faster than ever
          before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Get Started Now
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8">
            <FileText className="h-4 w-4 mr-2" />
            Read Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};
