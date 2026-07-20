'use client';

import { Stack, Text } from '@mantine/core';
import { SectionTitle } from './SectionTitle';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

interface SectionIntroProps {
  step?: string;
  label: string;
  title: string;
  accent?: string;
  description?: string;
  light?: boolean;
}

export function SectionIntro({ step, label, title, accent, description, light }: SectionIntroProps) {
  const eyebrow = step ? `${step} · ${label}` : label;

  return (
    <Stack gap="md" maw={venilleLayout.contentMax}>
      <Text
        size="xs"
        fw={700}
        tt="uppercase"
        c={light ? venilleColors.primaryMuted : venilleColors.primary}
        style={{ letterSpacing: '2px' }}
      >
        {eyebrow}
      </Text>
      <SectionTitle accent={accent} light={light}>
        {title}
      </SectionTitle>
      {description && (
        <Text
          c={light ? 'rgba(255,255,255,0.78)' : venilleColors.textMuted}
          style={{ lineHeight: 1.75, fontSize: venilleTypography.body }}
        >
          {description}
        </Text>
      )}
    </Stack>
  );
}
