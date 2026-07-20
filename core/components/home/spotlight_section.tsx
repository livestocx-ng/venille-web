'use client';

import Link from 'next/link';
import { Button } from '@mantine/core';
import { JourneySection, ProductFrame, SpotlightSection } from '@/core/components/ui';
import { venilleLayout } from '@/core/themes/venille-colors';

export default function SpotlightPadsSection() {
  return (
    <JourneySection id="pads" bg="white">
      <SpotlightSection
        eyebrow=""
        // eyebrow="01 · Sanitary pads"
        title="Period care,"
        accent="without compromise."
        description="Zero leaks, maximum comfort, environmentally friendly. Venille pads use natural, biodegradable materials — replacing the plastic super absorbent polymers found in conventional pads."
        chips={['Zero Leaks', 'Maximum Comfort', 'Chemical Free', 'Biodegradable']}
        cta={
          <Button component={Link} href="/contact-us" radius="xl" size="md" w="fit-content">
            Shop Now
          </Button>
        }
        visual={
          <ProductFrame
            src="/images/hero/IMG_4191.jpg"
            alt="Venille pads — maximum comfort, environmentally friendly"
            badge="Made in Nigeria"
            aspectRatio={venilleLayout.imageAspect}
          />
        }
      />
    </JourneySection>
  );
}
