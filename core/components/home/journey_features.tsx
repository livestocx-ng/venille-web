'use client';

import { Stack } from '@mantine/core';
import { FeatureTabExplorer, JourneySection, SectionHeader } from '@/core/components/ui';
import { platformFeatures } from '@/core/utilities';
import { featureImages } from '@/core/utilities/home-journey';

const featureTabs = platformFeatures.map((feature, index) => ({
  id: `feature-${index}`,
  label: feature.title,
  description: feature.description,
  image: featureImages[index] ?? featureImages[0],
  imageAlt: feature.title,
  href: '/about-us',
}));

export default function JourneyFeaturesSection() {
  return (
    <JourneySection id="features" bg="white">
      <Stack gap={48}>
        <SectionHeader
          eyebrow="Our solution"
          title="What makes Venille"
          accent="different?"
          description="Sustainable menstrual care that saves the planet without sacrificing comfort or reliability."
        />
        <FeatureTabExplorer items={featureTabs} />
      </Stack>
    </JourneySection>
  );
}
