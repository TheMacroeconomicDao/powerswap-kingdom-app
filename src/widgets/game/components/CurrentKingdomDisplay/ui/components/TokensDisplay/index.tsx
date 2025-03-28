'use client';

import Coin from '@/shared/assets/coin.svg';

import { useUnit } from 'effector-react';
import { $tokens } from '@/entities';

import { formatNumber } from '@/shared/utils/formatNumber';
import { useTranslation } from 'react-i18next';

export const TokensDisplay = () => {
  const tokens = useUnit($tokens);
  const { t } = useTranslation('translation', { keyPrefix: 'game.home' });

  return (
    <div className="flex flex-col gap-2">
      <div
        className="mx-auto mt-1 flex items-center gap-[8px] border-[1px] px-[10px]"
        // style={{
        //   width: `${(tokens.toString().length ?? 4) * 11}px`,
        // }}
      >
        <h6 className="font-normal">{formatNumber(tokens)}</h6>
        <Coin />
      </div>
      <h6 className="text-center text-[14px] text-white tracking-[1.7px]">{t('pswTokens.title')}</h6>
    </div>
  );
};
