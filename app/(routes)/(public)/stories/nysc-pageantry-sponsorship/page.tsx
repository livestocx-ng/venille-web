'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import { Box, Container, Group, Stack, Text, Image, rem, Grid, Badge } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

export default function Page() {
  const publishedAt = '2024-01-22';
  const readTime = '4 min read';
  const category = 'Community';
  const title = 'NYSC Pageantry Sponsorship: Promoting Menstrual Health Awareness';

  const paragraphs = [
    'It was one of those deeply fulfilling days that reminded us exactly why we started Venille.',
    'Our CEO, Esther Oluwabunmi Olalude had the honour of representing Venille Ltd as a sponsor at the Miss NYSC Pageantry event held at the National Youth Service Corps (NYSC) Orientation Camp in Plateau State. The event brought together thousands of vibrant, passionate, and intelligent young Nigerian women, many of whom are recent graduates stepping into a new chapter of national service and adulthood.',
    'Through this platform, Venille educated and engaged over 1000 young women on menstrual hygiene and sustainable period care. Esther shared insights into safe menstrual practices, the long-term effects of plastic waste from conventional pads, and the importance of having access to both affordable products and reliable menstrual health education.',
    'Thanks to the support of 776, UNDP Youth for Climate, and the Anzisha Prize, we were able to make this outreach possible, not just through words, but through action. Every contestant in the pageantry received free Venille Sanitary Pads, and Esther had the incredible honour of crowning the winner at the end of the ceremony. The excitement and gratitude from the participants and attendees was very heart-warming.',
    'We also had the opportunity to introduce the young people to Venille AI, our chat-based digital health assistant that provides confidential, judgment-free guidance on menstrual and reproductive health.',
    'For us, this event was not just about pageantry, it was about restoring dignity, raising awareness, and showing that menstrual care can and should be safe, affordable, and eco-friendly. Seeing the genuine excitement from the women we spoke to, hearing their questions, and watching them engage with our products and message reminded us that the work Venille is doing is necessary, urgent, and deeply impactful.',
    'We are proud to continue standing at the intersection of health, climate resilience, and youth empowerment, and we are grateful to every organization that believes in our mission.',
    'Here’s to more young women feeling seen, supported, and proud, one pad, one conversation, and one crown at a time!',
  ];

  const images = [
    'https://venille.com.ng/wp-content/uploads/2025/08/2-1024x684.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/08/1.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/08/5-1024x683.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/08/4-1024x683.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/08/7_.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/08/3-1024x683.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/08/6-1-1024x682.jpg'
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
                  src={images[0]}
                  alt="Miss NYSC Pageantry Crowned"
                  fit="cover"
                  height={340}
                  fallbackSrc="https://placehold.co/400?text=Venille+NYSC+Pageantry"
                />
              </Box>
            </Grid.Col>
          </Grid>

          {/* Editorial Main Body with Full-Width Images at Intervals */}
          <Container size="md" p={0} style={{ maxWidth: '800p', width: '100%' }}>
            <Stack gap={40} align="stretch">
              
              {/* Paragraph 0 & 1 */}
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
                    src={images[1]}
                    alt="Miss NYSC Event Photo"
                    fit="cover"
                    height={420}
                    fallbackSrc="https://placehold.co/800x400?text=Venille+NYSC+Pageantry"
                  />
                </Box>
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
                {paragraphs[2]}
              </Text>

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
                    src={images[2]}
                    alt="Venille Pad Outreach"
                    fit="cover"
                    height={420}
                    fallbackSrc="https://placehold.co/800x400?text=Venille+NYSC+Pageantry"
                  />
                </Box>
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

              {/* Full Width Image 3 */}
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
                    src={images[3]}
                    alt="Outreach Presentation"
                    fit="cover"
                    height={420}
                    fallbackSrc="https://placehold.co/800x400?text=Venille+NYSC+Pageantry"
                  />
                </Box>
              </Stack>

              {/* Paragraph 4 */}
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

              {/* Pull Quote (Paragraph 5) */}
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
                  "{paragraphs[5]}"
                </Text>
              </Box>

              {/* Full Width Image 4 */}
              {/* <Stack gap="xs" style={{ width: '100%' }}>
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
                    src={images[4]}
                    alt="Miss NYSC Stage Crowning Detail"
                    fit="cover"
                    height={520}
                    fallbackSrc="https://placehold.co/800x400?text=Venille+NYSC+Pageantry"
                  />
                </Box>
              </Stack> */}

              {/* Paragraph 6 */}
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
                {paragraphs[6]}
              </Text>

              {/* Paragraph 7 */}
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
                {paragraphs[7]}
              </Text>

            </Stack>
          </Container>

        </Stack>
      </Container>
    </Box>
  );
}
