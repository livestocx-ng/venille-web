'use client';

import { Box, Grid, Stack, Text, Title } from '@mantine/core';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

interface SpotlightSectionProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  chips?: string[];
  cta?: React.ReactNode;
  visual: React.ReactNode;
  reverse?: boolean;
  light?: boolean;
}

export function SpotlightSection({
  eyebrow,
  title,
  accent,
  description,
  chips,
  cta,
  visual,
  reverse,
  light,
}: SpotlightSectionProps) {
  return (
    <Grid gutter={{ base: 'xl', md: 64 }} align="center">
      <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: reverse ? 2 : 1 }}>
        <Stack gap="lg">
          {eyebrow && (
            <Text
              size="xs"
              fw={700}
              tt="uppercase"
              c={light ? venilleColors.primaryMuted : venilleColors.primary}
              style={{ letterSpacing: '2px' }}
            >
              {eyebrow}
            </Text>
          )}
          <Title
            order={2}
            style={{
              fontSize: venilleTypography.section,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: light ? venilleColors.white : venilleColors.ink,
            }}
          >
            {title}
            {accent && (
              <>
                {' '}
                <Text
                  component="span"
                  inherit
                  style={{
                    fontStyle: 'italic',
                    color: light ? venilleColors.primaryLight : venilleColors.primary,
                  }}
                >
                  {accent}
                </Text>
              </>
            )}
          </Title>
          <Text
            c={light ? 'rgba(255,255,255,0.78)' : venilleColors.textMuted}
            style={{ lineHeight: 1.75, fontSize: venilleTypography.body, maxWidth: venilleLayout.contentMax }}
          >
            {description}
          </Text>
          {chips && chips.length > 0 && (
            <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {chips.map((chip) => (
                <Text
                  key={chip}
                  size="sm"
                  fw={600}
                  px={14}
                  py={8}
                  style={{
                    borderRadius: venilleLayout.radius.pill,
                    background: light ? 'rgba(255,255,255,0.1)' : venilleColors.white,
                    border: `1px solid ${light ? 'rgba(255,255,255,0.15)' : venilleColors.border}`,
                    color: light ? venilleColors.white : venilleColors.ink,
                  }}
                >
                  {chip}
                </Text>
              ))}
            </Box>
          )}
          {cta}
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: reverse ? 1 : 2 }}>
        {visual}
      </Grid.Col>
    </Grid>
  );
}
