'use client';

import { Accordion } from '@mantine/core';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  light?: boolean;
  numbered?: boolean;
}

export function FAQAccordion({ items, light, numbered }: FAQAccordionProps) {
  return (
    <Accordion
      variant="separated"
      radius="md"
      chevronPosition="right"
      styles={{
        item: {
          border: `1px solid ${light ? 'rgba(255,255,255,0.12)' : venilleColors.border}`,
          borderRadius: venilleLayout.radius.button,
          background: light ? venilleColors.inkSoft : venilleColors.white,
          marginBottom: 10,
        },
        control: {
          padding: '18px 22px',
          color: light ? venilleColors.white : venilleColors.ink,
          fontWeight: 600,
          fontSize: '1rem',
        },
        content: {
          padding: '0 22px 18px',
          color: light ? 'rgba(255,255,255,0.75)' : venilleColors.textMuted,
          lineHeight: 1.7,
        },
        chevron: {
          color: light ? venilleColors.white : venilleColors.primary,
        },
      }}
    >
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Control>
            {numbered && (
              <span style={{ color: venilleColors.primary, fontWeight: 800, marginRight: 10 }}>
                {String(index + 1).padStart(2, '0')}
              </span>
            )}
            {item.question}
          </Accordion.Control>
          <Accordion.Panel>{item.answer}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
