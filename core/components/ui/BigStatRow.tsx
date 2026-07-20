'use client';

import { SimpleGrid, Stack, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/core/utilities/motion';
import { venilleColors } from '@/core/themes/venille-colors';

export interface BigStatItem {
  value: React.ReactNode;
  label: string;
  suffix?: string;
}

interface BigStatRowProps {
  stats: BigStatItem[];
  light?: boolean;
  cols?: { base: number; md: number };
}

export function BigStatRow({ stats, light, cols = { base: 1, md: 3 } }: BigStatRowProps) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <SimpleGrid cols={cols} spacing={{ base: 'xl', md: 'xl' }}>
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <Stack gap="sm" align="center" ta="center">
              <Text
                fw={900}
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  lineHeight: 1,
                  letterSpacing: '-2px',
                  color: light ? venilleColors.white : venilleColors.ink,
                }}
              >
                {stat.value}
                {stat.suffix && (
                  <Text
                    component="span"
                    inherit
                    style={{ fontSize: '0.45em', letterSpacing: '0', marginLeft: 4 }}
                  >
                    {stat.suffix}
                  </Text>
                )}
              </Text>
              <Text
                maw={280}
                size="sm"
                c={light ? 'rgba(255,255,255,0.7)' : venilleColors.textMuted}
                style={{ lineHeight: 1.6 }}
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
