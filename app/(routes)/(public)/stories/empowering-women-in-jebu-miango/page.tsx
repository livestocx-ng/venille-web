'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import { Box, Container, Group, Stack, Text, Image, rem, Grid, Badge } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

export default function Page() {
  const publishedAt = '2024-04-07';
  const readTime = '6 min read';
  const category = 'Community';
  const title = 'Empowering Women in Jebu Miango: Venille’s Outreach for World Health Day';

  const paragraphs = [
    'At Venille, we believe that access to menstrual health education and sustainable hygiene solutions is essential for every woman and girl. To commemorate World Health Day, we organized a community outreach program in Jebu Miango, Bassa Local Government, Jos, Nigeria, to engage, educate, and empower the local women and girls.',
    'During the outreach, Renan Johnson Ali and our team had the privilege of speaking with the women and girls in the community about women’s health, menstrual hygiene, and overall well-being. Many of them shared their personal experiences, shedding light on the challenges they face in accessing affordable and safe menstrual products. We discussed healthy menstrual practices, the importance of proper hygiene, and how breaking menstrual stigma can improve confidence and quality of life for women and girls.',
    'Beyond education, this outreach allowed us to gather invaluable feedback on the Venille sanitary pad. As we continue to develop an eco-friendly, affordable, and effective menstrual hygiene solution, listening to the real experiences of our end users is crucial. Their insights help us improve our product, ensuring it truly meets the needs of the communities we serve.',
    'Every woman and girl deserves to manage her period safely, confidently, and sustainably, and at Venille, we are committed to making that a reality. Would you like to partner with us to drive menstrual health awareness and sustainability? Get in touch with us to collaborate on future initiatives!',
    'Seeing the enthusiasm and participation of the women and girls reaffirmed why we do what we do. The conversations, the shared stories, and the positive feedback showed us that small actions can create lasting change. Through community engagement, we are not just selling a product; we are building a movement—one that promotes dignity, health, and sustainability for all. This is just the beginning. We plan to expand our outreach efforts, reaching more communities with education, support, and access to eco-friendly menstrual products.',
  ];

  const galleryItems = [
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/04/imt.jpg',
      title: 'Jebu Miango Outreach Gathering',
      description: 'Community members participating in the health outreach',
    },
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/04/IMG_-1024x576.jpg',
      title: 'Interactive Health Education',
      description: 'Discussing healthy menstrual hygiene practices',
    },
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/04/AA-1024x683.jpg',
      title: 'Feedback Session & Distribution',
      description: 'Distributing eco-friendly pads to local women and girls',
    },
    {
      src: 'https://venille.com.ng/wp-content/uploads/2025/04/IMG_723-815x1024.jpg',
      title: 'Outreach Team & Support',
      description: 'Sharing insights and guidance on menstrual health',
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
                  alt={galleryItems[0].title}
                  fit="cover"
                  height={340}
                  fallbackSrc="https://placehold.co/400?text=Venille+Jebu+Miango"
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
                  // maxWidth: '680px',
                  width: '100%',
                }}
                mx="auto"
              >
                {paragraphs[0]}
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
                    fallbackSrc="https://placehold.co/800x400?text=Venille+Health+Education"
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
                  "{paragraphs[3]}"
                </Text>
              </Box>

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
                    src={galleryItems[2].src}
                    alt={galleryItems[2].title}
                    fit="cover"
                    height={420}
                    fallbackSrc="https://placehold.co/800x400?text=Venille+Distribution"
                  />
                </Box>
                .                  <Text size="xs" c={venilleColors.textMuted} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                  {galleryItems[2].title} — {galleryItems[2].description}
                </Text>
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

            </Stack>
          </Container>

        </Stack>
      </Container>
    </Box>
  );
}
