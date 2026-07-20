'use client';

import Link from 'next/link';
import { Button, Grid, Image, Stack, Text, Title } from '@mantine/core';
import { JourneySection } from '@/core/components/ui';
import { benchlingColors, venilleColors, venilleTypography } from '@/core/themes/venille-colors';

const CONSULATE_IMAGE = '/images/hero/IMG_6441(1).jpg';

export default function UsConsulateSection() {
  return (
    <JourneySection id="us-consulate" bg="white">
      <Grid gutter={{ base: 'xl', md: 64 }} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="lg" maw={560}>
            <Title
              order={2}
              className="benchling-heading"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: benchlingColors.heading,
              }}
            >
              We got invited to the US Consulate!
            </Title>
            <Text
              style={{
                fontSize: venilleTypography.body,
                lineHeight: 1.75,
                color: venilleColors.textMuted,
              }}
            >
              Our CEO, Esther Oluwabunmi Olalude, was a part of the U.S. Consulate General Lagos&apos;
              Speaker Program on Artificial Intelligence: &ldquo;AI for Business: Driving Innovation and
              Productivity&rdquo; held on Wednesday, February 25, 2026, at 21st Century Technologies,
              Lekki Phase 1, which was organized by the Public Diplomacy Section of the U.S. Department
              of State, and brought together tech professionals, business leaders, entrepreneurs, and
              U.S. government exchange alumni. The panel, which included visiting U.S. AI expert Dr.
              Omoju Miller&hellip;
            </Text>
            <Button
              component={Link}
              href="/us-consulate"
              radius="xl"
              size="md"
              fz={14}
              w="fit-content"
              tt="uppercase"
              fw={600}
              style={{ letterSpacing: '0.04em' }}
            >
              Read more
            </Button>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src={CONSULATE_IMAGE}
            alt="Esther Oluwabunmi Olalude at the U.S. Consulate General Lagos"
            radius={12}
            h={{ base: 280, sm: 320, md: 560 }}
            w="100%"
            style={{ objectFit: 'contain' }}
          />
        </Grid.Col>
      </Grid>
    </JourneySection>
  );
}
