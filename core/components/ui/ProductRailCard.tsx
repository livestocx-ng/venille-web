'use client';

import Link from 'next/link';
import { Anchor, Box, Image, Text, Title } from '@mantine/core';
import { IconProps } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';
import { venilleColors } from '@/core/themes/venille-colors';
import classes from './mochi.module.css';

interface ProductRailCardProps {
  icon?: React.ComponentType<IconProps>;
  badge?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  contrast?: string;
  image?: string;
  imageAlt?: string;
}

export function ProductRailCard({
  icon: Icon,
  badge,
  title,
  description,
  href,
  linkLabel = 'Learn more',
  contrast,
  image,
  imageAlt,
}: ProductRailCardProps) {
  return (
    <div className={classes.railCard}>
      {image && <Image src={image} alt={imageAlt ?? title} className={classes.railCardImage} />}
      {badge && (
        <Text size="xs" fw={700} tt="uppercase" c={venilleColors.primary} style={{ letterSpacing: '1.5px' }}>
          {badge}
        </Text>
      )}
      {Icon && !image && (
        <Box
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: venilleColors.primarySubtle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={22} color={venilleColors.primary} stroke={2} />
        </Box>
      )}
      <Title order={4} fw={800} c={venilleColors.ink} style={{ lineHeight: 1.25 }}>
        {title}
      </Title>
      <Text size="sm" c={venilleColors.textMuted} style={{ lineHeight: 1.65, flex: 1 }}>
        {description}
      </Text>
      {contrast && (
        <Text size="xs" c={venilleColors.textMuted} style={{ lineHeight: 1.5, fontStyle: 'italic' }}>
          vs. {contrast}
        </Text>
      )}
      {href && (
        <Anchor
          component={Link}
          href={href}
          fw={700}
          size="sm"
          c={venilleColors.primary}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 'auto' }}
        >
          {linkLabel} <IconArrowRight size={14} />
        </Anchor>
      )}
    </div>
  );
}
