'use client';

import React from 'react';
import Link from 'next/link';
import { IconArrowRight, IconClock, IconBook, IconSparkles } from '@tabler/icons-react';
import { Badge, Box, Group, SimpleGrid, Stack, Text, Container, Grid, Button, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { CommunityBanner, Section, SectionHeader } from '@/core/components/ui';
import { blogPosts } from '@/core/utilities';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

const categoryColors: Record<string, { bg: string; color: string }> = {
  Community: { bg: venilleColors.primarySubtle, color: venilleColors.primary },
  Impact: { bg: 'rgba(5, 150, 105, 0.1)', color: '#059669' },
  Award: { bg: 'rgba(67, 56, 202, 0.1)', color: '#4338CA' },
  Fellowship: { bg: 'rgba(163, 31, 52, 0.1)', color: '#A31F34' },
  Partnership: { bg: 'rgba(163, 31, 52, 0.1)', color: '#A31F34' },
};

function BlogCard({ slug, title, excerpt, category, readTime, externalLink }: (typeof blogPosts)[0]) {
  const catStyle = categoryColors[category] ?? categoryColors.Community;

  return (
    <Box
      component={externalLink ? 'a' : (Link as any)}
      href={externalLink ?? `/stories/${slug}`}
      target={externalLink ? '_blank' : undefined}
      rel={externalLink ? 'noopener noreferrer' : undefined}
      p="xl"
      style={{
        display: 'block',
        textDecoration: 'none',
        height: '100%',
        borderRadius: venilleLayout.radius.card,
        background: venilleColors.white,
        border: `1px solid ${venilleColors.border}`,
        boxShadow: venilleLayout.shadow.card,
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = venilleLayout.shadow.cardHover;
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = venilleLayout.shadow.card;
      }}
    >
      <Stack gap="md" h="100%">
        <Badge
          radius="xl"
          style={{ backgroundColor: catStyle.bg, color: catStyle.color, width: 'fit-content' }}
        >
          {category}
        </Badge>
        <Text fw={800} size="lg" c={venilleColors.ink} style={{ lineHeight: 1.3, letterSpacing: '-0.3px' }}>
          {title}
        </Text>
        <Text size="sm" c={venilleColors.textMuted} style={{ lineHeight: 1.6, flex: 1 }}>
          {excerpt}
        </Text>
        <Group justify="space-between">
          <Group gap={6} c={venilleColors.textMuted}>
            <IconClock size={14} />
            <Text size="xs">{readTime}</Text>
          </Group>
          <Group gap={4} c={venilleColors.primary} fw={600} fz="sm">
            Read <IconArrowRight size={14} />
          </Group>
        </Group>
      </Stack>
    </Box>
  );
}

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const featuredCatStyle = categoryColors[featuredPost.category] ?? categoryColors.Community;
  const remainingPosts = blogPosts.slice(1);

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: venilleColors.background }}>
      {/* Modern Split Hero Section */}
      <Box
        component="section"
        py={{ base: 120, md: 140 }}
        style={{
          position: 'relative',
          backgroundImage: `linear-gradient(180deg, rgba(249, 246, 241, 0.5) 0%, ${venilleColors.background} 100%), url("/images/hero/stories_hero_bg.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          borderBottom: `1px solid ${venilleColors.border}`,
        }}
      >
        {/* Decorative dynamic background mesh blobs */}
        <Box
          style={{
            position: 'absolute',
            top: -100,
            right: -50,
            width: rem(500),
            height: rem(500),
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(8, 74, 243, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: -150,
            left: -100,
            width: rem(400),
            height: rem(400),
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.05) 0%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        <Container size={venilleLayout.containerSize}>
          <Grid gutter={{ base: 40, md: 64 }} align="center">
            {/* Hero Left: Text Content */}
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Stack gap="lg">
                  {/* <Group gap={8} style={{
                    background: 'rgba(8, 74, 243, 0.08)',
                    padding: '6px 16px',
                    borderRadius: 100,
                    width: 'fit-content',
                    border: '1px solid rgba(8, 74, 243, 0.12)'
                  }}>
                    <IconBook size={14} color={venilleColors.primary} />
                    <Text size="xs" fw={700} c={venilleColors.primary} style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>
                      Venille Journal
                    </Text>
                  </Group> */}

                  <Text
                    component="h1"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      fontWeight: 900,
                      lineHeight: 1.1,
                      color: venilleColors.ink,
                      letterSpacing: '-1.5px',
                      margin: 0,
                    }}
                  >
                    Stories from the{' '}
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${venilleColors.primary} 0%, ${venilleColors.primaryLight} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Venille community
                    </span>
                  </Text>

                  <Text size="md" c={venilleColors.textMuted} style={{ lineHeight: 1.6, maxWidth: 540 }}>
                    Insights on menstrual health, climate-conscious innovation, global partnerships, and the sustainable impact we are building together.
                  </Text>

                  {/* <Group gap="xs" mt="sm">
                    <Text size="xs" fw={700} c={venilleColors.textMuted} tt="uppercase" style={{ letterSpacing: '0.5px' }}>
                      Quick Filters:
                    </Text>
                    {Object.keys(categoryColors).map((cat) => {
                      const catStyle = categoryColors[cat];
                      return (
                        <Badge
                          key={cat}
                          radius="xl"
                          variant="outline"
                          style={{
                            borderColor: catStyle.color,
                            color: catStyle.color,
                            fontSize: '10px',
                            fontWeight: 600,
                            padding: '4px 10px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = catStyle.bg;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          {cat}
                        </Badge>
                      );
                    })}
                  </Group> */}
                </Stack>
              </motion.div>
            </Grid.Col>

            {/* Hero Right: Featured Post Card */}
            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  component={featuredPost.externalLink ? 'a' : (Link as any)}
                  href={featuredPost.externalLink ?? `/stories/${featuredPost.slug}`}
                  target={featuredPost.externalLink ? '_blank' : undefined}
                  rel={featuredPost.externalLink ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    borderRadius: venilleLayout.radius.card,
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.75) 100%)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: `1px solid ${venilleLayout.glass.border}`,
                    boxShadow: '0 20px 40px rgba(16, 18, 24, 0.06)',
                    padding: rem(32),
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(8, 74, 243, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(8, 74, 243, 0.2)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(16, 18, 24, 0.06)';
                    e.currentTarget.style.borderColor = venilleLayout.glass.border;
                  }}
                >
                  {/* Glowing background hint in card */}
                  <Box
                    style={{
                      position: 'absolute',
                      top: '-40%',
                      right: '-40%',
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(8, 74, 243, 0.04) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }}
                  />

                  <Stack gap="md">
                    <Group justify="space-between" align="center">
                      <Badge
                        radius="xl"
                        size="md"
                        style={{ backgroundColor: featuredCatStyle.bg, color: featuredCatStyle.color }}
                      >
                        {featuredPost.category}
                      </Badge>
                      <Group gap={4} style={{ color: venilleColors.primary, fontWeight: 700, fontSize: '10px', letterSpacing: '0.5px' }}>
                        <IconSparkles size={12} />
                        FEATURED
                      </Group>
                    </Group>

                    <Stack gap="xs">
                      <Text
                        fw={800}
                        size="lg"
                        c={venilleColors.ink}
                        style={{ fontSize: '1.25rem', lineHeight: 1.3, letterSpacing: '-0.3px' }}
                      >
                        {featuredPost.title}
                      </Text>
                      <Text size="sm" c={venilleColors.textMuted} style={{ lineHeight: 1.6 }}>
                        {featuredPost.excerpt}
                      </Text>
                    </Stack>

                    <Group justify="space-between" align="center" mt="xs">
                      <Group gap={6} c={venilleColors.textMuted}>
                        <IconClock size={14} />
                        <Text size="xs">{featuredPost.readTime}</Text>
                      </Group>
                      <Group gap={4} c={venilleColors.primary} fw={600} fz="xs" style={{ display: 'flex', alignItems: 'center' }}>
                        Read Article <IconArrowRight size={14} />
                      </Group>
                    </Group>
                  </Stack>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Main Blog Post Grid */}
      <Section bg="default">
        <Stack gap={48}>
          <SectionHeader
            eyebrow="Latest Posts"
            title="Health guidance, stories,"
            accent="and support."
          />
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </SimpleGrid>
        </Stack>
      </Section>

      {/* Bottom Banner */}
      <Section bg="ink">
        <CommunityBanner
          count="10+"
          label="impact stories published"
          description="Follow Venille’s work in product innovation, community outreach, and partnerships."
          primaryLabel="Contact Venille"
          secondaryLabel="Explore Venille AI"
          secondaryHref="/venille-ai"
        />
      </Section>
    </Box>
  );
}
