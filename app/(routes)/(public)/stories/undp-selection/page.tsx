'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconCheck, IconClock } from '@tabler/icons-react';
import {
  Badge,
  Box,
  Container,
  Grid,
  Group,
  Image,
  rem,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

export default function Page() {
  const publishedAt = '2024-03-12';
  const readTime = '3 min read';
  const category = 'Awards';
  const title = 'UNDP Selection: Youth4Climate Call for Solutions 2024 Winner';

  const paragraphs = [
    'Big news! We’re thrilled to announce that Venille Ltd has been selected as one of the global winners of the Youth4Climate Call for Solutions 2024, powered by the United Nations Development Programme (UNDP) and the Italian Ministry for the Environment and Energy Security.',
    'Venille was awarded a $30,000 grant to scale our impact-driven mission of ending period poverty and fighting plastic pollution by producing affordable, biodegradable sanitary pads from agricultural waste right here in Nigeria.',
    'The Youth4Climate initiative seeks to support youth-led solutions that tackle the climate crisis through innovation, inclusion, and community impact. Venille was selected as one of only a handful of ventures worldwide for its unique approach to sustainable menstrual health and circular production.',
    'This support from UNDP enables us to move faster, dream bigger, and serve thousands more girls who deserve access to safe, affordable menstrual products without harming the planet.',
    'We’re incredibly proud to represent Nigeria on the global stage and lead the charge toward sustainable menstrual health.',
  ];

  const objectives = [
    'Expand our local pad production facility in Plateau State to reach 1,000 pads/day',
    'Train and employ 35 youth and women across manufacturing, outreach, and logistics',
    'Educate 500+ girls on menstrual hygiene and sustainability through community workshops',
    'Launch the Venille Menstrual App to provide digital support, cycle tracking, and eco-education',
    'Establish partnerships with local governments and NGOs to expand nationwide access',
  ];

  const quote =
    '“This isn’t just a win for our startup, it’s a win for girls, for climate, and for dignity.”';
  const quoteAuthor = 'Esther Oluwabunmi Olalude, Founder & CEO of Venille Ltd';

  return (
    <Box
      py={{ base: 110, md: 140 }}
      style={{ backgroundColor: venilleColors.background, minHeight: '100vh' }}
    >
      <Container size="lg">
        <Stack gap={48}>
          {/* Top Link */}
          <Box>
            <Link
              href="/stories"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: venilleColors.primary,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 14,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <IconArrowLeft size={16} /> Back to Stories
            </Link>
          </Box>

          {/* Premium Split Hero Section */}
          <Grid gutter={{ base: 32, md: 48 }} align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="md">
                <Badge
                  variant="filled"
                  color="blue"
                  size="lg"
                  radius="md"
                  style={{
                    width: 'fit-content',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {category}
                </Badge>
                <Text
                  component="h1"
                  style={{
                    fontSize: 'clamp(2.2rem, 4.5vw, 3rem)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: venilleColors.ink,
                    letterSpacing: '-1.5px',
                    margin: 0,
                  }}
                >
                  {title}
                </Text>
                <Group gap="lg" mt="xs">
                  <Group gap={6}>
                    <IconCalendar size={16} color={venilleColors.textMuted} />
                    <Text size="sm" c={venilleColors.textMuted} fw={500}>
                      {new Date(publishedAt).toLocaleDateString('en-NG', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </Text>
                  </Group>
                  <Group gap={6}>
                    <IconClock size={16} color={venilleColors.textMuted} />
                    <Text size="sm" c={venilleColors.textMuted} fw={500}>
                      {readTime}
                    </Text>
                  </Group>
                </Group>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box
                style={{
                  position: 'relative',
                  borderRadius: rem(24),
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(16, 18, 24, 0.08)',
                  border: `2px solid ${venilleColors.border}`,
                  transform: 'rotate(1deg)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(1deg) scale(1)';
                }}
              >
                <Image
                  src="/images/blog/undp_climate_hero.png"
                  alt="UNDP Youth4Climate Climate Action Sprout"
                  fit="cover"
                  height={340}
                  fallbackSrc="https://placehold.co/400?text=Venille+UNDP+Selection"
                />
              </Box>
            </Grid.Col>
          </Grid>

          {/* Editorial Main Body */}
          <Container size="md" p={0} style={{ maxWidth: '800px', width: '100%' }}>
            <Stack gap={32} align="stretch">
              {/* Intro Paragraphs */}
              <Text
                size="lg"
                style={{
                  lineHeight: 1.85,
                  color: venilleColors.text,
                  fontSize: rem(18),
                  letterSpacing: '-0.2px',
                  // maxWidth: '680px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[0]}
              </Text>

              <Text
                size="lg"
                style={{
                  lineHeight: 1.85,
                  color: venilleColors.text,
                  fontSize: rem(18),
                  letterSpacing: '-0.2px',
                  // maxWidth: '680px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[1]}
              </Text>

              <Text
                size="lg"
                style={{
                  lineHeight: 1.85,
                  color: venilleColors.text,
                  fontSize: rem(18),
                  letterSpacing: '-0.2px',
                  // maxWidth: '680px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[2]}
              </Text>

              {/* Styled Pull Quote */}
              <Box
                my="md"
                py="xl"
                px="md"
                style={{
                  borderTop: `2px solid ${venilleColors.primary}`,
                  borderBottom: `2px solid ${venilleColors.primary}`,
                  maxWidth: '640px',
                  width: '100%',
                }}
                mx="auto"
              >
                <Text
                  style={{
                    fontSize: rem(22),
                    fontWeight: 600,
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    color: venilleColors.ink,
                    letterSpacing: '-0.4px',
                  }}
                >
                  {quote}
                </Text>
                <Text
                  size="sm"
                  fw={600}
                  mt="sm"
                  c={venilleColors.primary}
                  style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}
                >
                  — {quoteAuthor}
                </Text>
              </Box>

              {/* Objectives Section */}
              <Box
                mx="auto"
                style={{
                  // maxWidth: '680px',
                  width: '100%',
                }}
                my="xs"
              >
                <Text size="lg" fw={700} c={venilleColors.ink} mb="md">
                  With this grant, we will:
                </Text>
                <Stack gap="sm">
                  {objectives.map((obj, i) => (
                    <Group key={i} align="flex-start" gap="md">
                      <ThemeIcon size={22} radius="xl" color="blue" variant="light" mt={3}>
                        <IconCheck size={14} />
                      </ThemeIcon>
                      <Text style={{ flex: 1, lineHeight: 1.6, color: venilleColors.text }}>
                        {obj}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Box>

              {/* Closing Paragraphs */}
              <Text
                size="lg"
                style={{
                  lineHeight: 1.85,
                  color: venilleColors.text,
                  fontSize: rem(18),
                  letterSpacing: '-0.2px',
                  // maxWidth: '680px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[3]}
              </Text>

              <Text
                size="lg"
                style={{
                  lineHeight: 1.85,
                  color: venilleColors.text,
                  fontSize: rem(18),
                  letterSpacing: '-0.2px',
                  // maxWidth: '680px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[4]}
              </Text>
            </Stack>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
}
