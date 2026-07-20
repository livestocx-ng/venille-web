'use client';

import { JourneySection, CommunityBanner } from '@/core/components/ui';

export default function WhyChooseUsSection() {
  return (
    <JourneySection id="why-choose" bg="ink">
      <CommunityBanner
        count="18K+"
        label="lives impacted"
        description="We are solution-based, focused on tackling period poverty and saving the planet. Wholesale · Retail · Community partnerships."
        primaryLabel="Get in touch"
        secondaryLabel="Learn more"
      />
    </JourneySection>
  );
}
