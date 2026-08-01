'use client';

import { Stack } from '@mantine/core';
import { JourneySection, SectionHeader, StepCarousel } from '@/core/components/ui';
import { howItWorksSteps } from '@/core/utilities/home-journey';

export default function HowItWorksSection() {
  return (
    <JourneySection id="how-it-works" bg="default">
      <Stack gap={48}>
        <SectionHeader
          eyebrow="How it works"
          title="Getting started should"
          accent="feel simple."
          description="From eco-friendly pads to digital health support, Venille is designed to make each step clear, supportive, and easy to follow."
          action={{ href: '/contact-us', label: 'Get started' }}
        />
        <StepCarousel steps={howItWorksSteps} />
      </Stack>
    </JourneySection>
  );
}
