'use client';

import Link from 'next/link';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
import { Section } from '@/core/components/ui';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

export default function CtaBandSection() {
  return (
    <Section bg="ink" py={venilleLayout.sectionPy}>
      <Box
        p={{ base: 'xl', md: 64 }}
        style={{
          borderRadius: venilleLayout.radius.card,
          background: venilleColors.inkSoft,
          boxShadow: venilleLayout.shadow.glow,
          border: '1px solid rgba(65, 117, 252, 0.25)',
          backgroundImage: venilleLayout.mesh.dark,
          textAlign: 'center',
        }}
      >
        <Stack align="center" gap="xl">
          <Text
            fw={900}
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: venilleColors.white,
              maxWidth: 560,
            }}
          >
            Start with care designed for you.
          </Text>
          <Text
            maw={480}
            style={{
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              fontSize: venilleTypography.body,
            }}
          >
            Order biodegradable sanitary pads or reach out about wholesale, retail, and community
            partnerships.
          </Text>
          <Group gap="md" justify="center">
            <Button
              component={Link}
              href="/contact-us"
              size="md"
              radius="xl"
              px={28}
              style={{ background: venilleColors.primary, fontWeight: 700 }}
            >
              Shop Now
            </Button>
            <Button
              component={Link}
              href="/contact-us"
              size="md"
              radius="xl"
              px={28}
              variant="outline"
              style={{ borderColor: 'rgba(255,255,255,0.35)', color: venilleColors.white, fontWeight: 600 }}
            >
              Contact Us
            </Button>
          </Group>
          <Text size="xs" c="rgba(255,255,255,0.5)">
            WhatsApp orders · Nationwide delivery · 100% biodegradable
          </Text>
        </Stack>
      </Box>
    </Section>
  );
}
