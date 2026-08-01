import { IconDroplet, IconLeaf, IconUsers } from '@tabler/icons-react';
import { Partner } from '../types';

interface ProductDisplayType {
  title: string;
  value: 'RECOMMENDED' | 'POPULAR' | 'NEAR_YOU';
}

export const VENILLE_EMAIL = 'info@venille.com.ng';
export const VENILLE_PHONE = '+234 703 205 1935';
export const VENILLE_PHONE_RAW = '2347032051935';
export const SITE_URL = 'https://venille.com.ng';

export const productDisplayTypes: ProductDisplayType[] = [
  { title: 'Recommended', value: 'RECOMMENDED' },
  { title: 'Popular', value: 'POPULAR' },
  { title: 'Near You', value: 'NEAR_YOU' },
];

export const navLinks = [
  { link: '/contact-us', label: 'Contact', target: '' },
  { link: 'https://ai.venille.com.ng', label: 'Venille AI', target: '_blank' },
  { link: '/us-consulate', label: 'US Consulate', target: '' },
  // { link: '/about-us', label: 'About', target: '' },
];

export const blogPosts = [
  {
    slug: 'because-international-summer-impact-competition-prize',
    title: 'Because International Summer Impact Competition Prize',
    excerpt: 'Venille recognized for creating sustainable impact through innovative menstrual health solutions.',
    category: 'Award',
    readTime: '4 min read',
    externalLink: 'https://becauseinternational.org/blogs/stories/venille-because-accelerator',
  },
  {
    slug: 'destinationzero-challenge-winner',
    title: '#DestinationZero Challenge Winner',
    excerpt: 'Venille wins recognition for driving climate-positive menstrual health innovation.',
    category: 'Award',
    readTime: '4 min read',
    externalLink: 'https://www.britishcouncil.org/climate-connection/be-inspired/destination-zero/Esther',
  },
  {
    slug: '2022-kukah-prize-young-innovators-award',
    title: '2022 Kukah Prize Young Innovators Award',
    excerpt: 'Honoured for youth-led innovation in sustainable menstrual hygiene.',
    category: 'Award',
    readTime: '5 min read',
    externalLink: 'https://nannews.ng/2022/09/01/2022-kukah-young-innovators-award-teen-ceo-wins-n2m-grand-prize/',
  },
  {
    slug: 'anzisha-fellowship-2023',
    title: 'Anzisha Fellowship 2023',
    excerpt: 'Venille joins Africa\'s premier fellowship for young entrepreneurs creating lasting change.',
    category: 'Fellowship',
    readTime: '4 min read',
    externalLink: 'https://anzisha.org/fellows/esther-olalude/',
  },
  {
    slug: 'youth4climate-award',
    title: 'Venille Honored with the Youth4Climate Award: A Testament to Sustainable Innovation',
    excerpt: 'Venille is proud to announce its recognition in the 2024 Youth4Climate Call for Solutions for Sustainable Consumption and Production.',
    category: 'Award',
    readTime: '4 min read',
  },
  {
    slug: 'empowering-women-in-jebu-miango',
    title: 'Empowering Women in Jebu Miango: Venille\'s Outreach for World Health Day',
    excerpt: 'Community outreach bringing menstrual health education and eco-friendly pads to women in Jebu Miango.',
    category: 'Community',
    readTime: '6 min read',
  },
  {
    slug: 'undp-selection',
    title: 'UNDP Selection',
    excerpt: 'Venille selected by the United Nations Development Programme for sustainable development impact.',
    category: 'Partnership',
    readTime: '4 min read',
  },
  {
    slug: '776-fellowship',
    title: 'Venille Awarded $100,000 Fellowship by 776 Foundation to Build a Future Where Periods Don’t Pollute',
    excerpt: 'We are proud to announce that Venille Ltd has been selected for the 776 Foundation Fellowship, backed by Alexis Ohanian, co-founder of Reddit, and awarded a $100,000 grant.',
    category: 'Fellowship',
    readTime: '4 min read',
  },
  {
    slug: 'nysc-pageantry-sponsorship',
    title: 'NYSC Pageantry Sponsorship',
    excerpt: 'Venille sponsors NYSC pageantry to promote menstrual health awareness among young women.',
    category: 'Community',
    readTime: '4 min read',
  },
  {
    slug: 'venille-national-conversation-menstrual-health',
    title: 'Venille Joins National Conversation on Menstrual Health and Women\'s Empowerment',
    excerpt: 'Contributing to Nigeria\'s national dialogue on period poverty, hygiene access, and women\'s empowerment.',
    category: 'Impact',
    readTime: '5 min read',
  },
];

