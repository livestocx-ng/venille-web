'use client';

import Link from 'next/link';
import { Anchor, Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { venilleColors } from '@/core/themes/venille-colors';

interface SectionActionProps {
  href: string;
  label: string;
  variant?: 'link' | 'button';
  light?: boolean;
}

export function SectionAction({ href, label, variant = 'link', light }: SectionActionProps) {
  if (variant === 'button') {
    return (
      <Button
        component={Link}
        href={href}
        radius="xl"
        size="md"
        mt="xl"
        w="fit-content"
        variant={light ? 'outline' : 'filled'}
        style={
          light
            ? { borderColor: 'rgba(255,255,255,0.35)', color: venilleColors.white }
            : undefined
        }
      >
        {label}
      </Button>
    );
  }

  return (
    <Anchor
      component={Link}
      href={href}
      fw={700}
      mt="lg"
      c={light ? venilleColors.primaryLight : venilleColors.primary}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9375rem' }}
    >
      {label} <IconArrowRight size={16} />
    </Anchor>
  );
}
