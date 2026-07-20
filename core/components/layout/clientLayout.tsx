'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';
import { AppContextProvider } from '@/core/context';
import { queryClient } from '@/core/middlewares/query-client';
import { venilleColors } from '@/core/themes/venille-colors';
import { Footer } from '../navigation/footer';
import { Navbar } from '../navigation/navbar';
import { WhatsAppFloatingButton } from '../buttons/whatsapp_floating_button';
import { Box } from '@mantine/core';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationProgress color={venilleColors.primary} zIndex={1000001} />
      <WhatsAppFloatingButton />
      <Box className="relative" style={{ backgroundColor: '#FFFFFF' }}>
        <Notifications position="top-right" />
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <ModalsProvider>
              <Navbar />
              <Box component="main">{children}</Box>
              <Footer />
            </ModalsProvider>
          </AppContextProvider>
        </QueryClientProvider>
      </Box>
    </>
  );
}
