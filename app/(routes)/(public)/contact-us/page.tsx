'use client';

import { useState } from 'react';
import {
  IconBuildingStore,
  IconHeartHandshake,
  IconMail,
  IconMessageCircle,
  IconPhone,
  IconProps,
  IconUsers,
} from '@tabler/icons-react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ContactUsDTO } from '@/core/sdk/account';
import { showNotification } from '@mantine/notifications';
import useContactUsMutation from '@/core/hooks/public/useContactUsMutation';
import { validateContactForm } from '@/core/validations/public.validations';
import { venilleColors, venilleLayout } from '@/core/themes/venille-colors';
import { platformFaqs, teamMembers, VENILLE_EMAIL, VENILLE_PHONE } from '@/core/utilities';
import { CommunityBanner, FAQPanel, PageHero, Section, SectionHeader } from '@/core/components/ui';

const contactTopics = [
  {
    title: 'Product & Orders',
    description: 'Questions about Venille pads, availability, pricing, or bulk orders.',
    icon: IconBuildingStore,
    color: venilleColors.primary,
  },
  {
    title: 'Partnerships',
    description: 'NGO collaborations, distribution, research, or impact programme enquiries.',
    icon: IconHeartHandshake,
    color: venilleColors.primaryLight,
  },
  {
    title: 'Community Outreach',
    description: 'School sensitization, pad donations, and menstrual health workshops.',
    icon: IconUsers,
    color: venilleColors.primaryDark,
  },
  {
    title: 'General Enquiries',
    description: 'Press, feedback, careers, or anything else — we would love to hear from you.',
    icon: IconMessageCircle,
    color: venilleColors.textMuted,
  },
];

function TopicCard({
  title,
  description,
  icon: Icon,
  color,
  selected,
  onSelect,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  color: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onSelect}
      p="lg"
      style={{
        textAlign: 'left',
        width: '100%',
        cursor: 'pointer',
        borderRadius: venilleLayout.radius.card,
        border: `2px solid ${selected ? venilleColors.primary : venilleColors.border}`,
        background: selected ? venilleColors.primarySubtle : venilleColors.white,
        boxShadow: selected ? venilleLayout.shadow.cardHover : venilleLayout.shadow.card,
      }}
    >
      <Stack gap="sm">
        <Icon size={22} color={color} />
        <Text fw={700} c={venilleColors.ink}>
          {title}
        </Text>
        <Text size="sm" c={venilleColors.textMuted} style={{ lineHeight: 1.55 }}>
          {description}
        </Text>
      </Stack>
    </Box>
  );
}

export default function ContactUsPage() {
  const { isPending, mutate } = useContactUsMutation();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', subject: '', message: '' },
  });

  const submitHandler = async (payload: ContactUsDTO) => {
    const message = validateContactForm(payload);
    if (message !== '') {
      showNotification({ message, color: 'red', title: 'Message Validation', autoClose: 3000 });
      return;
    }
    mutate(payload);
  };

  const handleTopicSelect = (title: string) => {
    setSelectedTopic(title);
    form.setFieldValue('subject', title);
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box style={{ minHeight: '100vh' }}>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build menstrual care"
        accent="that actually works."
        subtitle="Product questions, partnerships, wholesale distribution, or outreach requests, Venille is ready to collaborate."
      />

      <Section bg="white">
        <Grid gutter={48}>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="lg">
              <SectionHeader
                align="left"
                eyebrow="Talk to us"
                title="We're here to support your next move."
                description="Choose a topic and we’ll route your request to the right team."
              />
              <Stack gap="sm">
                <Group gap="sm">
                  <IconMail size={18} color={venilleColors.primary} />
                  <Text fw={600}>{VENILLE_EMAIL}</Text>
                </Group>
                <Group gap="sm">
                  <IconPhone size={18} color={venilleColors.primary} />
                  <Text fw={600}>{VENILLE_PHONE}</Text>
                </Group>
              </Stack>
              <Box className="mochi-card" p="lg">
                <Group gap="sm" wrap="nowrap">
                  <Avatar src={teamMembers[0].image} radius="xl" />
                  <Stack gap={2}>
                    <Text fw={700} c={venilleColors.ink}>
                      {teamMembers[0].name}
                    </Text>
                    <Text size="sm" c={venilleColors.textMuted}>
                      {teamMembers[0].role}
                    </Text>
                  </Stack>
                </Group>
                <Text mt="md" size="sm" c={venilleColors.textMuted}>
                  "{teamMembers[0].quote}"
                </Text>
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="md" mb="xl">
              <Text fw={700} c={venilleColors.ink}>
                How we can help
              </Text>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {contactTopics.map((topic) => (
                  <TopicCard
                    key={topic.title}
                    {...topic}
                    selected={selectedTopic === topic.title}
                    onSelect={() => handleTopicSelect(topic.title)}
                  />
                ))}
              </SimpleGrid>
            </Stack>

            <Box
              id="contact-form"
              p="xl"
              style={{
                borderRadius: venilleLayout.radius.card,
                background: venilleColors.white,
                border: `1px solid ${venilleColors.border}`,
                boxShadow: venilleLayout.shadow.card,
              }}
            >
              <form onSubmit={form.onSubmit(submitHandler)}>
                <Stack gap="md">
                  <Text fw={800} size="lg" c={venilleColors.ink}>
                    Send us a message
                  </Text>
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    <TextInput
                      label="Full Name"
                      placeholder="Your name"
                      key={form.key('name')}
                      {...form.getInputProps('name')}
                      required
                    />
                    <TextInput
                      label="Email"
                      placeholder="you@example.com"
                      key={form.key('email')}
                      {...form.getInputProps('email')}
                      required
                    />
                  </SimpleGrid>
                  <TextInput
                    label="Subject"
                    placeholder="What is this about?"
                    key={form.key('subject')}
                    {...form.getInputProps('subject')}
                    required
                  />
                  <Textarea
                    label="Message"
                    placeholder="Tell us more..."
                    minRows={5}
                    key={form.key('message')}
                    {...form.getInputProps('message')}
                    required
                  />
                  <Button type="submit" loading={isPending} radius="xl" size="md" w="fit-content">
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </Grid.Col>
        </Grid>
      </Section>

      <Section bg="default">
        <FAQPanel
          title="Before you send a message"
          description="Here are quick answers to the questions we get most often."
          items={platformFaqs
            .slice(0, 4)
            .map((faq) => ({ question: faq.value, answer: faq.description }))}
          // expert={{
          //   name: teamMembers[0].name,
          //   role: teamMembers[0].role,
          //   image: teamMembers[0].image,
          //   credential: 'Venille Co-Founder',
          // }}
        />
      </Section>

      <Section bg="ink">
        <CommunityBanner
          count="18K+"
          label="lives reached"
          description="Join schools, NGOs, and partners scaling access to sustainable menstrual products."
          primaryLabel="Start a partnership"
          secondaryLabel="View impact stories"
          secondaryHref="/stories"
        />
      </Section>
    </Box>
  );
}
