'use client';

import Link from 'next/link';
import { Anchor, Stack, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { SectionTitle } from './SectionTitle';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  light?: boolean;
  align?: 'left' | 'center';
  action?: { href: string; label: string };
  maw?: number;
}

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  light,
  align = 'center',
  action,
  maw = venilleLayout.contentMax,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <Stack gap="md" align={isCenter ? 'center' : 'flex-start'} ta={isCenter ? 'center' : 'left'} maw={isCenter ? maw : undefined} mx={isCenter ? 'auto' : undefined}>
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
      <SectionTitle accent={accent} light={light} maw={maw}>
        {title}
      </SectionTitle>
      {description && (
        <Text
          maw={maw}
          c={light ? 'rgba(255,255,255,0.78)' : venilleColors.textMuted}
          style={{ lineHeight: 1.75, fontSize: venilleTypography.body }}
        >
          {description}
        </Text>
      )}
      {action && (
        <Anchor
          component={Link}
          href={action.href}
          fw={700}
          c={light ? venilleColors.primaryLight : venilleColors.primary}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9375rem' }}
        >
          {action.label} <IconArrowRight size={16} />
        </Anchor>
      )}
    </Stack>
  );
}
