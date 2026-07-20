'use client';

import { Carousel } from '@mantine/carousel';
import { Box, Group, ActionIcon } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Children, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import { venilleColors } from '@/core/themes/venille-colors';
import classes from './mochi.module.css';

interface CarouselRailProps {
  children: React.ReactNode;
  slideSize?: { base: string; sm?: string; md?: string; lg?: string };
  slideGap?: number;
  withControls?: boolean;
}

export function CarouselRail({
  children,
  slideSize = { base: '85%', sm: '55%', md: '40%', lg: '32%' },
  slideGap = 16,
  withControls = true,
}: CarouselRailProps) {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const slides = Children.toArray(children);

  return (
    <Box className={classes.carouselWrap} style={{ position: 'relative' }}>
      {withControls && (
        <Group justify="flex-end" gap="xs" mb="md" visibleFrom="md">
          <ActionIcon
            variant="outline"
            radius="xl"
            size="lg"
            onClick={() => embla?.scrollPrev()}
            aria-label="Previous slide"
            style={{ borderColor: venilleColors.border }}
          >
            <IconChevronLeft size={18} />
          </ActionIcon>
          <ActionIcon
            variant="outline"
            radius="xl"
            size="lg"
            onClick={() => embla?.scrollNext()}
            aria-label="Next slide"
            style={{ borderColor: venilleColors.border }}
          >
            <IconChevronRight size={18} />
          </ActionIcon>
        </Group>
      )}
      <Carousel
        getEmblaApi={setEmbla}
        slideSize={slideSize}
        slideGap={slideGap}
        align="start"
        slidesToScroll={1}
        dragFree
        withControls={false}
      >
        {slides.map((child, i) => (
          <Carousel.Slide key={i}>{child}</Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
