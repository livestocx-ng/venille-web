'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  IconBrandApple,
  IconBrandGooglePlay,
  IconBrandWhatsapp,
  IconDeviceMobile,
  IconLanguage,
  IconPhone,
  IconShieldLock,
} from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import {
  CommunityBanner,
  JourneySection,
  ProductFrame,
  ProductRailCard,
  Section,
  SectionHeader,
  SpotlightSection,
} from '@/core/components/ui';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';
import { VENILLE_PHONE_RAW } from '@/core/utilities';

interface StoreButtonProps {
  href: string;
  icon: React.ReactNode;
  storeName: string;
  subText: string;
  light?: boolean;
}

function StoreButton({ href, icon, storeName, subText, light = false }: StoreButtonProps) {
  const bg = light ? 'rgba(255, 255, 255, 0.08)' : '#101218';
  const border = light ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(0, 0, 0, 0.15)';
  const color = '#ffffff';
  const hoverBg = light ? 'rgba(255, 255, 255, 0.16)' : '#1a1d26';

  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      radius="md"
      h={48}
      px={16}
      bg={bg}
      style={{
        border,
        color,
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background-color 0.2s, transform 0.2s',
      }}
      styles={{
        inner: {
          display: 'flex',
          gap: 12,
          alignItems: 'center',
        },
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg;
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bg;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center' }}>{icon}</Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 0,
          lineHeight: 1.1,
        }}
      >
        <Text
          size="10px"
          fw={500}
          style={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}
        >
          {subText}
        </Text>
        <Text size="sm" fw={700}>
          {storeName}
        </Text>
      </Box>
    </Button>
  );
}

const channels = [
  {
    label: 'WhatsApp Chatbot',
    badge: '01 / ACCESSIBLE ANYWHERE',
    description:
      'Chat privately and securely with Venille AI on WhatsApp. Get answers in English, Hausa, Yoruba, Igbo, and Pidgin.',
    image: '/images/product/whatsapp_channel.png',
  },
  {
    label: 'iOS & Android App',
    badge: '02 / FLAGSHIP EXPERIENCE',
    description:
      'Track your cycle with precision, log daily symptoms, get custom insights, and order pads directly in-app.',
    image: '/images/product/mobile_app_channel.png',
  },
  {
    label: 'USSD Menu',
    badge: '03 / NO INTERNET NEEDED',
    description:
      'Available without data or smartphones. Bridging the digital divide so no girl is left behind. (Coming Soon)',
    image: '/images/product/ussd_channel.png',
  },
];

function AiHowItWorksGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      step: '01',
      title: 'Select Your Preferred Channel',
      description:
        'Download the Venille mobile app for iOS or Android, send a private message to our WhatsApp assistant, or access our USSD code.',
      image: '/images/venille-ai/image_girl-on-phone.jpg',
      imageAlt: 'Candid photo of a young Nigerian woman smiling while looking at her smartphone',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      ),
      color: 'rgba(8, 74, 243, 0.06)',
      textColor: '#084AF3',
    },
    {
      step: '02',
      title: 'Chat in Your Own Language',
      description:
        'Ask symptoms questions, request advice, or log your cycle details. Venille AI understands and responds in English, Hausa, Yoruba, Igbo, and Pidgin.',
      image: '/images/venille-ai/image_girl-group.jpg',
      imageAlt: 'Candid photo of two young West African women smiling and talking together',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h8" />
          <path d="M8 14h6" />
        </svg>
      ),
      color: 'rgba(255, 107, 107, 0.08)',
      textColor: '#ff6b6b',
    },
    {
      step: '03',
      title: 'Log Symptoms & Get Insights',
      description:
        'Keep track of mood, energy, pain, and flow. The AI analyzes your logs to offer personalized cycle predictions and actionable wellness tips.',
      image: '/images/venille-ai/image_calender.jpg',
      imageAlt: 'Wellness tracking journal and marked cycle calendar page close-up photo',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12h3l3-9 4 18 3-12h3" />
        </svg>
      ),
      color: 'rgba(156, 136, 255, 0.08)',
      textColor: '#9c88ff',
    },
    {
      step: '04',
      title: 'Order Premium Eco-Pads',
      description:
        'Need pad replenishments? Skip the line. Order biodegradable Venille banana fiber sanitary pads directly through the app or chatbot interface.',
      image: '/images/product/image_pad_1.jpg',
      imageAlt:
        'High-quality realistic product photograph of eco-friendly sanitary pads on a banana leaf',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      color: 'rgba(46, 204, 113, 0.08)',
      textColor: '#2ecc71',
    },
  ];

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing="xl"
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '16px',
        paddingRight: '16px',
      }}
    >
      {steps.map((item, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <Box
            key={item.step}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              borderRadius: '24px',
              border: isHovered
                ? '1px solid rgba(8, 74, 243, 0.25)'
                : '1px solid rgba(16, 18, 24, 0.08)',
              background: '#ffffff',
              boxShadow: isHovered
                ? '0 20px 40px rgba(8, 74, 243, 0.08), 0 1px 3px rgba(8, 74, 243, 0.04)'
                : '0 8px 30px rgba(16, 18, 24, 0.02)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* Image Container */}
            <Box
              style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: 240,
                backgroundColor: '#f3f4f6',
              }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                }}
              />
              {/* Overlay gradient */}
              <Box
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(16, 18, 24, 0.15), transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
            </Box>

            {/* Card Body */}
            <Stack
              gap="xs"
              style={{
                padding: '28px 24px 32px',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <Stack gap="xs">
                {/* Header with step & icon */}
                <Group justify="space-between" align="center" style={{ width: '100%' }}>
                  <Text
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      lineHeight: 1,
                      letterSpacing: '-2px',
                      background: 'linear-gradient(135deg, #084AF3 0%, #4175FC 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.step}
                  </Text>
                  <Box
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '12px',
                      backgroundColor: item.color,
                      color: item.textColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'rotate(8deg) scale(1.1)' : 'rotate(0) scale(1)',
                    }}
                  >
                    {item.icon}
                  </Box>
                </Group>

                {/* Title */}
                <Title
                  order={4}
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#101218',
                    lineHeight: 1.25,
                    marginTop: '4px',
                  }}
                >
                  {item.title}
                </Title>

                {/* Description */}
                <Text
                  size="sm"
                  style={{
                    color: '#4B4F58',
                    lineHeight: 1.6,
                    fontSize: '0.9375rem',
                  }}
                >
                  {item.description}
                </Text>
              </Stack>
            </Stack>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}

