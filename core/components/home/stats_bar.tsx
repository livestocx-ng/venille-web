'use client';

import { Box, Container, Image, Text } from '@mantine/core';
import { motion, useReducedMotion } from 'framer-motion';
import { Sponsors } from '@/core/utilities';
import { venilleColors } from '@/core/themes/venille-colors';

const CREAM = '#F9F6F1';
const LABEL_COLOR = '#9CA3AF';

function sponsorSrc(path: string) {
  return path.replace(/ /g, '%20');
}

const marqueeLogos = [...Sponsors, ...Sponsors];

export default function StatsBarSection() {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      component="section"
      id="partners"
      // py={{ base: 36, md: 48 }}
      py={{ base: 36, md: 28 }}
      style={{ backgroundColor: '#fff', borderBottom: `1px solid ${venilleColors.border}` }}
      // style={{ backgroundColor: CREAM }}
    >
      <Container size="xl">
        <Text
          ta="center"
          size="xs"
          fw={500}
          tt="uppercase"
          c={LABEL_COLOR}
          mb={{ base: 28, md: 36 }}
          style={{ letterSpacing: '2.8px' }}
        >
          Supported &amp; backed by
        </Text>
      </Container>

      <Box className="sponsors-marquee-viewport">
        <motion.div
          className="sponsors-marquee-track"
          animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 32,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                }
          }
        >
          {marqueeLogos.map((sponsor, index) => (
            <Box
              key={`${sponsor.name}-${index}`}
              title={sponsor.detail}
              className="sponsors-marquee-item"
            >
              <Image
                src={sponsorSrc(sponsor.image)}
                alt={sponsor.name}
                fit="contain"
                style={{ maxHeight: 64, maxWidth: 150, width: 'auto', height: 'auto' }}
              />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
