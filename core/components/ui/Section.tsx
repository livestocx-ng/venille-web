'use client';

import { Box, Container } from '@mantine/core';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

type SectionBg = 'default' | 'white' | 'surface' | 'cream' | 'ink';

const bgMap: Record<SectionBg, string> = {
  default: venilleColors.background,
  white: venilleColors.white,
  surface: venilleColors.surface,
  cream: venilleColors.cream,
  ink: venilleColors.ink,
};

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  bg?: SectionBg;
  py?: { base?: number; md?: number };
}

export function Section({ children, id, bg = 'default', py }: SectionProps) {
  const isDark = bg === 'ink';
  return (
    <Box
      component="section"
      id={id}
      py={py ?? venilleLayout.sectionPy}
      style={{
        backgroundColor: bgMap[bg],
        color: isDark ? venilleColors.white : undefined,
      }}
    >
      <Container size={venilleLayout.containerSize}>{children}</Container>
    </Box>
  );
}
