'use client';

import { Playfair_Display } from 'next/font/google';
import { IconMail, IconShieldLock } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Anchor, Badge, Box, Container, Group, List, Stack, Text, Title } from '@mantine/core';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const PINK = '#084AF3';
const PINK_LIGHT = 'rgba(8, 74, 243, 0.08)';
const PINK_BORDER = 'rgba(8, 74, 243, 0.14)';
const SLATE = '#334155';
const SLATE_BORDER = 'rgba(51, 65, 85, 0.14)';
const INK = '#101218';
const MUTED = 'rgba(73, 75, 81, 0.85)';

type PolicyBlock = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] };

type PolicySubsection = {
  id?: string;
  title: string;
  blocks: PolicyBlock[];
};

type PolicySection = {
  id: string;
  number: string;
  title: string;
  blocks?: PolicyBlock[];
  subsections?: PolicySubsection[];
};

const policySections: PolicySection[] = [
  {
    id: 'introduction',
    number: '1',
    title: 'Introduction and Scope',
    blocks: [
      {
        type: 'paragraph',
        text: 'This Privacy Policy describes how Venille ("we," "us," or "our") collects, uses, processes, stores, and discloses personal data obtained through your use of the Venille Platform, including websites, mobile applications, APIs, and associated services (collectively, the "Platform"). It applies to all users of the Platform, including those who access it as a registered account holder or "guest." If you do not agree with the terms of this Privacy Policy, you should not use or access the Platform.',
      },
    ],
  },
  {
    id: 'information-we-collect',
    number: '2',
    title: 'Information We Collect',
    subsections: [
      {
        title: '2.1. Information You Provide',
        blocks: [
          {
            type: 'paragraph',
            text: 'Account Information: When you register for an account, we collect your name, email address, password (hashed), phone number, date of birth (to verify eligibility), gender (optional), and any other information you choose to provide (e.g., occupation).',
          },
          {
            type: 'paragraph',
            text: "Health and Well-being Data: If you use Venille's health features, we collect health-related inputs you provide, such as menstrual cycle dates, symptoms, biometrics (e.g., weight, temperature), lifestyle details, and any user-provided questionnaires or logs.",
          },
          {
            type: 'paragraph',
            text: 'Content and Communication: Any messages, feedback, comments, or other content you submit through the Platform (e.g., support requests, forum posts).',
          },
          {
            type: 'paragraph',
            text: 'Payment and Billing Data: If you purchase premium features, we collect billing information such as credit card details, billing address, and invoicing information. Payment data is processed by our third-party payment processors and not stored by Venille directly.',
          },
        ],
      },
      {
        title: '2.2. Information We Collect Automatically',
        blocks: [
          {
            type: 'paragraph',
            text: 'Usage Data: We collect information about your interactions with the Platform, such as pages viewed, features used, session duration, timestamps, errors encountered, and search queries.',
          },
          {
            type: 'paragraph',
            text: 'Device and Technical Data: We collect technical details about the devices and networks you use to access the Platform, including IP address, device type, operating system, browser type, screen resolution, language preferences, time zone, and mobile network information.',
          },
          {
            type: 'paragraph',
            text: 'Cookies and Tracking Technologies: We use cookies, web beacons, and similar tracking technologies to recognize you and remember preferences. This may include first-party cookies for core authentication and privacy-preserving third-party analytics on our website. We do not use third-party tracking or advertising cookies for in-app health tracking.',
          },
        ],
      },
      {
        title: '2.3. Information from Third Parties',
        blocks: [
          {
            type: 'paragraph',
            text: 'Third-Party Services: If you opt to sign in using third-party accounts (e.g., Google, Facebook), we may collect your name, email address, profile picture, and other information provided by the third party, in accordance with their privacy settings and policies.',
          },
          {
            type: 'paragraph',
            text: 'Publicly Available Sources: We may collect information about you from public sources (e.g., public health databases) to enhance and verify the accuracy of information we maintain.',
          },
        ],
      },
    ],
  },
  {
    id: 'how-we-use',
    number: '3',
    title: 'How We Use Your Information',
    blocks: [
      {
        type: 'list',
        items: [
          'To Provide and Improve Services: We use User Data and Usage Data to deliver, maintain, and enhance the Platform, tailor content and recommendations, develop new features, and fix bugs.',
          'Health Insights and Recommendations: We process health-related inputs to generate personalized assessments, insights, alerts, and recommendations, including menstrual health tracking, wellness tips, and AI-driven predictive analytics.',
          'Security and Fraud Prevention: We analyze usage patterns and technical data to detect and prevent fraudulent or malicious activity, secure the Platform, and ensure the integrity of your account.',
          'Communication: We use contact information to send service-related notices (e.g., updates to features, security alerts), respond to support inquiries, and provide customer service. With your consent, we may send marketing communications, newsletters, or promotional offers. You may opt-out at any time.',
          'Analytics and Research: We may use de-identified or aggregated data for internal analytics, research, and product development, including training and refining AI models. Such data does not identify you personally.',
          'Legal Compliance: We process information as necessary to comply with legal obligations, respond to lawful requests, protect against legal liability, and enforce our agreements.',
        ],
      },
    ],
  },
  {
    id: 'lawful-bases',
    number: '4',
    title: 'Lawful Bases for Processing (Applicable to GDPR)',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you are located in the European Economic Area (EEA), our lawful bases for processing your personal data include:',
      },
      {
        type: 'list',
        items: [
          'Performance of a Contract: Processing necessary to provide the Platform, including account management, service provisioning, and payment processing.',
          'Legal Compliance: Processing necessary to comply with a legal obligation to which we are subject.',
          'Legitimate Interests: Processing to improve the Platform, prevent misuse, and maintain security, provided that such interests are not overridden by your rights and freedoms.',
          'Consent: Where we rely on consent (e.g., marketing communications), you have the right to withdraw consent at any time without affecting prior processing.',
        ],
      },
    ],
  },
  {
    id: 'disclosure',
    number: '5',
    title: 'Disclosure of Your Information',
    blocks: [
      {
        type: 'list',
        items: [
          'Service Providers: We share personal data with third-party vendors, consultants, and service providers who perform services on our behalf (e.g., cloud hosting, payment processing, analytics, customer support). These parties are contractually obligated to only use data as necessary to perform services for us and to maintain confidentiality and security.',
          'Affiliates and Subsidiaries: We may share your information with our corporate affiliates and subsidiaries for the purposes described in this Privacy Policy. We require these entities to maintain the confidentiality of your personal data.',
          'Legal Compliance and Protection: We may disclose personal data to law enforcement, government authorities, or other third parties if we believe in good faith that such disclosure is necessary to comply with applicable law, respond to valid legal process, or protect the rights, property, or safety of Venille, its users, or the public.',
          'Business Transfers: In the event of a merger, acquisition, reorganization, sale of assets, or financing, user data may be transferred to a successor entity, subject to confidentiality obligations and this Privacy Policy.',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    number: '6',
    title: 'Cookies and Tracking Technologies',
    blocks: [
      {
        type: 'paragraph',
        text: 'First-Party Cookies: We use cookies and similar technologies to remember your settings, authenticate users, and enable core functionality. These cookies may remain on your device for a limited time (session cookies) or until you delete them (persistent cookies).',
      },
      {
        type: 'paragraph',
        text: 'Third-Party Cookies: Venille AI does not sell, rent, or share user personal health data, menstrual cycle records, or symptom logs with any third-party advertising networks, data brokers, or marketing platforms for advertising or commercial tracking purposes.',
      },
      {
        type: 'paragraph',
        text: 'Your Choices: You can manage cookies through your browser settings (e.g., reject or delete cookies) and opt-out of certain third-party tracking by visiting opt-out pages such as www.aboutads.info/choices and www.youronlinechoices.eu (if applicable).',
      },
    ],
  },
  {
    id: 'data-security',
    number: '7',
    title: 'Data Security',
    blocks: [
      {
        type: 'paragraph',
        text: 'We implement industry-standard technical, administrative, and physical safeguards to protect personal data from unauthorized access, disclosure, alteration, and destruction. These measures include encrypted data transmission (TLS/SSL), encryption at rest, access controls, firewalls, intrusion detection systems, regular security assessments, and staff training. However, no method of transmission over the internet or method of electronic storage is 100 percent secure; we cannot guarantee absolute security.',
      },
    ],
  },
  {
    id: 'data-retention',
    number: '8',
    title: 'Data Retention',
    blocks: [
      {
        type: 'paragraph',
        text: 'We retain personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining retention periods, we consider:',
      },
      {
        type: 'list',
        items: [
          'The length of time we have an ongoing relationship with you and provide Venille Services.',
          'Whether there is a legal obligation to which we are subject (e.g., tax, accounting, health record laws).',
          'Whether retention is advisable considering our legal position (e.g., statute of limitations, litigation, regulatory investigations).',
        ],
      },
    ],
  },
  {
    id: 'childrens-privacy',
    number: '9',
    title: "Children's Privacy",
    blocks: [
      {
        type: 'paragraph',
        text: 'Venille Services are not intended for children under the age of 13. We do not knowingly collect or solicit personal data from children under 13 years of age (or the minimum age required by applicable law in your jurisdiction). If we become aware that we have inadvertently collected personal data from a child under 13 without verifiable parental consent, we will promptly delete such data from our records. If you are a parent or guardian and believe that your child under 13 has provided us with personal data, please contact us at privacy@venille.ai or info@venille.com.ng to request immediate deletion.',
      },
    ],
  },
  {
    id: 'your-rights',
    number: '10',
    title: 'Your Rights and Choices',
    subsections: [
      {
        title: '10.1. Access, Correction, and Deletion Rights',
        blocks: [
          {
            type: 'paragraph',
            text: 'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
          },
          {
            type: 'list',
            items: [
              'Right to Access: You may request a copy of the personal data we hold about you.',
              'Right to Correction: You can ask us to correct inaccuracies or update incomplete data.',
              'Right to Deletion ("Right to be Forgotten"): You may request that we delete your personal data, subject to legal exceptions such as data retention requirements.',
            ],
          },
          {
            type: 'paragraph',
            text: 'To exercise general access or correction rights, contact us as described in Section 14 below. For specific step-by-step instructions on deleting your account and all associated data, please refer to Section 10.2 below.',
          },
        ],
      },
      {
        id: 'account-deletion',
        title: '10.2. How to Delete Your Account and Data',
        blocks: [
          {
            type: 'paragraph',
            text: 'In compliance with mobile platform policies (including Google Play Account Deletion requirements) and global data protection laws, Venille provides simple and direct methods for you to permanently delete your account and all associated personal and health records:',
          },
          {
            type: 'list',
            items: [
              'In-App Account Deletion (Direct): If you use the Venille mobile app, you can delete your account and all associated data directly within the app by navigating to Settings > Profile > Delete Account and confirming your request. This immediately deactivates your account and initiates permanent data removal without requiring an email request.',
              'Web / External Deletion Request: If you cannot access the mobile application, registered via web, or prefer to submit a deletion request externally without reinstalling the app, email privacy@venille.ai (or info@venille.com.ng) with the subject line "Account Deletion Request" from the email address registered with your Venille account.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Scope of Deletion and Retention Timeline: Once an account deletion request is initiated or verified, all your account profile details, menstrual cycle tracking history, symptom logs, biometrics, questionnaire responses, notes, and AI interaction history will be permanently and irreversibly purged from our active databases and backup systems within 30 days. Certain minimal non-identifiable transaction or regulatory compliance records may be retained only where strictly mandated by applicable laws.',
          },
        ],
      },
      {
        title: '10.3. Data Portability and Restriction',
        blocks: [
          {
            type: 'paragraph',
            text: 'If you are an EEA resident, you may have the right to receive your personal data in a structured, commonly used, and machine-readable format and to transmit those data to another controller. You may also request restrictions on certain processing when applicable.',
          },
        ],
      },
      {
        title: '10.4. Opt-Out of Marketing Communications',
        blocks: [
          {
            type: 'paragraph',
            text: 'You may opt-out of receiving marketing emails from us by following the unsubscribe link in any marketing email or by contacting us. Opting out does not apply to transactional or service-related communications.',
          },
        ],
      },
    ],
  },
  {
    id: 'international-transfers',
    number: '11',
    title: 'International Data Transfers',
    blocks: [
      {
        type: 'paragraph',
        text: 'Your personal data may be transferred to, processed, and stored in countries outside your country of residence, including countries that do not have data protection laws equivalent to those in your jurisdiction. We will take appropriate safeguards (e.g., standard contractual clauses, binding corporate rules) to ensure that your data receives an adequate level of protection in accordance with applicable law.',
      },
    ],
  },
  {
    id: 'third-party-links',
    number: '12',
    title: 'Third-Party Links and Services',
    blocks: [
      {
        type: 'paragraph',
        text: 'The Platform may contain links to third-party websites, applications, or services not operated by Venille. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third parties. We encourage you to read the privacy statements of each third-party site you visit.',
      },
    ],
  },
  {
    id: 'changes',
    number: '13',
    title: 'Changes to This Privacy Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. We will post the updated Privacy Policy on the Platform with a new "Effective Date." Your continued use of the Platform after such changes constitutes your acceptance of the revised policy.',
      },
    ],
  },
  {
    id: 'contact',
    number: '14',
    title: 'Contact Information',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you have any questions or concerns about this Privacy Policy or our data practices, or to exercise your data subject rights, please contact us at:',
      },
    ],
  },
];

