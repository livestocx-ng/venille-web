'use client';

import { Box, Text } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

interface JourneyRouteProps {
  light?: boolean;
}

export function JourneyRoute({ light }: JourneyRouteProps) {
  return (
    <Box
      py="md"
      style={{
        borderTop: `1px solid ${light ? 'rgba(255,255,255,0.12)' : venilleColors.border}`,
        borderBottom: `1px solid ${light ? 'rgba(255,255,255,0.12)' : venilleColors.border}`,
      }}
    >
      <Text
        size="xs"
        fw={700}
        tt="uppercase"
        c={light ? venilleColors.primaryMuted : venilleColors.primary}
        style={{ letterSpacing: '2.5px' }}
      >
        Follow the journey
      </Text>
    </Box>
  );
}
