'use client';

import { Grid, Stack } from '@mantine/core';
import { venilleLayout } from '@/core/themes/venille-colors';

interface SplitSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
}

export function SplitSection({ left, right, reverse }: SplitSectionProps) {
  return (
    <Grid gutter={{ base: 'xl', md: venilleLayout.sectionGap }} align="flex-start">
      <Grid.Col
        span={{ base: 12, md: 5 }}
        order={{ base: 1, md: reverse ? 2 : 1 }}
        style={{ position: 'relative' }}
      >
        <BoxSticky>{left}</BoxSticky>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: reverse ? 1 : 2 }}>
        {right}
      </Grid.Col>
    </Grid>
  );
}

function BoxSticky({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      gap="md"
      style={{
        position: 'sticky',
        top: 100,
      }}
    >
      {children}
    </Stack>
  );
}
