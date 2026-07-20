/**
 * Brand palette derived from venille.com.ng (Astra theme global colors).
 * @see https://venille.com.ng/
 */
export const venilleColors = {
  primary: '#084AF3',
  primaryLight: '#4175FC',
  primaryDark: '#0639C2',
  primaryMuted: '#A8C4FB',
  primarySubtle: '#E8EFFE',

  ink: '#101218',
  inkSoft: '#1a1d26',
  text: '#494B51',
  textMuted: '#4B4F58',

  white: '#FFFFFF',
  surface: '#F3F5F5',
  background: '#F6F7F8',
  border: '#EAEAEA',
  cream: '#F9F6F1',

  black: '#000000',
  success: '#059669',
} as const;

export const venilleLayout = {
  sectionPy: { base: 72, md: 96 },
  sectionGap: 48,
  contentMax: 640,
  imageAspect: '4/5' as const,
  containerSize: 'xl' as const,
  radius: { card: 24, button: 12, pill: 100, device: 32 },
  shadow: {
    card: '0 4px 24px rgba(16, 18, 24, 0.06)',
    cardHover: '0 16px 40px rgba(8, 74, 243, 0.12)',
    hero: '0 40px 80px rgba(0, 0, 0, 0.35)',
    device: '0 32px 64px rgba(0, 0, 0, 0.2)',
    glow: '0 0 0 1px rgba(8, 74, 243, 0.15), 0 24px 48px rgba(8, 74, 243, 0.12)',
  },
  mesh: {
    light: 'radial-gradient(ellipse 80% 60% at 70% 0%, rgba(8, 74, 243, 0.08) 0%, transparent 60%)',
    dark: 'radial-gradient(ellipse 80% 60% at 30% 100%, rgba(65, 117, 252, 0.15) 0%, transparent 60%)',
  },
  glass: {
    bg: 'rgba(255, 255, 255, 0.72)',
    border: 'rgba(255, 255, 255, 0.5)',
    darkBg: 'rgba(255, 255, 255, 0.06)',
    darkBorder: 'rgba(255, 255, 255, 0.12)',
  },
  bento: { gap: 16, radius: 20 },
  carousel: { slideGap: 16 },
  spotlight: { gutter: 64 },
} as const;

export const venilleTypography = {
  display: 'clamp(2.75rem, 7vw, 4.75rem)',
  section: 'clamp(2rem, 4vw, 3rem)',
  step: 'clamp(1.75rem, 3.5vw, 2.5rem)',
  body: '1.0625rem',
} as const;

/** Benchling-inspired neutral enterprise palette */
export const benchlingColors = {
  heading: '#0B0D12',
  body: '#3D3F45',
  muted: '#6B6E76',
  white: '#FFFFFF',
  surface: '#F7F7F8',
  border: '#E5E5E5',
  borderSubtle: '#EDEDED',
  link: venilleColors.primary,
} as const;

export const benchlingLayout = {
  sectionPy: { base: 64, md: 96 },
  containerSize: 'xl' as const,
  radius: { card: 10, button: 6, image: 8 },
  maxContent: 720,
  heroTitle: 'clamp(2.5rem, 5.5vw, 4.25rem)',
  sectionTitle: 'clamp(1.75rem, 3.5vw, 2.5rem)',
  cardTitle: '1.25rem',
  body: '1.0625rem',
  bodySmall: '0.9375rem',
} as const;

export const benchlingTypography = {
  hero: benchlingLayout.heroTitle,
  section: benchlingLayout.sectionTitle,
  body: benchlingLayout.body,
} as const;

export type VenilleColor = keyof typeof venilleColors;
