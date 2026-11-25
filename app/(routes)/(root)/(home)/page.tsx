'use client';

import { Box } from '@mantine/core';
import ComparisonSection from '@/core/components/home/comparison_section';
import CtaBandSection from '@/core/components/home/cta_band';
import FaqPreviewSection from '@/core/components/home/faq_preview_section';
import Hero from '@/core/components/home/hero';
import HomeStatsSection from '@/core/components/home/home_stats_section';
import HowItWorksSection from '@/core/components/home/how_it_works_section';
import ImpactSection from '@/core/components/home/impact_section';
import JourneyFeaturesSection from '@/core/components/home/journey_features';
import SpotlightAiSection from '@/core/components/home/spotlight_ai_section';
import SpotlightPadsSection from '@/core/components/home/spotlight_section';
import StatsBarSection from '@/core/components/home/stats_bar';
import TractionSection from '@/core/components/home/traction_section';
import UsConsulateSection from '@/core/components/home/us_consulate_section';
import TestimonialsSection from '@/core/components/home/testimonials_section';
import ValueIntroSection from '@/core/components/home/value_intro_section';
import WhyChooseUsSection from '@/core/components/home/why_choose_us_section';

export default function HomePage() {
  return (
    <Box style={{ overflowX: 'hidden', width: '100%' }}>
      <Hero />
      <StatsBarSection />
      <TractionSection />
      <JourneyFeaturesSection />
      <SpotlightAiSection />
      <ImpactSection />
      <SpotlightPadsSection />
      <ComparisonSection />
      <UsConsulateSection />
      <TestimonialsSection />
      {/* <FaqPreviewSection /> */}
      <CtaBandSection />
    </Box>
  );
}
