'use client';

import { Box } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const WHATSAPP_ORDER_URL =
  'https://api.whatsapp.com/send?phone=2347032051935&text=Hi+there%2C+I+would+like+to+order+some+Venille+Sanitary+Pads';

const BUTTON_SIZE = 52;

export function WhatsAppFloatingButton() {
  return (
    <Box
      style={{
        position: 'fixed',
        bottom: 'max(24px, env(safe-area-inset-bottom, 0px))',
        right: 'max(24px, env(safe-area-inset-right, 0px))',
        zIndex: 20,
      }}
    >
      <motion.a
        href={WHATSAPP_ORDER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order Venille Sanitary Pads on WhatsApp"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'relative',
          width: BUTTON_SIZE + 4,
          height: BUTTON_SIZE + 4,
          borderRadius: 999,
          background: `linear-gradient(135deg, #25D366 0%, #128C7E 100%)`,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
          textDecoration: 'none',
        }}
      >
        <IconBrandWhatsapp size={28} stroke={1.5} />
      </motion.a>
    </Box>
  );
}
