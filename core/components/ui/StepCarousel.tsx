'use client';

import { Image, Text, Title } from '@mantine/core';
import { CarouselRail } from './CarouselRail';
import { venilleColors, venilleTypography } from '@/core/themes/venille-colors';
import classes from './mochi.module.css';

export interface StepItem {
  step: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

interface StepCarouselProps {
  steps: StepItem[];
  light?: boolean;
}

export function StepCarousel({ steps, light }: StepCarouselProps) {
  return (
    <CarouselRail slideSize={{ base: '88%', sm: '60%', md: '45%', lg: '28%' }}>
      {steps.map((item) => (
        <div key={item.step} className={light ? classes.stepCardDark : classes.stepCard}>
          {item.image && (
            <Image src={item.image} alt={item.imageAlt ?? item.title} className={classes.stepCardImage} />
          )}
          <div className={classes.stepCardBody}>
            <Text className={classes.stepNumber} c={light ? venilleColors.primaryLight : venilleColors.primary}>
              {item.step}
            </Text>
            <Title order={4} fw={800} c={light ? venilleColors.white : venilleColors.ink} style={{ lineHeight: 1.2 }}>
              {item.title}
            </Title>
            <Text
              size="sm"
              c={light ? 'rgba(255,255,255,0.75)' : venilleColors.textMuted}
              style={{ lineHeight: 1.65, fontSize: venilleTypography.body, flex: 1 }}
            >
              {item.description}
            </Text>
          </div>
        </div>
      ))}
    </CarouselRail>
  );
}