export const platformFaqs = [
  {
    value: 'What are Venille sanitary pads made of?',
    description:
      'Venille sanitary pads are made from natural, biodegradable materials designed to be chemical-free and environmentally friendly, replacing the plastic super absorbent polymers (SAP) used in conventional pads.',
  },
  {
    value: 'Are Venille pads chemical-free?',
    description:
      'Yes. Unlike conventional pads that are chlorine bleached, Venille pads avoid harmful contaminants like dioxin. Our pads are designed to be gentle on the skin without synthetic bleach or harsh chemicals.',
  },
  {
    value: 'How environmentally friendly are Venille pads?',
    description:
      'Conventional sanitary products contribute significantly to plastic pollution. Venille pads are biodegradable and designed to reduce environmental harm from menstrual product waste.',
  },
  {
    value: 'What is Venille AI?',
    description:
      'Venille AI is our intelligent digital health platform that helps girls and young women manage menstrual and sexual health privately and confidently via WhatsApp, mobile app, and USSD.',
  },
  {
    value: 'How do I order Venille pads?',
    description:
      'You can order Venille biodegradable pads through our contact page or WhatsApp. We are working to expand wholesale, retail, and online store availability across Nigeria.',
  },
  {
    value: 'How do you support local communities?',
    description:
      'Through community outreach, menstrual hygiene workshops, pad distributions, and partnerships, Venille tackles period poverty while promoting sustainable menstrual health.',
  },
];

export const platformFeatures = [
  {
    title: 'Chemical Free',
    description:
      'To give some pads their pristine appearance, fibers are chlorine bleached. Dioxin, an extremely harmful contaminant, is created during this bleaching procedure. Venille avoids these chemicals.',
    icon: IconDroplet,
  },
  {
    title: 'Environmentally Friendly',
    description:
      'With the increasing danger of plastic pollution at heart, Venille has been developed because conventional sanitary products contribute largely to environmental harm.',
    icon: IconLeaf,
  },
  {
    title: 'Maximum Comfort',
    description:
      'Many sanitary products are too short, too thick, or cause rash. Venille pads eliminate these discomforts, you won\'t even know you\'re wearing a pad.',
    icon: IconUsers,
  },
];

export const unicefStats = [
  {
    value: 4.2,
    suffix: 'BILLION',
    label: 'people live without basic sanitation services in developing countries.',
    decimals: 1,
  },
  {
    value: 46,
    suffix: '%',
    label: 'of people in developing countries like Nigeria do not have adequate handwashing facilities at home, making period hygiene more difficult for women and young girls.',
    decimals: 0,
  },
];

