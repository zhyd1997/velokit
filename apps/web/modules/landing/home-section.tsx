import type { FC } from "react";

import type { LandingHeaderProps } from "./landing-header";
import { LandingHeader } from "./landing-header";
import { HeroSection } from "./hero-section";
import { FeaturesSection } from "./features-section";
import { DevExperienceSection } from "./dev-experience-section";
import { CtaSection } from "./cta-section";
import { LandingFooter } from "./landing-footer";
import { TechStackSection } from "./tech-stack-section";

export type LandingHomeProps = LandingHeaderProps;

export const LandingHome: FC<LandingHomeProps> = (props) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <LandingHeader {...props} />

      {/* Hero Section */}
      <HeroSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Developer Experience Section */}
      <DevExperienceSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <LandingFooter />
    </div>
  );
};
