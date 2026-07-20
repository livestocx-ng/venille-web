'use client';

import { Box, Image, Stack, Text } from '@mantine/core';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: string;
  light?: boolean;
}

export function EditorialImage({
  src,
  alt,
  caption,
  aspectRatio = venilleLayout.imageAspect,
  light,
}: EditorialImageProps) {
  return (
    <Stack gap="sm">
      <Box
        style={{
          borderRadius: venilleLayout.radius.device,
          overflow: 'hidden',
          boxShadow: venilleLayout.shadow.device,
          border: `1px solid ${light ? 'rgba(255,255,255,0.12)' : venilleColors.border}`,
          background: light ? venilleColors.inkSoft : venilleColors.white,
        }}
      >
        <Image src={src} alt={alt} style={{ width: '100%', aspectRatio, objectFit: 'cover' }} />
      </Box>
      {caption && (
        <Text size="xs" c={venilleColors.textMuted} ta="center" style={{ letterSpacing: '0.3px' }}>
          {caption}
        </Text>
      )}
    </Stack>
  );
}