const PolicyBlockRenderer = ({ block }: { block: PolicyBlock }) => {
  if (block.type === 'paragraph') {
    return (
      <Text size="md" style={{ lineHeight: 1.75, color: MUTED }}>
        {block.text}
      </Text>
    );
  }

  return (
    <List spacing="sm" size="md" style={{ color: MUTED, lineHeight: 1.7 }}>
      {block.items.map((item) => (
        <List.Item key={item.slice(0, 48)}>{item}</List.Item>
      ))}
    </List>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#F6F7F8' }}>
      <Container size="md" pt={{ base: 118, sm: 132 }} pb={{ base: 56, sm: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack gap={40} maw={760} mx="auto">
            <Stack gap="md" align="center" ta="center" className="mochi-card" p="xl">
              <Badge radius="xl" variant="light" color="primary">
                Privacy
              </Badge>
              <Title
                order={1}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  color: INK,
                }}
              >
                Privacy Policy
              </Title>
              <Text size="sm" c={MUTED}>
                Effective Date: October 24, 2024 | Last Updated: October 2024
              </Text>
            </Stack>

            <Stack gap={48}>
              {policySections.map((section) => (
                <Box
                  key={section.id}
                  id={section.id}
                  component="section"
                  style={{ scrollMarginTop: 100 }}
                >
                  <Stack gap="md">
                    <Title
                      order={2}
                      style={{
                        fontFamily: playfair.style.fontFamily,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: INK,
                        paddingBottom: 8,
                        borderBottom: `1px solid ${PINK_BORDER}`,
                      }}
                    >
                      {section.number}. {section.title}
                    </Title>

                    {section.blocks?.map((block, i) => (
                      <PolicyBlockRenderer key={`${section.id}-block-${i}`} block={block} />
                    ))}

                    {section.subsections?.map((sub) => (
                      <Stack
                        key={sub.title}
                        id={sub.id}
                        gap="sm"
                        mt="sm"
                        style={sub.id ? { scrollMarginTop: 100 } : undefined}
                      >
                        <Text fw={700} size="md" c={INK}>
                          {sub.title}
                        </Text>
                        {sub.blocks.map((block, i) => (
                          <PolicyBlockRenderer key={`${sub.title}-block-${i}`} block={block} />
                        ))}
                      </Stack>
                    ))}

                    {section.id === 'contact' && (
                      <Box
                        p="lg"
                        style={{
                          borderRadius: 16,
                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                          border: `1px solid ${SLATE_BORDER}`,
                        }}
                      >
                        <Stack gap="md">
                          <Group gap="sm" wrap="nowrap">
                            <IconMail size={20} color={SLATE} style={{ flexShrink: 0 }} />
                            <Stack gap={2}>
                              <Text size="sm" fw={600} c={MUTED}>
                                Privacy & Account Deletion Requests
                              </Text>
                              <Anchor href="mailto:privacy@venille.ai" size="md" fw={700} c={SLATE}>
                                privacy@venille.ai
                              </Anchor>
                            </Stack>
                          </Group>
                          <Group gap="sm" wrap="nowrap">
                            <IconMail size={20} color={SLATE} style={{ flexShrink: 0 }} />
                            <Stack gap={2}>
                              <Text size="sm" fw={600} c={MUTED}>
                                General Inquiries
                              </Text>
                              <Anchor
                                href="mailto:info@venille.com.ng"
                                size="md"
                                fw={700}
                                c={SLATE}
                              >
                                info@venille.com.ng
                              </Anchor>
                            </Stack>
                          </Group>
                        </Stack>
                      </Box>
                    )}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage;
