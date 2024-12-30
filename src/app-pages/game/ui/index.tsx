'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { $kingdom, $user } from '@/entities';
import { CurrentKingdomDisplay, KingdomSwitcher, LoadingFallback } from '@/widgets';

import { useUnit } from 'effector-react';
import * as kingdomsModel from '@/entities/kingdom';
import { KingdomPick } from '@/features/kingdom-pick';
import { GameStyled } from './styled';

export const GameUI = () => {
  const router = useRouter();

  const availableKingdoms = useUnit(kingdomsModel.$availableKingdoms);
  const kingdom = useUnit($kingdom);
  const user = useUnit($user);

  const isKingdomsNotPicked = !availableKingdoms?.filter(kingdom => kingdom.state === 'available')
    .length;

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <GameStyled>
      {isKingdomsNotPicked ? (
        <>
          <div className="flex-grow overflow-clip">
            {kingdom ? <CurrentKingdomDisplay /> : <LoadingFallback />}
          </div>
          <KingdomSwitcher />
        </>
      ) : (
        <KingdomPick />
      )}
    </GameStyled>
  );
};
