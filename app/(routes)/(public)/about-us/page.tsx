'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  CarouselRail,
  CommunityBanner,
  FAQPanel,
  ProductRailCard,
  Section,
  SectionHeader,
  SpotlightSection,
} from '@/core/components/ui';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';
import { appFeatures, platformFaqs, teamMembers } from '@/core/utilities';
import { fadeUp, staggerContainer, venilleEase } from '@/core/utilities/motion';

const faqItems = platformFaqs.map((faq) => ({
  question: faq.value,
  answer: faq.description,
}));

export default function AboutUsPage() {
  return (
    <Box style={{ minHeight: '100vh' }}>
      {/* Modernized Custom Hero Section with Full Background Image */}
      <Box
        h='100vh'
        component="section"
        style={{
          position: 'relative',
          paddingTop: 'clamp(160px, 15vw, 220px)',
          minHeight: '100%',
          paddingBottom: 'clamp(100px, 10vw, 150px)',
          backgroundImage: `linear-gradient(to bottom, rgba(16, 18, 24, 0.26) 0%, rgba(16, 18, 24, 0.6) 100%), url('/images/hero/image_hero_5.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: venilleColors.white,
        }}
      >
        <Container size="md" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <Stack gap="xl" align="center" ta="center">
              {/* Heading */}
              <motion.div variants={fadeUp}>
                <Title
                  order={1}
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 900,
                    lineHeight: 1.15,
                    letterSpacing: '-1.5px',
                    color: venilleColors.white,
                    maxWidth: 800,
                  }}
                >
                  You deserve period care{' '}
                  <Text
                    component="span"
                    inherit
                    style={{
                      background: `linear-gradient(135deg, ${venilleColors.primaryMuted} 0%, ${venilleColors.white} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    that listens.
                  </Text>
                </Title>
              </motion.div>

              {/* Subtitle */}
              <motion.div variants={fadeUp}>
                <Text
                  size="lg"
                  style={{
                    lineHeight: 1.8,
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                    color: 'rgba(255, 255, 255, 0.86)',
                    maxWidth: 640,
                  }}
                >
                  We design biodegradable menstrual health products and digital support that meet
                  girls and women where they are.
                </Text>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp}>
                <Group gap="md" justify="center">
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      component={Link}
                      href="/contact-us"
                      color="primary"
                      radius="xl"
                      size="md"
                      style={{
                        boxShadow: '0 8px 24px rgba(8, 74, 243, 0.3)',
                      }}
                    >
                      Talk to us
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      component={Link}
                      href="/venille-ai"
                      variant="white"
                      color="primary"
                      radius="xl"
                      size="md"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        color: venilleColors.white,
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      Explore Venille AI
                    </Button>
                  </motion.div>
                </Group>
              </motion.div>

              {/* Stats Row overlayed at the bottom */}
              {/* <motion.div variants={fadeUp}>
                <Box
                  style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                    paddingTop: 32,
                    marginTop: 32,
                    width: '100%',
                    minWidth: 'clamp(300px, 60vw, 680px)',
                  }}
                >
                  <SimpleGrid cols={3} spacing="xl">
                    <div>
                      <Text fw={900} size="2xl" style={{ fontSize: '1.75rem', color: venilleColors.primaryLight }}>
                        18K+
                      </Text>
                      <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        Lives Impacted
                      </Text>
                    </div>
                    <div>
                      <Text fw={900} size="2xl" style={{ fontSize: '1.75rem', color: venilleColors.success }}>
                        100%
                      </Text>
                      <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        Biodegradable
                      </Text>
                    </div>
                    <div>
                      <Text fw={900} size="2xl" style={{ fontSize: '1.75rem', color: venilleColors.white }}>
                        Zero
                      </Text>
                      <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 600 }}>
                        Chemicals
                      </Text>
                    </div>
                  </SimpleGrid>
                </Box>
              </motion.div> */}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      <Section bg="white">
        <Stack gap={56}>
          <SectionHeader
            eyebrow="Our Story"
            title="Built for dignity,"
            accent="designed for impact."
            description="From period poverty to plastic waste, we saw a system that wasn’t built for women’s real lives. Venille exists to change that."
          />
          <SpotlightSection
            eyebrow="Mission"
            title="Affordable pads,"
            accent="combating period poverty."
            description="Venille creates biodegradable sanitary pads from natural materials — chemical-free, comfortable, and designed to tackle period poverty while protecting the planet."
            chips={['Biodegradable', 'Chemical-free', 'Comfort-first', 'Made for Nigeria']}
            visual={
              <Box
                className="mochi-card"
                p="xl"
                style={{
                  borderRadius: venilleLayout.radius.card,
                }}
              >
                <Text c={venilleColors.textMuted} mb="md">
                  Why this matters
                </Text>
                <Title order={3} c={venilleColors.ink} style={{ letterSpacing: '-0.8px' }}>
                  37% of menstruators in Nigeria cannot afford menstrual products.
                </Title>
                <Text mt="md" c={venilleColors.textMuted}>
                  Venille combines product innovation, access programmes, and digital support to
                  reduce this gap.
                </Text>
              </Box>
            }
          />
        </Stack>
      </Section>

      <Section bg="default">
        <Stack gap={56}>
          <SectionHeader
            eyebrow="Product Difference"
            title="The shortest route away"
            accent="from conventional pads."
          />
          <CarouselRail
            slideSize={{ base: '86%', sm: '60%', md: '42%', lg: '32%' }}
            withControls={false}
          >
            {appFeatures.map((item) => (
              <ProductRailCard
                key={item.id}
                badge="Venille advantage"
                title={item.feature}
                description={item.livestocx.text}
                contrast={item.custom.text}
                image={item.image}
                imageAlt={item.feature}
              />
            ))}
          </CarouselRail>
        </Stack>
      </Section>

      <Section bg="white">
        <Stack gap={56}>
          <SectionHeader eyebrow="Team" title="People behind" accent="the mission." />
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {teamMembers.map((member) => (
              <Box
                key={member.name}
                p="xl"
                style={{
                  borderRadius: venilleLayout.radius.card,
                  border: `1px solid ${venilleColors.border}`,
                  background: venilleColors.white,
                  boxShadow: venilleLayout.shadow.card,
                }}
              >
                <Stack gap="md">
                  <Avatar src={member.image} size={72} radius="xl" />
                  <Stack gap={4}>
                    <Text fw={800} size="lg" c={venilleColors.ink}>
                      {member.name}
                    </Text>
                    <Text size="sm" fw={600} c={venilleColors.primary}>
                      {member.role}
                    </Text>
                  </Stack>
                  <Text size="sm" c={venilleColors.textMuted} style={{ lineHeight: 1.65 }}>
                    {member.bio}
                  </Text>
                  <Text
                    size="sm"
                    style={{ fontStyle: 'italic', color: venilleColors.text, lineHeight: 1.6 }}
                  >
                    &ldquo;{member.quote}&rdquo;
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Section>

      <Section id="faq" bg="default">
        <FAQPanel
          title="Everything you might ask"
          description="Quick answers about product safety, sustainability, and availability."
          items={faqItems.slice(0, 6)}
          // expert={{
          //   name: teamMembers[0].name,
          //   role: teamMembers[0].role,
          //   image: teamMembers[0].image,
          //   credential: 'Venille Co-Founder',
          // }}
        />
      </Section>

      <Section bg="ink">
        <CommunityBanner
          count="18K+"
          label="lives impacted"
          description="Partner with us on distribution, outreach, and climate-positive menstrual health."
          primaryHref="/contact-us"
          primaryLabel="Talk to us"
          secondaryHref="/stories"
          secondaryLabel="Read our stories"
        />
      </Section>
    </Box>
  );
}