export default function VenilleAiPage() {
  return (
    <Box style={{ minHeight: '100vh', overflowX: 'hidden', backgroundColor: '#ffffff' }}>
      {/* Hero Section */}
      <Section bg="white" py={{ base: 64, md: 80 }}>
        <Stack gap="lg" align="center" ta="center" maw={720} mx="auto">
          {/* Eyebrow Badge */}
          <Box
            style={{
              backgroundColor: 'rgba(8, 74, 243, 0.06)',
              border: '1px solid rgba(8, 74, 243, 0.12)',
              borderRadius: '100px',
              padding: '6px 16px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <Text
              size="xs"
              fw={700}
              tt="uppercase"
              c={venilleColors.primary}
              style={{
                letterSpacing: '1.5px',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ✨ Venille AI Companion
            </Text>
          </Box>

          {/* Heading */}
          <Title
            order={1}
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-2px',
              color: venilleColors.ink,
              margin: 0,
            }}
          >
            Your private digital health companion.{' '}
            <Text
              component="span"
              inherit
              c={venilleColors.primary}
              style={{ fontStyle: 'italic', display: 'inline-block' }}
            >
              Always close.
            </Text>
          </Title>

          {/* Subtitle */}
          <Text
            size="md"
            c={venilleColors.textMuted}
            style={{ lineHeight: 1.65, fontSize: '1.0625rem', maxWidth: 580, margin: 0 }}
          >
            Venille AI helps girls and women aged 16 to 36+ manage menstrual cycle phases, log
            symptoms, and access reproductive education securely — in English, Hausa, Yoruba, Igbo,
            and Pidgin.
          </Text>

          {/* CTAs */}
          <Group gap="md" justify="center" style={{ flexWrap: 'wrap' }} mt="xs">
            <StoreButton
              href="https://apps.apple.com/ng/app/venille/id6747682936"
              icon={<IconBrandApple size={22} />}
              subText="Download on the"
              storeName="App Store"
            />
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.venille.venille"
              icon={<IconBrandGooglePlay size={20} />}
              subText="Get it on"
              storeName="Google Play"
            />
            {/* <Button
              component="a"
              href={`https://api.whatsapp.com/send?phone=${VENILLE_PHONE_RAW}&text=Hi%2C+I+want+to+learn+about+Venille+AI`}
              target="_blank"
              rel="noopener noreferrer"
              radius="md"
              h={48}
              px={20}
              color="green"
              leftSection={<IconBrandWhatsapp size={20} />}
              variant="light"
              style={{
                borderColor: '#25D366',
                color: '#128C7E',
                backgroundColor: 'rgba(37, 211, 102, 0.08)',
                fontWeight: 700,
              }}
            >
              Chat on WhatsApp
            </Button> */}
          </Group>
        </Stack>

        {/* Divider */}
        <Box
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: venilleColors.border,
            marginTop: '48px',
            marginBottom: '48px',
          }}
        />

        {/* Modernized Stats / Features Bar */}
        <SimpleGrid
          cols={{ base: 1, md: 3 }}
          spacing="lg"
          style={{ width: '100%', maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}
        >
          {/* Card 1 */}
          <Box
            style={{
              backgroundColor: '#ffffff',
              border: `1px solid ${venilleColors.border}`,
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(16, 18, 24, 0.02)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <Group align="flex-start" gap="md" wrap="nowrap">
              <Box
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(8, 74, 243, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: venilleColors.primary,
                  flexShrink: 0,
                }}
              >
                <IconShieldLock size={22} stroke={2} />
              </Box>
              <Stack gap={4}>
                <Text fw={700} size="sm" c={venilleColors.ink}>
                  100% Encrypted
                </Text>
                <Text size="xs" c={venilleColors.textMuted} style={{ lineHeight: 1.5 }}>
                  Your cycle data and conversations are completely private and stay securely on your
                  device.
                </Text>
              </Stack>
            </Group>
          </Box>

          {/* Card 2 */}
          <Box
            style={{
              backgroundColor: '#ffffff',
              border: `1px solid ${venilleColors.border}`,
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(16, 18, 24, 0.02)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <Group align="flex-start" gap="md" wrap="nowrap">
              <Box
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(8, 74, 243, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: venilleColors.primary,
                  flexShrink: 0,
                }}
              >
                <IconLanguage size={22} stroke={2} />
              </Box>
              <Stack gap={4}>
                <Text fw={700} size="sm" c={venilleColors.ink}>
                  Local Languages
                </Text>
                <Text size="xs" c={venilleColors.textMuted} style={{ lineHeight: 1.5 }}>
                  Understand and converse natively with the AI in English, Hausa, Yoruba, Igbo, and
                  Pidgin.
                </Text>
              </Stack>
            </Group>
          </Box>

          {/* Card 3 */}
          <Box
            style={{
              backgroundColor: '#ffffff',
              border: `1px solid ${venilleColors.border}`,
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(16, 18, 24, 0.02)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <Group align="flex-start" gap="md" wrap="nowrap">
              <Box
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  backgroundColor: 'rgba(8, 74, 243, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: venilleColors.primary,
                  flexShrink: 0,
                }}
              >
                <IconPhone size={22} stroke={2} />
              </Box>
              <Stack gap={4}>
                <Text fw={700} size="sm" c={venilleColors.ink}>
                  Offline USSD Access
                </Text>
                <Text size="xs" c={venilleColors.textMuted} style={{ lineHeight: 1.5 }}>
                  Access menstrual health predictions and advice without internet data or
                  smartphones.
                </Text>
              </Stack>
            </Group>
          </Box>
        </SimpleGrid>
      </Section>

      {/* How it Works Section */}
      <JourneySection id="how-it-works" bg="white">
        <Stack gap={56}>
          <SectionHeader
            eyebrow="How it works"
            title="Getting support"
            accent="should feel simple."
            description="Getting accurate menstrual and reproductive advice is secure, intuitive, and takes just a few steps."
          />
          <AiHowItWorksGrid />
        </Stack>
      </JourneySection>

      {/* Spotlight Features / Pad Integration */}
      <JourneySection id="integration" bg="surface">
        <SpotlightSection
          eyebrow="Pads access built in"
          title="Health guidance and"
          accent="product access in one place."
          description="Order eco-friendly Venille pads directly through Venille AI while receiving tracking reminders, symptom insights, and menstrual health education."
          chips={['Period tracking', 'Symptom logs', 'Localized education', 'Pad ordering']}
          visual={
            <ProductFrame
              src="/images/venille-ai/image_girl-on-phone_2.jpg"
              alt="Venille AI and product access"
              badge="Integrated care"
              aspectRatio="16/10"
            />
          }
          // cta={
          //   <Stack gap="md" align="flex-start">
          //     <Text
          //       size="sm"
          //       fw={700}
          //       c={venilleColors.textMuted}
          //       tt="uppercase"
          //       style={{ letterSpacing: '0.5px' }}
          //     >
          //       Start tracking & ordering today:
          //     </Text>
          //     <Group gap="sm" wrap="wrap">
          //       <StoreButton
          //         href="https://apps.apple.com/ng/app/venille/id6747682936"
          //         icon={<IconBrandApple size={22} />}
          //         subText="Download on the"
          //         storeName="App Store"
          //       />
          //       <StoreButton
          //         href="https://play.google.com/store/apps/details?id=com.venille.venille"
          //         icon={<IconBrandGooglePlay size={20} />}
          //         subText="Get it on"
          //         storeName="Google Play"
          //       />
          //     </Group>
          //     <Button
          //       component="a"
          //       href={`https://api.whatsapp.com/send?phone=${VENILLE_PHONE_RAW}&text=Hi%2C+I+want+to+learn+about+Venille+AI`}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       radius="xl"
          //       size="md"
          //       variant="light"
          //       color="green"
          //       leftSection={<IconBrandWhatsapp size={18} />}
          //       style={{
          //         borderColor: '#25D366',
          //         color: '#128C7E',
          //         backgroundColor: 'rgba(37, 211, 102, 0.08)',
          //       }}
          //     >
          //       Chat on WhatsApp
          //     </Button>
          //   </Stack>
          // }
        />
      </JourneySection>

      {/* Community Banner */}
      <JourneySection id="community" bg="ink">
        <CommunityBanner
          count="24/7"
          label="support touchpoints"
          description="Chat with us on WhatsApp or connect with our team for implementation and partnerships."
          primaryLabel="Chat on WhatsApp"
          primaryHref={`https://api.whatsapp.com/send?phone=${VENILLE_PHONE_RAW}&text=Hi%2C+I+want+to+learn+about+Venille+AI`}
          secondaryLabel="Contact Us"
          secondaryHref="/contact-us"
        />
      </JourneySection>
    </Box>
  );
}
