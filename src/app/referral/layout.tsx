'use client';

import { type PropsWithChildren } from 'react';
import { AboutUs, RefTabSwitcher, ExitButton } from '@/widgets';

import Queen from '@/shared/assets/queen.svg';

import { Scaler } from '@/features/scaler';

import styles from '@/shared/ui/styles/referall-tab/referral.module.css';

import 'normalize.css/normalize.css';
import { useRouter } from 'next/navigation';
import { setLastOpenedPage } from '@/entities';
import { useUnit } from 'effector-react';

export default function ReferralLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const setLastPage = useUnit(setLastOpenedPage);

  const handleClick = () => {
    router.push('/game');
    setLastPage('game');
  };

  return (
    <main className="relative h-[100vh] w-[100vw] overflow-hidden text-white">
      <Scaler height={800}>
        <div
          className={`${styles.scroll} max-size-full relative z-30 flex size-full flex-col items-center overflow-x-clip text-center`}
        >
          {children}
        </div>
      </Scaler>
      <RefTabSwitcher />
      <div className="fixed bottom-0 left-0 z-50 flex h-[80px] w-full items-center justify-center rounded-t-[20px] border-t-[1px] border-[#dcdcdce6] bg-[#0e0e0e]">
        <AboutUs />
      </div>
      <button
        onClick={handleClick}
        className="fixed left-8 top-7 z-50 size-[64px]"
      >
        <Queen />
      </button>
      <div className="fixed right-8 top-7 z-50 flex w-full flex-row-reverse">
        <ExitButton />
      </div>
    </main>
  );
}
