'use client';

import { Group, Text } from '@mantine/core';
import classes from './mochi.module.css';

interface TrustPillsProps {
  items: string[];
}

export function TrustPills({ items }: TrustPillsProps) {
  return (
    <Group gap="sm" justify="center" wrap="wrap">
      {items.map((item) => (
        <Text key={item} component="span" className={classes.trustPill}>
          {item}
        </Text>
      ))}
    </Group>
  );
}
