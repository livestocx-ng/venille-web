'use client';

import Link from 'next/link';
import { Anchor, Grid, Stack } from '@mantine/core';
import { FAQAccordion, type FAQItem } from './FAQAccordion';
import { SectionHeader } from './SectionHeader';
import { venilleColors } from '@/core/themes/venille-colors';

interface FAQPanelProps {
  title: string;
  accent?: string;
  description?: string;
  items: FAQItem[];
  viewAllHref?: string;
}

export function FAQPanel({
  title,
  accent,
  description,
  items,
  viewAllHref = '/about-us#faq',
}: FAQPanelProps) {
  return (
    <Stack gap={venilleGap}>
      <SectionHeader title={title} accent={accent} description={description} eyebrow="FAQ" />
      <Grid gutter={{ base: 'xl', md: 48 }} align="center" justify="center">
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Stack gap="lg">
            <FAQAccordion items={items} numbered />
            <Anchor component={Link} href={viewAllHref} fw={700} c={venilleColors.primary} size="sm" ta="center">
              View all FAQs →
            </Anchor>
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}

const venilleGap = 48;
