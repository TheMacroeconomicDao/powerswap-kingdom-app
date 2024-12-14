import type { PropsWithChildren } from 'react';

import { Header, Footer, TabSwitcher } from '@/widgets';
import { Scaler } from '@/features/scaler';

export default function GameLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative max-h-screen min-h-screen overflow-hidden text-white">
      <Header />
      <Scaler height={800}>{children}</Scaler>
      <TabSwitcher />
      <Footer />
    </div>
  );
}
