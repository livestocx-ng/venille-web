'use client';

import Link from 'next/link';
import { Box, Button, Group, Image, Text } from '@mantine/core';
import { IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react';
import { JourneySection, SpotlightSection } from '@/core/components/ui';

interface StoreButtonProps {
  href: string;
  icon: React.ReactNode;
  storeName: string;
  subText: string;
}

function StoreButton({ href, icon, storeName, subText }: StoreButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      radius="md"
      h={48}
      px={16}
      bg="rgba(255, 255, 255, 0.08)"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.15)',
        color: '#fff',
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
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Box style={{ display: 'flex', alignItems: 'center' }}>{icon}</Box>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 0, lineHeight: 1.1 }}>
        <Text size="10px" fw={500} style={{ opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {subText}
        </Text>
        <Text size="sm" fw={700}>
          {storeName}
        </Text>
      </Box>
    </Button>
  );
}

export default function SpotlightAiSection() {
  return (
    <JourneySection id="venille-ai" bg="ink">
      <SpotlightSection
        eyebrow=""
        accent="companion."
        title="Your private digital health"
        description="Venille AI helps girls and young women manage menstrual and sexual health privately and confidently — via WhatsApp, mobile app, and USSD, with period tracking, education, and access to eco-friendly Venille pads."
        chips={['WhatsApp', 'Mobile App', 'USSD', 'Period Tracking']}
        light
        reverse
        cta={
          <Group gap="md" mt="md" style={{ flexWrap: 'wrap' }}>
            <StoreButton
              href="https://apps.apple.com/ng/app/venille/id6747682936"
              icon={<IconBrandApple size={22} />}
              subText="Get it on"
              storeName="App Store"
            />
            <StoreButton
              href="https://play.google.com/store/apps/details?id=com.venille.venille"
              icon={<IconBrandGooglePlay size={20} />}
              subText="Get it on"
              storeName="Google Play"
            />
          </Group>
        }
        visual={
          <Image
            src="/images/product/image_venille_ai_2.png"
            alt="Venille AI digital health platform"
            h={{ base: 450, md: 550 }}
            w="auto"
            fit="contain"
            style={{ display: 'block', margin: '0 auto' }}
          />
        }
      />
    </JourneySection>
  );
}
