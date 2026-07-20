'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import { Box, Container, Group, Stack, Text, Image, rem, Grid, Badge } from '@mantine/core';
import { venilleColors } from '@/core/themes/venille-colors';

export default function Page() {
  const publishedAt = '2024-05-28';
  const readTime = '5 min read';
  const category = 'Impact';
  const title = 'Venille Joins National Conversation on Menstrual Health and Women’s Empowerment';

  const paragraphs = [
    'At Venille, we believe that empowering women begins with empowering their health.',
    'On 9th October 2025, our team had the privilege of participating in the Multi-Stakeholder Co-Creation Meeting on the Nigeria Economic Empowerment & Menstrual Health Pilot Project, organized by the Ministry of Women Affairs and Social Development, in collaboration with Population Services International (PSI) and supported by GIZ. The event took place at Crispan Hotel, Jos, Plateau State, bringing together leaders, innovators, policymakers, and changemakers dedicated to advancing menstrual health and women’s economic empowerment in Nigeria.',
    'The Co-Creation Meeting served as a vital space for dialogue, innovation, and collaboration. Stakeholders from across the public and private sectors came together to review baseline findings, share experiences, and co-design practical strategies to support women’s collectives and menstrual health initiatives within Plateau State.',
    'Venille was honored to be represented by our Founder, Esther Oluwabunmi Olalude, who served as a panelist and group facilitator during the sessions. She led discussions on Menstrual Health and Women’s Collectives in Plateau State, facilitating conversations that explored sustainable and inclusive approaches to addressing period poverty and improving access to menstrual health resources.',
  ];

  const images = [
    'https://venille.com.ng/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-08.33.27-1024x768.jpeg',
    'https://venille.com.ng/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-08.33.28-1024x768.jpeg',
    'https://venille.com.ng/wp-content/uploads/2025/10/prese.jpg',
    'https://venille.com.ng/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-08.33.33-576x1024.jpeg',
    'https://venille.com.ng/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-10-at-08.33.26-1024x576.jpeg',
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
                  alt="Venille National Conversation Panel"
                  fit="cover"
                  height={340}
                  fallbackSrc="https://placehold.co/400?text=Venille+Menstrual+Health"
                />
              </Box>
            </Grid.Col>
          </Grid>

          {/* Editorial Main Body with Full-Width Images at Intervals */}
          <Container size="md" p={0} style={{ maxWidth: '800p', width: '100%' }}>
            <Stack gap={40} align="stretch">
              
              {/* Paragraph 0 */}
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
                    src={images[1]}
                    alt="Multi-Stakeholder Co-Creation Meeting"
                    fit="cover"
                    height={450}
                    fallbackSrc="https://placehold.co/800x450?text=Venille+Meeting"
                  />
                </Box>
              </Stack>

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
                {paragraphs[1]}
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
                  "Sustainable and inclusive approaches to addressing period poverty and improving access to menstrual health resources."
                </Text>
              </Box>

              {/* Full Width Image 2 */}
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
                    src={images[2]}
                    alt="Esther Oluwabunmi Olalude Presentation"
                    fit="cover"
                    height={450}
                    fallbackSrc="https://placehold.co/800x450?text=Esther+Presentation"
                  />
                </Box>
              </Stack> */}

              {/* Full Width Image 3 */}
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
                    src={images[3]}
                    alt="Esther Oluwabunmi Olalude Facilitating Group Dialogue"
                    fit="cover"
                    height={450}
                    fallbackSrc="https://placehold.co/800x450?text=Esther+Facilitating"
                  />
                </Box>
              </Stack> */}

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

              {/* Full Width Image 4 */}
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
                    src={images[4]}
                    alt="Stakeholders Co-Creation Forum"
                    fit="cover"
                    height={450}
                    fallbackSrc="https://placehold.co/800x450?text=Stakeholders+Forum"
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

            </Stack>
          </Container>

        </Stack>
      </Container>
    </Box>
  );
}
