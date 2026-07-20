'use client';

import CountUp from 'react-countup';
import { Stack } from '@mantine/core';
import { BigStatRow, JourneySection, SectionHeader } from '@/core/components/ui';
import { unicefStats } from '@/core/utilities';

const impactStats = [
  { value: '18K+', label: 'Lives impacted through outreach' },
  { value: '37%', label: 'Of menstruators in Nigeria cannot afford products' },
];

export default function ImpactSection() {
  const stats = [
    {
      value: (
        <>
          <CountUp end={unicefStats[0].value} duration={3} decimals={unicefStats[0].decimals} separator="," />
        </>
      ),
      suffix: unicefStats[0].suffix,
      label: unicefStats[0].label,
    },
    {
      value: (
        <>
          <CountUp end={unicefStats[1].value} duration={3} decimals={unicefStats[1].decimals} />
        </>
      ),
      suffix: unicefStats[1].suffix,
      label: unicefStats[1].label,
    },
    {
      value: impactStats[0].value,
      label: impactStats[0].label,
    },
    {
      value: impactStats[1].value,
      label: impactStats[1].label,
    },
  ];

  return (
    <JourneySection id="impact" bg="white">
      <Stack gap={48}>
        <SectionHeader
          eyebrow=""
          // eyebrow="05 · Numbers speak"
          title="A global"
          accent="problem."
          description="Menstrual hygiene isn't just a women's issue, it is a global problem. Below are staggering statistics according to UNICEF and our community impact."
        />
        <BigStatRow stats={stats} cols={{ base: 2, md: 4 }} />
      </Stack>
    </JourneySection>
  );
}
