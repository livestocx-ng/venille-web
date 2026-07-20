'use client';

import Link from 'next/link';
import { Anchor, Avatar, Grid, Stack, Text, Title } from '@mantine/core';
import { FAQAccordion, type FAQItem } from './FAQAccordion';
import { SectionHeader } from './SectionHeader';
import { venilleColors } from '@/core/themes/venille-colors';
import classes from './mochi.module.css';

interface FAQPanelProps {
  title: string;
  accent?: string;
  description?: string;
  items: FAQItem[];
  // expert: {
  //   name: string;
  //   role: string;
  //   image: string;
  //   credential?: string;
  // };
  viewAllHref?: string;
}

export function FAQPanel({
  title,
  accent,
  description,
  items,
  // expert,
  viewAllHref = '/about-us#faq',
}: FAQPanelProps) {
  return (
    <Stack gap={venilleGap}>
      <SectionHeader title={title} accent={accent} description={description} eyebrow="FAQ" />
      <Grid gutter={{ base: 'xl', md: 48 }} align="center" justify="center">
        {/* <Grid.Col span={{ base: 12, md: 4 }}>
          <div className={classes.expertCard}>
            <Stack gap="md" align="center" ta="center">
              <Avatar src={expert.image} size={80} radius="xl" />
              <Stack gap={4}>
                <Title order={5} fw={800} c={venilleColors.ink}>
                  {expert.name}
                </Title>
                <Text size="sm" c={venilleColors.textMuted}>
                  {expert.role}
                </Text>
                {expert.credential && (
                  <Text size="xs" fw={700} c={venilleColors.primary}>
                    {expert.credential}
                  </Text>
                )}
              </Stack>
            </Stack>
          </div>
        </Grid.Col> */}
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
