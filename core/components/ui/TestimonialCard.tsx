'use client';

import { Avatar, Box, Group, Stack, Text } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';
import { venilleColors, venilleTypography } from '@/core/themes/venille-colors';
import classes from './bento.module.css';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  avatarSrc?: string;
  verified?: boolean;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ quote, name, location, avatarSrc, verified }: TestimonialCardProps) {
  return (
    <Box className={classes.bentoCard} p="xl" style={{ minHeight: 240 }}>
      <Stack gap="lg" justify="space-between" h="100%">
        <Box>
          <Text
            size="xl"
            c={venilleColors.primaryMuted}
            style={{ lineHeight: 1, marginBottom: 8 }}
            aria-hidden
          >
            &ldquo;
          </Text>
          <Group gap={4} mb="sm">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStarFilled key={i} size={12} color={venilleColors.primary} />
            ))}
          </Group>
          <Text size="md" c={venilleColors.text} style={{ lineHeight: 1.75, fontSize: venilleTypography.body }}>
            {quote}
          </Text>
        </Box>
        <Group gap="sm" wrap="nowrap">
          <Avatar src={avatarSrc} radius="xl" size={40} color="blue">
            {!avatarSrc && getInitials(name)}
          </Avatar>
          <Stack gap={0} style={{ flex: 1 }}>
            <Group gap={6} wrap="nowrap">
              <Text size="sm" fw={800} c={venilleColors.ink}>
                {name}
              </Text>
              {verified && (
                <Text size="xs" fw={700} c={venilleColors.primary}>
                  Verified
                </Text>
              )}
            </Group>
            {location && (
              <Text size="xs" c={venilleColors.textMuted}>
                {location}
              </Text>
            )}
          </Stack>
        </Group>
      </Stack>
    </Box>
  );
}
