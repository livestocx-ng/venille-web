'use client';

import { SimpleGrid, Stack } from '@mantine/core';
import { JourneySection, ProductRailCard, SectionHeader } from '@/core/components/ui';
import { appFeatures } from '@/core/utilities';

const comparisonImages = [
  '/images/product/biodegradable_materials.png',
  '/images/product/skin_safety.png',
  '/images/product/carbon_footprint.png',
];

export default function ComparisonSection() {
  return (
    <JourneySection id="comparison" bg="white">
      <Stack gap={48}>
        <SectionHeader
          eyebrow="Why Venille"
          title="The shortest route away"
          accent="from conventional pads."
          description="Same need, same outcome — but look how much harm conventional pads leave behind."
        />
        <SimpleGrid
          cols={{ base: 1, md: 3 }}
          spacing="xl"
          style={{ width: '100%', maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}
        >
          {appFeatures.map((row, index) => (
            <ProductRailCard
              key={row.id}
              badge="Venille wins"
              title={row.feature}
              description={row.livestocx.text}
              contrast={row.custom.text}
              image={comparisonImages[index]}
              imageAlt={row.feature}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </JourneySection>
  );
}

