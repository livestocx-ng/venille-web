'use client';

import { JourneySection, FAQPanel } from '@/core/components/ui';
import { platformFaqs, teamMembers } from '@/core/utilities';

const previewFaqs = platformFaqs.slice(0, 6).map((faq) => ({
  question: faq.value,
  answer: faq.description,
}));

const esther = teamMembers[0];

export default function FaqPreviewSection() {
  return (
    <JourneySection id="faq" bg="white">
      <FAQPanel
        title="Everything you"
        accent="need to know."
        description="Quick answers about Venille pads, sustainability, and how to order."
        items={previewFaqs}
        expert={{
          name: esther.name,
          role: esther.role,
          image: esther.image,
          credential: 'Venille Co-Founder',
        }}
      />
    </JourneySection>
  );
}
