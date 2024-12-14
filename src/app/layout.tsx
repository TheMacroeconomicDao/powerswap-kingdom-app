import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';

import '../shared/i18n';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css';
import './_assets/globals.css';

import { mainFont, fallbackFont } from '@/shared/ui/fonts';

export const metadata: Metadata = {
  title: 'Power Swap',
  description: "Crypto project that wants to build it's own eco system",
};

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className="no-user-drag h-[100dvh]"
        style={{
          color: 'white',
          backgroundColor: '#0e0e0e',
          fontFamily: `${mainFont.style.fontFamily}, ${fallbackFont.style.fontFamily}`,
        }}
      >
        <Root>{children}</Root>
      </body>
    </html>
  );
}
