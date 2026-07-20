'use client';

import { Grid, Image, Stack, Text } from '@mantine/core';
import { JourneySection } from '@/core/components/ui';
import { venilleColors, venilleLayout, venilleTypography } from '@/core/themes/venille-colors';

export default function ValueIntroSection() {
  return (
    <JourneySection id="about" bg="white">
      <Grid gutter={{ base: 'xl', md: 64 }} align="center">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap="md">
            <Text
              style={{
                fontSize: venilleTypography.body,
                lineHeight: 1.8,
                color: venilleColors.textMuted,
              }}
            >
              Venille connects girls and young women with biodegradable sanitary pads, digital health
              tools, and community support designed to make menstrual care feel more accessible,
              dignified, and easier to navigate.
            </Text>
            <Text
              style={{
                fontSize: venilleTypography.body,
                lineHeight: 1.8,
                color: venilleColors.textMuted,
              }}
            >
              From pad distribution to Venille AI on WhatsApp, app, and USSD, we are built around the
              realities of period poverty and plastic pollution in Nigeria.
            </Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Image
            src="/images/hero/IMG_4191.jpg"
            alt="Venille team member presenting biodegradable Venille pads"
            radius={venilleLayout.radius.device}
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
          />
        </Grid.Col>
      </Grid>
    </JourneySection>
  );
}
