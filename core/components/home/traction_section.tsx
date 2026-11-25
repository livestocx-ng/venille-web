'use client';

import CountUp from 'react-countup';
import { Box, Container, Group, Stack, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, venilleEase } from '@/core/utilities/motion';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

const supportingMetrics = [
  { value: '85%', label: 'Pads from agricultural waste' },
  { value: '6+', label: 'Global awards & recognitions' },
  { value: 'Nigeria', label: 'Local production & outreach' },
];

export default function TractionSection() {
  return (
    <Box
      component="section"
      id="traction"
      py={venilleLayout.sectionPy}
      style={{
        position: 'relative',
        overflow: 'hidden',
        color: venilleColors.white,
        backgroundColor: venilleColors.ink,
        backgroundImage: `
          linear-gradient(105deg, rgba(16, 18, 24, 0.94) 0%, rgba(16, 18, 24, 0.78) 48%, rgba(8, 74, 243, 0.45) 100%),
          url("/images/traction/african-school-girls.jpg")
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container size={venilleLayout.containerSize}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <Stack gap={{ base: 40, md: 56 }} maw={640}>
            <motion.div variants={fadeUp}>
              <Text
                size="xs"
                fw={600}
                tt="uppercase"
                style={{
                  letterSpacing: '2.4px',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Traction so far
              </Text>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Stack gap={10}>
                {/* <Text
                  size="sm"
                  fw={600}
                  tt="uppercase"
                  style={{
                    letterSpacing: '2px',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  Made from agricultural waste
                </Text> */}
                <Text
                  fw={900}
                  style={{
                    fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                    lineHeight: 0.95,
                    letterSpacing: '-3px',
                    color: venilleColors.primaryMuted,
                  }}
                >
                  <CountUp end={43200} duration={2.4} separator="," enableScrollSpy scrollSpyOnce />
                  <Text component="span" inherit>
                    +
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: venilleTypography.body,
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.5,
                  }}
                >
                  Girls &amp; women reached through our sanitary pads and digital care
                </Text>
              </Stack>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Box
                pt={{ base: 8, md: 12 }}
                style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}
              >
                <Group
                  gap={{ base: 28, md: 48 }}
                  align="flex-start"
                  wrap="wrap"
                  pt={{ base: 28, md: 32 }}
                >
                  {supportingMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.08, duration: 0.45, ease: venilleEase }}
                    >
                      <Stack gap={4}>
                        <Text
                          fw={800}
                          style={{
                            fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                            letterSpacing: '-0.5px',
                            color: venilleColors.white,
                            lineHeight: 1.1,
                          }}
                        >
                          {metric.value}
                        </Text>
                        <Text
                          size="sm"
                          maw={160}
                          style={{
                            color: 'rgba(255,255,255,0.65)',
                            lineHeight: 1.45,
                          }}
                        >
                          {metric.label}
                        </Text>
                      </Stack>
                    </motion.div>
                  ))}
                </Group>
              </Box>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
