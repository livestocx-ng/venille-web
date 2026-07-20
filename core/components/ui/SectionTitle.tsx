'use client';

import { Text, Title } from '@mantine/core';
import { venilleColors, venilleTypography } from '@/core/themes/venille-colors';

interface SectionTitleProps {
  children: React.ReactNode;
  accent?: string;
  light?: boolean;
  maw?: number;
  size?: 'section' | 'step';
}

export function SectionTitle({ children, accent, light, maw = 760, size = 'section' }: SectionTitleProps) {
  return (
    <Title
      order={2}
      maw={maw}
      style={{
        fontSize: size === 'step' ? venilleTypography.step : venilleTypography.section,
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: '-1.5px',
        color: light ? venilleColors.white : venilleColors.ink,
      }}
    >
      {children}
      {accent && (
        <>
          <br />
          <Text
            component="span"
            inherit
            style={{
              fontStyle: 'italic',
              fontWeight: 700,
              color: light ? venilleColors.primaryLight : venilleColors.primary,
            }}
          >
            {accent}
          </Text>
        </>
      )}
    </Title>
  );
}
