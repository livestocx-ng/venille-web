'use client';

import { Box, Container, Stack } from '@mantine/core';
import { PageHero } from '@/core/components/ui';
import { venilleColors } from '@/core/themes/venille-colors';

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, subtitle, children }: LegalPageLayoutProps) {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: venilleColors.background }}>
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} />
      <Box pb={{ base: 64, md: 96 }}>
        <Container size="sm">
          <Stack
            gap="lg"
            style={{
              color: venilleColors.text,
              lineHeight: 1.75,
              fontSize: '0.95rem',
            }}
          >
            {children}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
