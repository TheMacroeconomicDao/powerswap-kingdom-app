'use client';

import { CurrentKingdom, KingdomResource, TokensDisplay } from '@/widgets';

import { useUnit } from 'effector-react';
import { $kingdom, $lastActiveResource, $lastOpenedPage } from '@/entities';

export const CurrentKingdomDisplay = () => {
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
