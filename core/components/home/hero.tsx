'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';
import ShopNowButton from '@/core/components/buttons/shop_now_button';
import { venilleColors, venilleTypography } from '@/core/themes/venille-colors';
import { venilleEase } from '@/core/utilities/motion';

// const HERO_IMAGE = '/images/hero/image_hero.jpg';
// const HERO_IMAGE = '/images/hero/image_hero_dd.jpg';
// const HERO_IMAGE = '/images/hero/image_hero_5.jpg';
const HERO_IMAGE_2 = '/images/product/image_pad_1.jpg';
const HERO_IMAGE = '/images/hero/image_hero_d.jpg';

const trustItems = [
  '100% Eco-friendly',
  'Chemical Free',
  '18K+ Lives impacted',
  'Made in Nigeria',
];

const Hero = () => (
  <Box
    component="section"
    id="home"
    style={{
      position: 'relative',
      width: '100%',
      minHeight: '100dvh',
      overflow: 'hidden',
      color: venilleColors.white,
    }}
  >
    <Box
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />

    <Box
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(
          180deg,
          rgba(16, 18, 24, 0.32) 0%,
          rgba(16, 18, 24, 0.3) 45%,
          rgba(16, 18, 24, 0.62) 100%
        )`,
      }}
    />

    <Container
      size="lg"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack gap="xl" align="center" ta="center" maw={800}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: venilleEase }}
        >
          <Title
            order={1}
            style={{
              fontSize: venilleTypography.display,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: '-3px',
              color: venilleColors.white,
            }}
          >
            Personalized care.
            <br />
            <Text
              component="span"
              inherit
              style={{
                fontStyle: 'italic',
                color: '#F5E6A3',
                textShadow: '0 2px 16px rgba(0, 0, 0, 0.45)',
              }}
            >
              Real progress.
            </Text>
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <Text
            maw={560}
            mx="auto"
            style={{
              fontSize: venilleTypography.body,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            Venille sanitary pads are made from <strong style={{ color: venilleColors.white }}>eco-friendly</strong> agricultural waste {' '}
            {/* <strong style={{ color: venilleColors.white }}>chemical-free</strong>,{' '} */}
            and designed to
            combat period poverty across Africa.
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, ease: venilleEase }}
        >
          <Group gap="sm" justify="center" wrap="wrap" align="center">
            <ShopNowButton size="md" withArrow />
            <Button
              component={Link}
              href="/about-us"
              variant="outline"
              size="md"
              radius="xl"
              styles={{
                root: {
                  background: 'rgba(255,255,255,0.1)',
                  borderColor: 'rgba(255,255,255,0.35)',
                  color: venilleColors.white,
                  fontWeight: 600,
                  backdropFilter: 'blur(8px)',
                },
              }}
            >
              Learn More
            </Button>
          </Group>
        </motion.div>

        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }}>
          <TrustPills items={trustItems} />
        </motion.div> */}
      </Stack>
    </Container>
  </Box>
);

export default Hero;
