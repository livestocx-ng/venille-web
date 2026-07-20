'use client';

import { Box } from '@mantine/core';
import classes from './bento.module.css';

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface BentoGridProps {
  children: React.ReactNode;
}

interface BentoCellProps {
  children: React.ReactNode;
  span?: Span;
  spanMd?: Span;
}

export function BentoGrid({ children }: BentoGridProps) {
  return <Box className={classes.bentoGrid}>{children}</Box>;
}

export function BentoCell({ children, span = 12, spanMd }: BentoCellProps) {
  const md = spanMd ?? span;

  return (
    <Box
      className={classes.bentoCell}
      style={{ gridColumn: `span ${span}` }}
      data-span-md={md}
    >
      {children}
    </Box>
  );
}
