'use client';

import { Box, Stack, Text } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';
import classes from './bento.module.css';

interface BentoCardProps {
  children: React.ReactNode;
  badge?: string;
  light?: boolean;
  padding?: 'md' | 'lg' | 'xl';
}

const paddingMap = { md: 16, lg: 24, xl: 32 };

export function BentoCard({ children, badge, light, padding = 'lg' }: BentoCardProps) {
  return (
    <Box className={light ? classes.bentoCardDark : classes.bentoCard} p={paddingMap[padding]}>
      <Stack gap="md" h="100%">
        {badge && (
          <Text
            size="xs"
            fw={700}
            tt="uppercase"
            c={light ? venilleColors.primaryMuted : venilleColors.primary}
            style={{ letterSpacing: '1.5px' }}
          >
            {badge}
          </Text>
        )}
        {children}
      </Stack>
    </Box>
  );
}
