'use client';

import { Box, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeUp } from '@/core/utilities/motion';
import { Section } from './Section';
import { SectionEyebrow } from './SectionEyebrow';
import { SectionTitle } from './SectionTitle';
import { venilleColors } from '@/core/themes/venille-colors';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  children?: React.ReactNode;
  bg?: 'default' | 'white' | 'surface' | 'ink';
}

export function PageHero({ eyebrow, title, accent, subtitle, children, bg = 'white' }: PageHeroProps) {
  const isDark = bg === 'ink';

  return (
    <Section bg={bg} py={{ base: 108, md: 80 }}>
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <Stack gap="lg" maw={860} mx="auto" align="center" ta="center">
          {eyebrow && <SectionEyebrow light={isDark}>{eyebrow}</SectionEyebrow>}
          <SectionTitle accent={accent} light={isDark} size="section">
            {title}
          </SectionTitle>
          {subtitle && (
            <Box
              component="p"
              maw={640}
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                color: isDark ? 'rgba(255,255,255,0.78)' : venilleColors.textMuted,
                margin: 0,
              }}
            >
              {subtitle}
            </Box>
          )}
          {children}
        </Stack>
      </motion.div>
    </Section>
  );
}
