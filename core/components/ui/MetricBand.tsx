'use client';

import { Box, SimpleGrid, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/core/utilities/motion';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

export interface MetricItem {
  value: React.ReactNode;
  label: string;
}

interface MetricBandProps {
  metrics: MetricItem[];
  light?: boolean;
}

export function MetricBand({ metrics, light }: MetricBandProps) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg">
        {metrics.map((metric) => (
          <motion.div key={metric.label} variants={fadeUp}>
            <Box
              p="lg"
              style={{
                borderRadius: venilleLayout.bento.radius,
                background: light ? 'rgba(255,255,255,0.08)' : venilleColors.inkSoft,
                border: `1px solid ${light ? venilleLayout.glass.darkBorder : venilleColors.border}`,
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Text
                fw={900}
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  lineHeight: 1,
                  letterSpacing: '-1.5px',
                  color: light ? venilleColors.white : venilleColors.primary,
                }}
              >
                {metric.value}
              </Text>
              <Text
                mt="sm"
                size="sm"
                style={{
                  lineHeight: 1.5,
                  color: light ? 'rgba(255,255,255,0.7)' : venilleColors.textMuted,
                }}
              >
                {metric.label}
              </Text>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </motion.div>
  );
}
