'use client';

import { Box, Button, Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABand({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABandProps) {
  return (
    <Box
      py={{ base: 48, md: 64 }}
      px="md"
      style={{
        background: `linear-gradient(135deg, ${venilleColors.primary} 0%, ${venilleColors.primaryDark} 100%)`,
        borderRadius: venilleLayout.radius.card,
      }}
    >
      <Stack align="center" gap="lg" ta="center">
        <Text
          component="h2"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 800,
            color: venilleColors.white,
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text size="md" maw={520} style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            {subtitle}
          </Text>
        )}
        <Group gap="md" justify="center">
          <Button
            component={Link}
            href={primaryHref}
            size="lg"
            radius="xl"
            style={{
              background: venilleColors.white,
              color: venilleColors.primary,
              fontWeight: 700,
            }}
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              component={Link}
              href={secondaryHref}
              size="lg"
              radius="xl"
              variant="outline"
              style={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: venilleColors.white,
                fontWeight: 600,
              }}
            >
              {secondaryLabel}
            </Button>
          )}
        </Group>
      </Stack>
    </Box>
  );
}
