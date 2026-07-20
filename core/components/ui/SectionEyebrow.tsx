'use client';

import { Text } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

interface SectionEyebrowProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionEyebrow({ children, light }: SectionEyebrowProps) {
  return (
    <Text
      size="xs"
      fw={800}
      tt="uppercase"
      c={light ? venilleColors.primaryMuted : venilleColors.primary}
      style={{ letterSpacing: '2px' }}
    >
      {children}
    </Text>
  );
}
