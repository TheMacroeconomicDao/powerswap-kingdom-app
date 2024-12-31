'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { $kingdom, $user, getRefs } from '@/entities';
import { CurrentKingdomDisplay, KingdomSwitcher, LoadingFallback } from '@/widgets';

import { useUnit } from 'effector-react';

export const GameUI = () => {
  const router = useRouter();
  const getReferrals = useUnit(getRefs);
  const kingdom = useUnit($kingdom);
  const user = useUnit($user);

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
    getReferrals();
  }, [user, router, getReferrals]);

  return (
    <div className="min-w-screen max-w-screen max-h-screen min-h-screen overflow-clip">
      <div className="flex-grow overflow-clip">
        {kingdom ? <CurrentKingdomDisplay /> : <LoadingFallback />}
      </div>
      <KingdomSwitcher />
    </div>
  );
};
