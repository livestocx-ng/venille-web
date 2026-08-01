'use client';

import Link from 'next/link';
import { Anchor, Stack } from '@mantine/core';
import { CarouselRail, JourneySection, SectionHeader, TestimonialCard } from '@/core/components/ui';
import { venilleColors } from '@/core/themes/venille-colors';

const testimonials = [
  {
    quote:
      'Venille pads changed how our girls experience their periods. They are comfortable, reliable, and we feel good knowing they are eco-friendly.',
    name: 'Funmi Adeyemi',
    location: 'Lagos, Nigeria',
    avatarSrc: '/images/testimonials/avatar_funmi.png',
  },
  {
    quote:
      'We distribute Venille pads during our menstrual hygiene workshops. The feedback from students has been overwhelmingly positive.',
    name: 'Chidinma Okonkwo',
    location: 'Abuja, Nigeria',
    avatarSrc: '/images/testimonials/avatar_chidinma.png',
  },
  {
    quote:
      'As a girls advocate, I am proud to support a product that tackles both period poverty and plastic pollution at the same time.',
    name: 'Zainab Ahmed',
    location: 'Nasarawa, Nigeria',
    avatarSrc: '/images/testimonials/avatar_aisha.png',
  },
  {
    quote:
      'After trying conventional brands for years, Venille was the first pad my daughter said she forgot she was wearing. That says everything.',
    name: 'Blessing Eze',
    location: 'Port Harcourt, Nigeria',
    avatarSrc: '/images/testimonials/avatar_blessing.png',
  },
];

export default function TestimonialsSection() {
  return (
    <JourneySection id="voices" bg="cream">
      <Stack gap={48}>
        <SectionHeader
          eyebrow="Voices"
          title="Stories from communities"
          accent="who felt supported."
          action={{ href: '/about-us', label: 'More stories' }}
        />
        <CarouselRail slideSize={{ base: '88%', sm: '60%', md: '45%', lg: '35%' }}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} verified />
          ))}
        </CarouselRail>
        <Anchor component={Link} href="/about-us" fw={700} c={venilleColors.primary} size="sm" ta="center" display="block">
          More reviews →
        </Anchor>
      </Stack>
    </JourneySection>
  );
}
