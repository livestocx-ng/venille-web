'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Collapse,
  Container,
  Drawer,
  Group,
  Image,
  Menu,
  rem,
  Stack,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { benchlingColors } from '@/core/themes/venille-colors';
import { blogPosts, navLinks } from '@/core/utilities';
import classes from './navbar.module.css';

const isNavLinkActive = (pathname: string, href: string) =>
  pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

const getNavClass = (isActive: boolean, onHero: boolean) => {
  if (onHero) {
    return isActive ? classes.navLinkLightActive : classes.navLinkLight;
  }
  return isActive ? classes.navLinkActive : classes.navLink;
};

export function Navbar() {
  const pathname = usePathname();
  const [scroll] = useWindowScroll();
  const [opened, { toggle }] = useDisclosure(false);
  const [blogOpened, { toggle: toggleBlog }] = useDisclosure(false);
  const primaryNavLinks = navLinks.filter((link) => link.link !== '/contact-us');
  const contactLink = navLinks.find((link) => link.link === '/contact-us');
  const isHome = pathname === '/';
  const isScrolled = scroll.y > 8;
  const navOnHero = isHome && !isScrolled;

  // Dynamically compute navbar background opacity based on scroll position
  const startOpacity = isHome ? 0.08 : 0.12;
  const maxOpacity = 0.88;
  const scrollRange = 400; // opacity reaches max at 400px scroll
  const scrollRatio = Math.min(scroll.y / scrollRange, 1);
  const currentOpacity = startOpacity + scrollRatio * (maxOpacity - startOpacity);
  const navBgColor = `rgba(255, 255, 255, ${currentOpacity.toFixed(3)})`;

  const navLinkClass = (href: string) =>
    `${classes.navLink} ${getNavClass(isNavLinkActive(pathname, href), navOnHero)}`;

  // Drawer is always on a white panel — never use hero light-link styles there
  const drawerLinkClass = (href: string) =>
    `${classes.navLink} ${getNavClass(isNavLinkActive(pathname, href), false)}`;

  return (
    <>
      <Box
        component="header"
        className={classes.header}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          backgroundColor: navBgColor,
          // borderBottom: `1px solid ${navOnHero ? 'rgba(255, 255, 255, 0.12)' : benchlingColors.border}`,
          transition: 'background-color 0.2s, border-color 0.2s',
        }}
      >
        <Container size="xl" py={10}>
          <Group justify="space-between" align="center">
            <Link
              href="/"
              style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
            >
              <Image
                src="/icons/icon_logo_2.png"
                alt="Venille Logo"
                h={28}
                w="auto"
                fit="contain"
              />
            </Link>

            <Group gap={8} visibleFrom="md">
              {primaryNavLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.link}
                  target={link.target || undefined}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className={navLinkClass(link.link)}
                >
                  {link.label}
                </Link>
              ))}

              <Menu
                width={300}
                position="bottom-start"
                offset={8}
                transitionProps={{ transition: 'pop-top-left', duration: 150 }}
                styles={{
                  dropdown: {
                    border: `1px solid ${benchlingColors.border}`,
                    borderRadius: rem(8),
                    padding: rem(8),
                    backgroundColor: benchlingColors.white,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  },
                  item: { borderRadius: rem(6), padding: `${rem(8)} ${rem(10)}` },
                }}
              >
                <Menu.Target>
                  <UnstyledButton
                    className={navLinkClass('/stories')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: rem(4),
                      cursor: 'pointer',
                      color: 'inherit',
                    }}
                  >
                    Blog
                    <IconChevronDown size={14} stroke={2} />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Box className={classes.scrollContainer}>
                    {blogPosts.map((post) => {
                      const p = post as { externalLink?: string };
                      const content = (
                        <Stack gap={2}>
                          <Text size="sm" fw={500} c={benchlingColors.heading} lineClamp={1}>
                            {post.title}
                          </Text>
                          <Text size="xs" c={benchlingColors.muted} lineClamp={1}>
                            {post.readTime}
                          </Text>
                        </Stack>
                      );

                      if (p.externalLink) {
                        return (
                          <Menu.Item
                            key={post.slug}
                            component="a"
                            href={p.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {content}
                          </Menu.Item>
                        );
                      }

                      return (
                        <Menu.Item key={post.slug} component={Link} href={`/stories/${post.slug}`}>
                          {content}
                        </Menu.Item>
                      );
                    })}
                  </Box>
                  <Menu.Divider />
                  <Menu.Item component={Link} href="/stories" fw={500} c="primary">
                    View all articles
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* <Link href="/about-us" target="" className={navLinkClass('/about-us')}>
                About Us
              </Link> */}

              {contactLink && (
                <Link
                  href={contactLink.link}
                  target={contactLink.target}
                  className={navLinkClass(contactLink.link)}
                >
                  {contactLink.label}
                </Link>
              )}
            </Group>

            <Group gap="sm">
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <Button variant="filled" size="sm" radius="xl" className={classes.shopBtn}>
                  Shop Now
                </Button>
              </Link>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="sm"
                color={navOnHero ? '#FFFFFF' : benchlingColors.heading}
              />
            </Group>
          </Group>
        </Container>

        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="md"
          hiddenFrom="md"
          zIndex={1000000}
          styles={{
            content: { backgroundColor: benchlingColors.white },
            header: {
              backgroundColor: benchlingColors.white,
              borderBottom: `1px solid ${benchlingColors.border}`,
            },
          }}
        >
          <Stack gap="xs" mt="md">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                target={link.target || undefined}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={toggle}
                className={drawerLinkClass(link.link)}
                style={{ display: 'block', padding: '12px 8px', fontSize: 16 }}
              >
                {link.label}
              </Link>
            ))}
            <Box>
              <UnstyledButton
                onClick={toggleBlog}
                className={drawerLinkClass('/stories')}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 8px',
                  fontSize: 16,
                }}
              >
                Blog
                <IconChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.2s',
                    transform: blogOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </UnstyledButton>
              <Collapse in={blogOpened}>
                <Stack gap="xs" pl="md" pt="xs">
                  <Box className={classes.scrollContainer} style={{ maxHeight: rem(200) }}>
                    <Stack gap="xs">
                      {blogPosts.map((post) => {
                        const p = post as { externalLink?: string };
                        return p.externalLink ? (
                          <a
                            key={post.slug}
                            href={p.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={toggle}
                            className={drawerLinkClass(`/stories/${post.slug}`)}
                            style={{ display: 'block', padding: '4px 0' }}
                          >
                            {post.title}
                          </a>
                        ) : (
                          <Link
                            key={post.slug}
                            href={`/stories/${post.slug}`}
                            onClick={toggle}
                            className={drawerLinkClass(`/stories/${post.slug}`)}
                            style={{ display: 'block', padding: '4px 0' }}
                          >
                            {post.title}
                          </Link>
                        );
                      })}
                    </Stack>
                  </Box>
                  <Link
                    href="/stories"
                    onClick={toggle}
                    className={drawerLinkClass('/stories')}
                    style={{ paddingTop: '4px' }}
                  >
                    View all articles
                  </Link>
                </Stack>
              </Collapse>
            </Box>
            {contactLink && (
              <Link
                href={contactLink.link}
                onClick={toggle}
                className={drawerLinkClass(contactLink.link)}
                style={{ display: 'block', padding: '12px 8px', fontSize: 16 }}
              >
                {contactLink.label}
              </Link>
            )}
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}