export const teamMembers = [
  {
    name: 'Esther Oluwabunmi Olalude',
    role: 'Co-Founder',
    bio: 'Esther leads Venille\'s mission to deliver sustainable menstrual health solutions and digital health innovation for girls and young women across Nigeria.',
    extendedBio:
      'As co-founder of Venille, Esther represents the company at international forums including the U.S. Consulate General Lagos Speaker Program on AI for Business. She champions accessible menstrual health and women\'s empowerment.',
    quote:
      'We are solution-based, focused on tackling period poverty and saving the planet.',
    highlights: ['Co-Founder, Venille', 'AI for Business Speaker, U.S. Consulate Lagos'],
    credentials: ['Venille AI', 'Menstrual Health Advocacy'],
    linkedin: '',
    image: '/images/team/esther.jpg',
  },
  // {
  //   name: 'Nwagboso Prayer',
  //   role: 'Co-Founder & Girls Advocate',
  //   bio: 'As a girls and women advocate, Prayer is deeply concerned about period poverty and plastic pollution from sanitary pads. She co-founded Venille to counter both challenges.',
  //   extendedBio:
  //     'Founder & CEO of Naza Agape Foundation, Prayer has impacted 18,000+ lives through education, welfare, and empowerment programmes. She leads community outreach, free pad distributions, and menstrual hygiene sensitization.',
  //   quote:
  //     'We aim to reduce plastic pollution and tackle period poverty by offering a sustainable solution that helps girls stay in school with dignity.',
  //   highlights: ['Founder & CEO, Naza Agape Foundation', 'ForbesBLK Member'],
  //   credentials: ['BBC News Africa', 'BusinessDay Nigeria'],
  //   linkedin: 'https://linkedin.com/in/prayer-nwagboso-54461a174',
  //   image: 'https://venille.com.ng/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-09-at-10.00.54-AM.jpg',
  // },
];

export const appFeatures = [
  {
    id: 1,
    feature: 'Biodegradable Materials',
    image: '/images/product/biodegradable_materials_ai.png',
    custom: {
      text: 'Uses synthetic plastic SAP cores (take 500 years to degrade)',
      positive: false,
    },
    livestocx: {
      text: 'Uses biodegradable natural materials',
      positive: true,
    },
  },
  {
    id: 2,
    feature: 'Skin Safety',
    image: '/images/product/skin_safety_ai.png',
    custom: {
      text: 'Often contains chemical gels and synthetic bleach causing rashes',
      positive: false,
    },
    livestocx: {
      text: 'Chemical-free and hypoallergenic to prevent irritation',
      positive: true,
    },
  },
  {
    id: 3,
    feature: 'Carbon Footprint',
    image: '/images/product/carbon_footprint_ai.png',
    custom: {
      text: 'High emissions from petrochemical-derived plastics manufacturing',
      positive: false,
    },
    livestocx: {
      text: 'Eco-friendly design reduces plastic waste and environmental harm',
      positive: true,
    },
  },
];

export const Partners: Partner[] = [
  { name: 'Mastercard', image: '/images/sponsors/mastercard.png', detail: 'Financial inclusion and innovation partner' },
  { name: '776 Foundation', image: '/images/sponsors/776_foundation.png', detail: 'Supporting climate tech and green solutions' },
  { name: 'UNDP', image: '/images/sponsors/undp.jpeg', detail: 'United Nations Development Programme' },
  { name: 'Youth4Climate', image: '/images/sponsors/youth for climate.png', detail: 'Youth-led climate action recognition' },
  { name: 'The World Around', image: '/images/sponsors/the world around.png', detail: 'Global design and social impact partner' },
  { name: 'African Leadership Academy', image: '/images/sponsors/africa leadership academy.jpg', detail: 'African leadership development partner' },
  { name: 'British Council', image: '/images/sponsors/british_council.png', detail: 'International education and development' },
  { name: 'Anzisha', image: '/images/sponsors/anzisha.png', detail: 'Anzisha Fellowship for young African entrepreneurs' },
  { name: 'Because International', image: '/images/sponsors/because.png', detail: 'Summer Impact Competition partner' },
  { name: 'Kukah Prize', image: '/images/sponsors/kukah.jpg', detail: 'Young Innovators Award recognition' },
  { name: 'Mamador', image: '/images/sponsors/mamador.jpg', detail: 'Brand partnership' },
  { name: 'MTN', image: '/images/sponsors/mtn.jpg', detail: 'Telecommunications and USSD partner' },
  { name: 'Young Climate Prize', image: '/images/sponsors/young climate prize.png', detail: 'Young Climate Prize recognition' },
];

export const Sponsors = Partners;
