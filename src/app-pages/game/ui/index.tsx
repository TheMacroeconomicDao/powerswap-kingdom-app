'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { $kingdom, $user, getRefs } from '@/entities';
import { CurrentKingdomDisplay, KingdomSwitcher, LoadingFallback } from '@/widgets';

import { useUnit } from 'effector-react';
import * as kingdomsModel from '@/entities/kingdom';
import { KingdomPick } from '@/features/kingdom-pick';
import { GameStyled } from './styled';

export const GameUI = () => {
  const router = useRouter();
  const getReferrals = useUnit(getRefs);
  const availableKingdoms = useUnit(kingdomsModel.$availableKingdoms);
  const kingdom = useUnit($kingdom);
  const user = useUnit($user);

  const isKingdomsNotPicked = !availableKingdoms?.filter(kingdom => kingdom.state === 'available')
    .length;

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
    getReferrals();
  }, [user, router, getReferrals]);

  return (
    <GameStyled>
      {isKingdomsNotPicked ? (
        <>
          <div className="flex-grow overflow-clip">
            {kingdom ? <CurrentKingdomDisplay /> : <div className='min-h-[80vh] flex items-center'> <LoadingFallback /></div>} 
          </div>
          <KingdomSwitcher />
        </>
      ) : (
        <KingdomPick />
      )}
    </GameStyled>
  );
};
