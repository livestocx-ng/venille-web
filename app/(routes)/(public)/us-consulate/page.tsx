'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { CommunityBanner, Section } from '@/core/components/ui';
import { venilleColors } from '@/core/themes/venille-colors';

export default function UsConsulatePage() {
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

          {/* Modernised Split Hero Section */}
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
                  Event Recap & Insights
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
                  The US Consulate in Lagos Invited Us!
                </Text>

                <Text size="sm" c={venilleColors.textMuted} style={{ lineHeight: 1.5 }}>
                  Esther Oluwabunmi Olalude joins global tech leaders, Dr. Omoju Miller, Amazon, and
                  NITDA to discuss practical AI infrastructure for business growth and social
                  inclusion.
                </Text>

                {/* Author and Metadata Bar */}
                <Group gap="sm" wrap="wrap" align="center" mt="xs">
                  <Group gap="xs" wrap="nowrap">
                    <Avatar color="blue" radius="xl" style={{ fontWeight: 700 }} size="sm">
                      EO
                    </Avatar>
                    <Box>
                      <Text size="xs" fw={700} c="#101218">
                        Esther Oluwabunmi Olalude
                      </Text>
                      <Text size="10px" c={venilleColors.textMuted} style={{ lineHeight: 1 }}>
                        CEO, Venille
                      </Text>
                    </Box>
                  </Group>
                  <Divider orientation="vertical" h={16} style={{ opacity: 0.6 }} />
                  <Group gap="xs" wrap="nowrap">
                    <IconCalendar size={16} color={venilleColors.textMuted} />
                    <Text size="sm" c={venilleColors.textMuted} fw={500}>
                      February 25, 2026
                    </Text>
                  </Group>
                  <Group gap="xs" wrap="nowrap">
                    <IconClock size={16} color={venilleColors.textMuted} />
                    <Text size="sm" c={venilleColors.textMuted} fw={500}>
                      5 min read
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
                  src="/images/blog/consulate_image_2.jpg"
                  alt="U.S. Consulate General Speaker Program panel on AI for Business"
                  fit="cover"
                  height={340}
                  fallbackSrc="https://placehold.co/400?text=Venille+US+Consulate"
                />
              </Box>
            </Grid.Col>
          </Grid>

          {/* Editorial Main Body */}
          <Container size="md" p={0} style={{ maxWidth: '800px', width: '100%' }}>
            <Stack gap={40} align="stretch">
              {/* Paragraph 1 */}
              <Text
                size="md"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: '#3D3F45',
                }}
              >
                Our CEO, Esther Oluwabunmi Olalude, was a part of the U.S. Consulate General
                Lagos’ Speaker Program on Artificial Intelligence: &ldquo;AI for Business: Driving
                Innovation and Productivity&rdquo; held on Wednesday, February 25, 2026, at 21st
                Century Technologies, Lekki Phase 1, which was organized by the Public Diplomacy
                Section of the U.S. Department of State, and brought together tech professionals,
                business leaders, entrepreneurs, and U.S. government exchange alumni. The panel,
                which included visiting U.S. AI expert Dr. Omoju Miller, founder and CEO of Fimio,
                Inc.; representatives from Amazon; and Nigeria’s National Information Technology
                Development Agency (NITDA), looked at how AI can move from buzzword to real
                infrastructure for productivity and growth, because it was a unique opportunity for
                discussion and collaboration.
              </Text>

              {/* Original Image 1 (Portrait - Max Width 480px) */}
              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '8px 0',
                }}
              >
                <Image
                  src="/images/blog/consulate_image_1.jpg"
                  alt="Esther Oluwabunmi Olalude at the U.S. Consulate Lagos Speaker Program backdrop"
                  style={{
                    width: '100%',
                    // maxWidth: '480px',
                    borderRadius: '12px',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                />
              </Box>

              {/* Original Image 2 (Landscape - Max Width 480px, maintaining same size) */}
              {/* <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '8px 0' }}>
              <Image
                src="/images/blog/consulate_image_2.jpg"
                alt="Event Panel with Dr. Omoju Miller, Amazon, NITDA, and tech leaders"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.04)',
                }}
              />
            </Box> */}

              {/* Paragraph 2 */}
              <Text
                size="md"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: '#3D3F45',
                }}
              >
                This event was not just another tech meetup for us, but rather a room where
                innovation, policy, and business strategy truly converged, because the discussion
                was less about AI theory and more about how Nigerian and global businesses can
                deploy AI to unlock efficiency, create new products, and compete globally, without
                glossing over the challenges and gaps that still exist.
              </Text>

              {/* Paragraph 3 */}
              <Text
                size="md"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: '#3D3F45',
                }}
              >
                We saw several things through Oluwabunmi’s participation: AI as an engine for real
                outcomes, not hype, because again and again, the panel returned to a simple idea: AI
                should be judged by its outcomes, not its buzzwords, which means fewer grand
                promises and more conversation about specific use cases, such as reducing processing
                time for businesses, improving customer service, optimizing logistics, improving
                decision-making, and enabling new services that simply weren’t possible before. For
                us, that reinforced something we already know deeply: the value of AI in our context
                is measured in the problems it solves, like healthcare access, public-service
                bottlenecks, and operational inefficiencies, not in how advanced it sounds on paper,
                therefore, we are more focused on practical applications.
              </Text>

              {/* Pullquote */}
              <Box
                style={{
                  borderLeft: `4px solid ${venilleColors.primary}`,
                  paddingLeft: '16px',
                  margin: '12px 0',
                }}
              >
                <Text
                  style={{
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: '#101218',
                  }}
                >
                  &ldquo;AI should be judged by its outcomes, not its buzzwords. For Venille, the
                  value of AI is measured in the problems it solves, like healthcare access,
                  public-service bottlenecks, and operational inefficiencies, not in how advanced it
                  sounds on paper.&rdquo;
                </Text>
              </Box>

              {/* Original Image 3 (Portrait - Max Width 480px, maintaining same size) */}
              <Box
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '8px 0',
                }}
              >
                <Image
                  src="/images/blog/consulate_image_3.jpg"
                  alt="Esther Oluwabunmi Olalude participating at the panel discussion"
                  style={{
                    width: '100%',
                    // maxWidth: '480px',
                    borderRadius: '12px',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.04)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }}
                />
              </Box>

              {/* Paragraph 4 */}
              <Text
                size="md"
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: '#3D3F45',
                }}
              >
                Thanks to the support of 776, UNDP Youth for Climate, and the Anzisha Prize, we were
                able to make this outreach possible, not just through words, but through action.
                Every contestant in the pageantry received free Venille Sanitary Pads, and Esther
                had the incredible honour of crowning the winner at the end of the ceremony. The
                excitement and gratitude from the participants and attendees was very heart-warming.
              </Text>
            </Stack>
          </Container>
        </Stack>
      </Container>

      {/* Footer Banner */}
      {/* <Section bg="ink">
        <CommunityBanner
          count="1"
          label="shared mission"
          description="Advancing conversations that connect technology, health equity, and women’s empowerment in Nigeria."
          primaryLabel="Contact Venille"
          secondaryLabel="Read our stories"
          secondaryHref="/stories"
        />
      </Section> */}
    </Box>
  );
}
