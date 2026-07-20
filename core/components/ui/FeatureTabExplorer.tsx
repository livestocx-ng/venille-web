'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Grid, Image, ScrollArea, Stack, Text } from '@mantine/core';
import { benchlingColors, venilleColors, venilleTypography } from '@/core/themes/venille-colors';

export interface FeatureTabItem {
  id: string;
  label: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
}

interface FeatureTabExplorerProps {
  items: FeatureTabItem[];
}

export function FeatureTabExplorer({ items }: FeatureTabExplorerProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) {
    return null;
  }

  return (
    <Box
      p={{ base: 20, md: 32 }}
      style={{
        borderRadius: 20,
        background: venilleColors.primarySubtle,
      }}
    >
      <ScrollArea type="auto" offsetScrollbars mb={{ base: 24, md: 32 }}>
        <Box
          p={4}
          style={{
            display: 'inline-flex',
            gap: 4,
            borderRadius: 999,
            background: 'rgba(168, 196, 251, 0.45)',
            maxWidth: '100%',
          }}
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 999,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  whiteSpace: 'nowrap',
                  color: isActive ? benchlingColors.heading : venilleColors.primaryDark,
                  background: isActive ? venilleColors.white : 'transparent',
                  boxShadow: isActive ? '0 2px 8px rgba(16, 18, 24, 0.1)' : 'none',
                  transition: 'background 0.15s, box-shadow 0.15s, color 0.15s',
                }}
              >
                {item.label}
              </button>
            );
          })}
        </Box>
      </ScrollArea>

      <Grid gutter={{ base: 28, md: 48 }} align="center">
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack gap="lg" maw={400}>
            <Text
              style={{
                fontSize: venilleTypography.body,
                lineHeight: 1.7,
                color: benchlingColors.heading,
              }}
            >
              {active.description}
            </Text>
            {active.href && (
              <Button
                component={Link}
                href={active.href}
                radius="xl"
                size="md"
                style={{
                  width: 'fit-content',
                  background: benchlingColors.heading,
                  color: venilleColors.white,
                }}
              >
                Learn more
              </Button>
            )}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Image
            src={active.image}
            alt={active.imageAlt}
            radius={16}
            style={{
              width: '100%',
              aspectRatio: '16/10',
              objectFit: 'cover',
              boxShadow: '0 16px 40px rgba(8, 74, 243, 0.12)',
            }}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
