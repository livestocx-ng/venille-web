'use client';

import { Box, Group, Stack, Text, Title } from '@mantine/core';
import { IconProps } from '@tabler/icons-react';
import { venilleColors } from '@/core/themes/venille-colors';
import classes from './bento.module.css';

interface FeatureCardProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  description: string;
  bullets?: string[];
  light?: boolean;
}

export function FeatureCard({ icon: Icon, title, description, bullets, light }: FeatureCardProps) {
  return (
    <Box className={light ? classes.bentoCardDark : classes.featureCard} p="xl">
      <Stack gap="md" h="100%">
        <Box
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: light ? 'rgba(255,255,255,0.12)' : venilleColors.primarySubtle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={22} color={light ? venilleColors.primaryLight : venilleColors.primary} stroke={2} />
        </Box>
        <Title order={4} fw={800} c={light ? venilleColors.white : venilleColors.ink}>
          {title}
        </Title>
        <Text size="sm" c={light ? 'rgba(255,255,255,0.75)' : venilleColors.textMuted} style={{ lineHeight: 1.65 }}>
          {description}
        </Text>
        {bullets && (
          <Stack gap={6}>
            {bullets.map((b) => (
              <Group key={b} gap={8} wrap="nowrap" align="flex-start">
                <Box
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: venilleColors.primary,
                    marginTop: 6,
                    flexShrink: 0,
                  }}
                />
                <Text size="sm" c={light ? venilleColors.white : venilleColors.text}>
                  {b}
                </Text>
              </Group>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
