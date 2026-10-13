'use client';

import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { Anchor, Box, Container, Grid, Group, Image, Stack, Text } from '@mantine/core';
import { benchlingColors } from '@/core/themes/venille-colors';
import { VENILLE_EMAIL, VENILLE_PHONE } from '@/core/utilities';

const socialLinks = [
  { href: 'https://web.facebook.com/venilleng', icon: IconBrandFacebook, label: 'Facebook' },
  { href: 'https://instagram.com/venille_', icon: IconBrandInstagram, label: 'Instagram' },
  { href: 'https://x.com/venilleng', icon: IconBrandTwitter, label: 'X (Twitter)' },
  { href: 'https://www.linkedin.com/company/venille/', icon: IconBrandLinkedin, label: 'LinkedIn' },
];

const productLinks = [
  { href: '/', label: 'Home' },
  { href: 'https://ai.venille.com.ng', label: 'Venille AI', target: '_blank' },
  { href: '/us-consulate', label: 'US Consulate' },
  { href: '/stories', label: 'Stories' },
];

const companyLinks = [
  { href: '/about-us', label: 'About' },
  { href: '/contact-us', label: 'Contact' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

export function Footer() {
  return (
    <Box
      component="footer"
      py={{ base: 48, md: 64 }}
      style={{
        backgroundColor: benchlingColors.surface,
        borderTop: `1px solid ${benchlingColors.border}`,
        color: benchlingColors.body,
      }}
    >
      <Container size="xl">
        <Grid gutter={{ base: 32, md: 48 }}>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Stack gap="md">
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 'fit-content',
                  height: 'fit-content',
                  textDecoration: 'none',
                  border: `1px solid ${benchlingColors.border}`,
                  borderRadius: 12,
                  // padding: 6,
                  lineHeight: 0,
                }}
              >
                <Image
                  src="/icons/icon_logo.svg"
                  alt="Venille Logo"
                  h={48}
                  w="auto"
                  fit="contain"
                />
              </Link>
              <Text
                size="sm"
                style={{ lineHeight: 1.65, color: benchlingColors.body, maxWidth: 280 }}
              >
                Affordable pads, combating period poverty in our time. Sustainable menstrual health
                and hygiene for people and planet.
              </Text>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 2 }}>
            <Stack gap="sm">
              <Text
                size="xs"
                fw={600}
                c={benchlingColors.heading}
                tt="uppercase"
                style={{ letterSpacing: '0.06em' }}
              >
                Product
              </Text>
              {productLinks.map((item) => (
                <Anchor
                  key={item.href}
                  component={Link}
                  href={item.href}
                  size="sm"
                  c={benchlingColors.body}
                  underline="never"
                >
                  {item.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 2 }}>
            <Stack gap="sm">
              <Text
                size="xs"
                fw={600}
                c={benchlingColors.heading}
                tt="uppercase"
                style={{ letterSpacing: '0.06em' }}
              >
                Company
              </Text>
              {companyLinks.map((item) => (
                <Anchor
                  key={item.href}
                  component={Link}
                  href={item.href}
                  size="sm"
                  c={benchlingColors.body}
                  underline="never"
                >
                  {item.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Stack gap="sm">
              <Text
                size="xs"
                fw={600}
                c={benchlingColors.heading}
                tt="uppercase"
                style={{ letterSpacing: '0.06em' }}
              >
                Contact
              </Text>
              <Anchor href={`mailto:${VENILLE_EMAIL}`} size="sm" c="primary">
                {VENILLE_EMAIL}
              </Anchor>
              <Anchor
                href={`tel:${VENILLE_PHONE.replace(/\s/g, '')}`}
                size="sm"
                c={benchlingColors.body}
              >
                {VENILLE_PHONE}
              </Anchor>
              <Group gap="sm" mt="xs">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Anchor
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    underline="never"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 36,
                      height: 36,
                      borderRadius: 6,
                      border: `1px solid ${benchlingColors.border}`,
                      color: benchlingColors.muted,
                    }}
                  >
                    <Icon size={16} stroke={1.75} />
                  </Anchor>
                ))}
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Box mt={40} pt="md" style={{ borderTop: `1px solid ${benchlingColors.border}` }}>
        <Container size="xl">
          <Group justify="space-between" gap="md">
            <Text size="xs" c={benchlingColors.muted}>
              © Copyright {new Date().getFullYear()} Venille. All Rights Reserved.
            </Text>
            <Group gap="md">
              <Anchor
                component={Link}
                href="/terms-of-service"
                size="xs"
                c={benchlingColors.muted}
                underline="never"
              >
                Legal
              </Anchor>
              <Anchor
                component={Link}
                href="/privacy-policy"
                size="xs"
                c={benchlingColors.muted}
                underline="never"
              >
                Privacy
              </Anchor>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
