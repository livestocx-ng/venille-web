'use client';

import { Box, Grid, Stack, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { fadeUp } from '@/core/utilities/motion';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

interface NumberedStepProps {
  step: string;
  label?: string;
  title: string;
  accent?: string;
  description: string;
  chips?: string[];
  image?: React.ReactNode;
  reverse?: boolean;
  light?: boolean;
  variant?: 'editorial' | 'compact';
}

export function NumberedStep({
  step,
  label,
  title,
  accent,
  description,
  chips,
  image,
  reverse,
  light,
  variant = 'editorial',
}: NumberedStepProps) {
  const stepSize = variant === 'compact' ? 'clamp(2rem, 4vw, 2.75rem)' : 'clamp(2.5rem, 5vw, 3.5rem)';

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
      <Grid gutter={{ base: 'xl', md: 64 }} align="center" style={{ flexDirection: reverse ? 'row-reverse' : undefined }}>
        <Grid.Col span={{ base: 12, md: image ? 6 : 12 }}>
          <Stack gap="lg">
            <Box
              style={{
                borderLeft: `3px solid ${light ? venilleColors.primaryLight : venilleColors.primary}`,
                paddingLeft: 20,
              }}
            >
              <Text
                fw={900}
                style={{
                  fontSize: stepSize,
                  lineHeight: 1,
                  letterSpacing: '-2px',
                  color: light ? venilleColors.primaryLight : venilleColors.primary,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {step}
              </Text>
              {label && (
                <Text
                  size="xs"
                  fw={700}
                  tt="uppercase"
                  mt={8}
                  c={light ? 'rgba(255,255,255,0.55)' : venilleColors.textMuted}
                  style={{ letterSpacing: '2px' }}
                >
                  {label}
                </Text>
              )}
            </Box>
            <Title
              order={3}
              style={{
                fontSize: venilleTypography.step,
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-1px',
                color: light ? venilleColors.white : venilleColors.ink,
              }}
            >
              {title}
              {accent && (
                <>
                  {' '}
                  <Text
                    component="span"
                    inherit
                    style={{
                      fontStyle: 'italic',
                      color: light ? venilleColors.primaryLight : venilleColors.primary,
                    }}
                  >
                    {accent}
                  </Text>
                </>
              )}
            </Title>
            <Text
              size="md"
              c={light ? 'rgba(255,255,255,0.78)' : venilleColors.textMuted}
              style={{ lineHeight: 1.75, maxWidth: venilleLayout.contentMax, fontSize: venilleTypography.body }}
            >
              {description}
            </Text>
            {chips && chips.length > 0 && (
              <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {chips.map((chip) => (
                  <Text
                    key={chip}
                    size="sm"
                    fw={600}
                    px={14}
                    py={8}
                    style={{
                      borderRadius: venilleLayout.radius.pill,
                      background: light ? 'rgba(255,255,255,0.1)' : venilleColors.white,
                      border: `1px solid ${light ? 'rgba(255,255,255,0.15)' : venilleColors.border}`,
                      color: light ? venilleColors.white : venilleColors.ink,
                    }}
                  >
                    {chip}
                  </Text>
                ))}
              </Box>
            )}
          </Stack>
        </Grid.Col>
        {image && <Grid.Col span={{ base: 12, md: 6 }}>{image}</Grid.Col>}
      </Grid>
    </motion.div>
  );
}
