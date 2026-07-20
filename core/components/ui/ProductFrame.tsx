'use client';

import { Box, Image, Text } from '@mantine/core';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

interface ProductFrameProps {
  src: string;
  alt: string;
  badge?: string;
  aspectRatio?: string;
  light?: boolean;
}

export function ProductFrame({
  src,
  alt,
  badge,
  aspectRatio = venilleLayout.imageAspect,
  light,
}: ProductFrameProps) {
  return (
    <Box style={{ position: 'relative' }}>
      <Box
        style={{
          borderRadius: venilleLayout.radius.device,
          overflow: 'hidden',
          boxShadow: venilleLayout.shadow.device,
          border: `1px solid ${light ? venilleLayout.glass.darkBorder : venilleColors.border}`,
          background: light ? venilleColors.inkSoft : venilleColors.white,
        }}
      >
        <Image src={src} alt={alt} style={{ width: '100%', aspectRatio, objectFit: 'cover' }} />
      </Box>
      {badge && (
        <Text
          size="xs"
          fw={700}
          px={14}
          py={6}
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            borderRadius: venilleLayout.radius.pill,
            background: venilleColors.primary,
            color: venilleColors.white,
            boxShadow: venilleLayout.shadow.card,
          }}
        >
          {badge}
        </Text>
      )}
    </Box>
  );
}
