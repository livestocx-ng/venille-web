'use client';

import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import classes from './shop_now_button.module.css';

interface ShopNowButtonProps {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  label?: string;
}

export default function ShopNowButton({
  href = '/contact-us',
  size = 'sm',
  withArrow = false,
  label = 'Shop Now',
}: ShopNowButtonProps) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Button
        variant="filled"
        size={size}
        radius="xl"
        className={classes.shopBtn}
        rightSection={withArrow ? <IconArrowRight size={18} /> : undefined}
      >
        {label}
      </Button>
    </Link>
  );
}
