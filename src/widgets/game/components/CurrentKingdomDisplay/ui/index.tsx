'use client';

import { CurrentKingdom, KingdomResource, TokensDisplay, UpdateModal } from '@/widgets';

import { useUnit } from 'effector-react';
import { $kingdom, $lastActiveResource, $lastOpenedPage } from '@/entities';
import { useEffect } from 'react';
import { $tab, setTab } from '@/entities';

export const CurrentKingdomDisplay = () => {

    useEffect(() => {
      setTab('update-tab');
    }, []);

  const textColors = {
    crypto: 'text-[#EE71E2]',
    heat: 'text-[#7CB1FF]',
    energy: 'text-[#FFAD31]',
    food: 'text-[#B1FF82]',
  };

  const kingdom = useUnit($kingdom);

  return (
      <div className={`${kingdom && textColors[kingdom]} flex flex-col gap-1`}>
        <CurrentKingdom />
        <TokensDisplay />
        <KingdomResource />
      </div>
  );
};
