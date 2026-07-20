'use client';

import Link from 'next/link';
import { IconArrowLeft, IconCalendar, IconClock } from '@tabler/icons-react';
import { Box, Container, Group, Stack, Text } from '@mantine/core';
import type { BlogArticle } from '@/core/content/blog-articles';
import { venilleColors } from '@/core/themes/venille-colors';

interface BlogArticlePageProps {
  article: BlogArticle;
}

export function BlogArticlePage({ article }: BlogArticlePageProps) {
  return (
    <Box py={{ base: 110, md: 132 }} style={{ backgroundColor: venilleColors.background, minHeight: '100vh' }}>
      <Container size="md">
        <Stack gap={36}>
          <Box className="mochi-card" p={{ base: 'lg', md: 'xl' }}>
            <Stack gap="md">
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
                }}
              >
                <IconArrowLeft size={16} /> Back to Stories
              </Link>

              <Text size="xs" fw={700} c={venilleColors.primary} tt="uppercase" style={{ letterSpacing: '1px' }}>
                {article.category}
              </Text>
              <Text
                component="h1"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  color: venilleColors.ink,
                  margin: 0,
                }}
              >
                {article.title}
              </Text>
              <Group gap="lg">
                <Group gap={6}>
                  <IconCalendar size={14} color={venilleColors.textMuted} />
                  <Text size="sm" c={venilleColors.textMuted}>
                    {new Date(article.publishedAt).toLocaleDateString('en-NG', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconClock size={14} color={venilleColors.textMuted} />
                  <Text size="sm" c={venilleColors.textMuted}>
                    {article.readTime}
                  </Text>
                </Group>
              </Group>
            </Stack>
          </Box>

          <Stack gap="lg" maw={680} px={{ base: 4, md: 8 }}>
            {article.paragraphs.map((paragraph) => (
              <Text
                key={paragraph.slice(0, 40)}
                size="md"
                style={{ lineHeight: 1.8, color: venilleColors.text, letterSpacing: '-0.2px' }}
              >
                {paragraph}
              </Text>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
