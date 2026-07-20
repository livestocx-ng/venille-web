'use client';

import Link from 'next/link';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';
import classes from './mochi.module.css';

interface CommunityBannerProps {
  count: string;
  label: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CommunityBanner({
  count,
  label,
  description,
  primaryHref = '/contact-us',
  primaryLabel = 'Get started',
  secondaryHref = '/contact-us',
  secondaryLabel = 'Learn more',
}: CommunityBannerProps) {
  return (
    <div className={classes.communityBanner}>
      <Stack gap="xl" align="center">
        <Stack gap="xs" align="center" ta="center">
          <Text size="sm" fw={600} c="rgba(255,255,255,0.85)" tt="uppercase" style={{ letterSpacing: '2px' }}>
            Join Venille
          </Text>
          <Title order={2} fw={900} c={venilleColors.white} style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-1px' }}>
            Join a community of{' '}
            <Text component="span" inherit c={venilleColors.primaryMuted}>
              {count}
            </Text>{' '}
            {label}
          </Title>
          {description && (
            <Text maw={480} c="rgba(255,255,255,0.8)" style={{ lineHeight: 1.7 }}>
              {description}
            </Text>
          )}
        </Stack>
        <Group gap="md" justify="center">
          <Button
            component={Link}
            href={primaryHref}
            radius="xl"
            size="md"
            px={28}
            style={{ background: venilleColors.white, color: venilleColors.ink, fontWeight: 700 }}
          >
            {primaryLabel}
          </Button>
          <Button
            component={Link}
            href={secondaryHref}
            radius="xl"
            size="md"
            px={28}
            variant="outline"
            style={{ borderColor: 'rgba(255,255,255,0.5)', color: venilleColors.white }}
          >
            {secondaryLabel}
          </Button>
        </Group>
      </Stack>
    </div>
  );
}
