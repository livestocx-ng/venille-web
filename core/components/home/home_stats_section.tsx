'use client';

import CountUp from 'react-countup';
import { BigStatRow, JourneySection } from '@/core/components/ui';
import { unicefStats } from '@/core/utilities';

export default function HomeStatsSection() {
  const stats = [
    {
      value: '18K+',
      label: 'Lives impacted through outreach and community programmes',
    },
    {
      value: '100%',
      label: 'Eco-friendly materials — zero harmful chemicals',
    },
    {
      value: (
        <>
          <CountUp end={unicefStats[0].value} duration={3} decimals={unicefStats[0].decimals} separator="," />
        </>
      ),
      suffix: unicefStats[0].suffix,
      label: unicefStats[0].label,
    },
  ];

  return (
    <JourneySection id="stats" bg="default">
      <BigStatRow stats={stats} cols={{ base: 1, md: 3 }} />
    </JourneySection>
  );
}
