'use client';

import { SimpleGrid, Stack, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/core/utilities/motion';
import { venilleColors } from '@/core/themes/venille-colors';

export interface StatItem {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: StatItem[];
  light?: boolean;
  variant?: 'cards' | 'editorial';
}

export function StatsBar({ stats, light, variant = 'cards' }: StatsBarProps) {
  if (variant === 'editorial') {
    return (
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing={{ base: 'lg', md: 'xl' }}>
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Stack gap={6}>
                <Text
                  fw={900}
                  style={{
                    fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    color: light ? venilleColors.white : venilleColors.ink,
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  size="sm"
                  c={light ? 'rgba(255,255,255,0.65)' : venilleColors.textMuted}
                  style={{ lineHeight: 1.5, maxWidth: 200 }}
                >
                  {stat.label}
                </Text>
              </Stack>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
    );
  }

  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <Stack gap={4} align="center" ta="center" p="lg">
              <Text
                fw={900}
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  color: light ? venilleColors.white : venilleColors.primary,
                  letterSpacing: '-1px',
                }}
              >
                {stat.value}
              </Text>
              <Text size="sm" c={light ? 'rgba(255,255,255,0.75)' : venilleColors.textMuted}>
                {stat.label}
              </Text>
            </Stack>
          </motion.div>
        ))}
      </SimpleGrid>
    </motion.div>
  );
}
