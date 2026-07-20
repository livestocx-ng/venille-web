'use client';

import { Stack } from '@mantine/core';
import { Section } from './Section';
import { venilleLayout } from '@/core/themes/venille-colors';

type SectionBg = 'default' | 'white' | 'surface' | 'cream' | 'ink';

interface JourneySectionProps {
  id?: string;
  bg?: SectionBg;
  children: React.ReactNode;
}

/** Homepage section shell — uniform vertical padding and inner spacing. */
export function JourneySection({ id, bg = 'white', children }: JourneySectionProps) {
  return (
    <Section id={id} bg={bg} py={venilleLayout.sectionPy}>
      <Stack gap={venilleLayout.sectionGap}>{children}</Stack>
    </Section>
  );
}
