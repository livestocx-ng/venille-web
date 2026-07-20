'use client';

import { Box, Group, Stack, Text } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';

export interface ComparisonRow {
  feature: string;
  venille: boolean | string;
  conventional: boolean | string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  venilleLabel?: string;
  conventionalLabel?: string;
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <IconCheck size={20} color={venilleColors.success} stroke={2.5} />
    ) : (
      <IconX size={20} color="#DC2626" stroke={2.5} />
    );
  }
  return (
    <Text size="sm" c={venilleColors.text} ta="center">
      {value}
    </Text>
  );
}

function MobileComparisonCards({ rows }: { rows: ComparisonRow[] }) {
  return (
    <Stack gap="md" hiddenFrom="md">
      {rows.map((row) => (
        <Box
          key={row.feature}
          p="md"
          style={{
            borderRadius: venilleLayout.bento.radius,
            border: `1px solid ${venilleColors.border}`,
            background: venilleColors.white,
          }}
        >
          <Text fw={700} size="sm" mb="sm" c={venilleColors.ink}>
            {row.feature}
          </Text>
          <Group justify="space-between">
            <Stack gap={4} align="center">
              <Text size="xs" c={venilleColors.primary} fw={700}>
                Venille
              </Text>
              <CellValue value={row.venille} />
            </Stack>
            <Stack gap={4} align="center">
              <Text size="xs" c={venilleColors.textMuted} fw={600}>
                Conventional
              </Text>
              <CellValue value={row.conventional} />
            </Stack>
          </Group>
        </Box>
      ))}
    </Stack>
  );
}

export function ComparisonTable({
  rows,
  venilleLabel = 'Venille Pads',
  conventionalLabel = 'Conventional Pads',
}: ComparisonTableProps) {
  return (
    <>
      <MobileComparisonCards rows={rows} />
      <Box
        visibleFrom="md"
        style={{
          borderRadius: venilleLayout.radius.card,
          border: `1px solid ${venilleColors.border}`,
          overflow: 'hidden',
          background: venilleColors.white,
          boxShadow: venilleLayout.shadow.card,
        }}
      >
        <Group
          gap={0}
          wrap="nowrap"
          style={{
            borderBottom: `1px solid ${venilleColors.border}`,
            background: venilleColors.surface,
          }}
        >
          <Box style={{ flex: 1.2, padding: '16px 20px' }}>
            <Text size="sm" fw={700} c={venilleColors.textMuted}>
              Feature
            </Text>
          </Box>
          <Box style={{ flex: 1, padding: '16px 20px', textAlign: 'center', borderLeft: `1px solid ${venilleColors.border}` }}>
            <Text size="sm" fw={800} c={venilleColors.primary}>
              {venilleLabel}
            </Text>
          </Box>
          <Box style={{ flex: 1, padding: '16px 20px', textAlign: 'center', borderLeft: `1px solid ${venilleColors.border}` }}>
            <Text size="sm" fw={700} c={venilleColors.textMuted}>
              {conventionalLabel}
            </Text>
          </Box>
        </Group>
        {rows.map((row, i) => (
          <Group
            key={row.feature}
            gap={0}
            wrap="nowrap"
            style={{
              borderBottom: i < rows.length - 1 ? `1px solid ${venilleColors.border}` : undefined,
            }}
          >
            <Box style={{ flex: 1.2, padding: '14px 20px' }}>
              <Text size="sm" fw={600} c={venilleColors.ink}>
                {row.feature}
              </Text>
            </Box>
            <Box
              style={{
                flex: 1,
                padding: '14px 20px',
                display: 'flex',
                justifyContent: 'center',
                borderLeft: `1px solid ${venilleColors.border}`,
                background: venilleColors.primarySubtle,
              }}
            >
              <CellValue value={row.venille} />
            </Box>
            <Box
              style={{
                flex: 1,
                padding: '14px 20px',
                display: 'flex',
                justifyContent: 'center',
                borderLeft: `1px solid ${venilleColors.border}`,
              }}
            >
              <CellValue value={row.conventional} />
            </Box>
          </Group>
        ))}
      </Box>
    </>
  );
}
