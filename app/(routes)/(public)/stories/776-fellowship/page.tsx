'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import { Box, Container, Group, Stack, Text, Image, rem, Grid, Badge } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

export default function Page() {
  const publishedAt = '2023-03-18';
  const readTime = '4 min read';
  const category = 'Fellowship';
  const title = 'Venille Awarded $100,000 Fellowship by 776 Foundation to Build a Future Where Periods Don’t Pollute';

  const paragraphs = [
    'We are proud to announce that Venille Ltd has been selected for the 776 Foundation Fellowship, backed by Alexis Ohanian, the co-founder of Reddit, and awarded a $100,000 grant to fuel our mission. Over the next two years, our founder, Esther Oluwabunmi Olalude, will be working full-time to scale our impact which is transforming how menstrual health, climate action, and dignity intersect across communities in Nigeria and beyond.',
    'The 776 Foundation Fellowship recognizes the power of bold, youth-led solutions, especially those emerging from the Global South. With their support, we are accelerating our efforts to disrupt the cycle of period poverty and plastic pollution through community-rooted innovation, relentless creativity, and unapologetic purpose.',
    'This moment is not just a milestone. It is momentum. It is the wind behind our wings as we build a sustainable, equitable, and proudly African solution to a global challenge.',
    'Thank you to the 776 Foundation for believing in our vision. The future we are building is not just greener, it is fairer, stronger, and led by girls who rise.',
  ];

  const galleryItems = [
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/07/Bunmi-1024x1024.jpeg',
      title: 'Esther Oluwabunmi Olalude',
      description: 'Founder of Venille & 776 Climate Fellow',
    },
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/07/2-1024x1024.jpeg',
      title: 'Eco-Friendly Menstrual Care',
      description: 'Sanitary pads made from upcycled banana stem fiber',
    },
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/07/fellow-1024x1024.jpg',
      title: '776 Foundation Fellowship',
      description: 'Backed by Reddit co-founder Alexis Ohanian',
    },
  ];

  return (
    <Box py={{ base: 110, md: 140 }} style={{ backgroundColor: venilleColors.background, minHeight: '100vh' }}>
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
                  src={galleryItems[0].src}
                  alt="Esther Oluwabunmi Olalude - 776 Fellow"
                  fit="cover"
                  height={340}
                  fallbackSrc="https://placehold.co/400?text=Venille+776+Fellowship"
                />
              </Box>
            </Grid.Col>
          </Grid>

          {/* Editorial Main Body with Full-Width Images at Intervals */}
          <Container size="md" p={0} style={{ maxWidth: '800p', width: '100%' }}>
            <Stack gap={40} align="stretch">
              
              {/* Paragraph 1 */}
              <Text
                size="lg"
                style={{
                  lineHeight: 1.85,
                  color: venilleColors.text,
                  fontSize: rem(18),
                  letterSpacing: '-0.2px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[0]}
                {' '}
                <a
                  href="https://www.776.org/fellows"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: venilleColors.primary, textDecoration: 'underline', fontWeight: 600 }}
                >
                  776 Fellows Portal
                </a>
              </Text>

              {/* Full Width Image 1 */}
              <Stack gap="xs" style={{ width: '100%' }}>
                <Box
                  style={{
                    width: '100%',
                    borderRadius: rem(24),
                    overflow: 'hidden',
                    boxShadow: '0 12px 32px rgba(16, 18, 24, 0.06)',
                    border: `1px solid ${venilleColors.border}`,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Image
                    src={galleryItems[1].src}
                    alt={galleryItems[1].title}
                    fit="cover"
                    height={420}
                    fallbackSrc="https://placehold.co/800x400?text=Venille+Impact"
                  />
                </Box>
                <Text size="xs" c={venilleColors.textMuted} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                  {galleryItems[1].title} — {galleryItems[1].description}
                </Text>
              </Stack>

              {/* Paragraph 2 */}
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

              {/* Pull Quote */}
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
                  "{paragraphs[2]}"
                </Text>
              </Box>

              {/* Full Width Image 2 */}
              <Stack gap="xs" style={{ width: '100%' }}>
                <Box
                  style={{
                    width: '100%',
                    borderRadius: rem(24),
                    overflow: 'hidden',
                    boxShadow: '0 12px 32px rgba(16, 18, 24, 0.06)',
                    border: `1px solid ${venilleColors.border}`,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Image
                    src={galleryItems[2].src}
                    alt={galleryItems[2].title}
                    fit="cover"
                    height={420}
                    fallbackSrc="https://placehold.co/800x400?text=776+Fellowship"
                  />
                </Box>
                <Text size="xs" c={venilleColors.textMuted} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                  {galleryItems[2].title} — {galleryItems[2].description}
                </Text>
              </Stack>

              {/* Paragraph 3 */}
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

            </Stack>
          </Container>

        </Stack>
      </Container>
    </Box>
  );
}
