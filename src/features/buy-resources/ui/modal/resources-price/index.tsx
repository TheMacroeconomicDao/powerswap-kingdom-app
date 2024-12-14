'use client';

import Coin from '@/shared/assets/coin.svg';

import { useUnit } from 'effector-react';
import { buyResourcesModelChosenResource } from '@/features/buy-resources/model';

import { formatNumber } from '@/shared/utils/formatNumber';
import { $resources } from '@/entities';

export const ResourcesPrice = () => {
  const price = useUnit(buyResourcesModelChosenResource.$chosenResourceTotalPrice);
  // const data = useUnit(buyResourcesModelChosenResource.$chosenResourceData);
  // const amount = useUnit(buyResourcesModelChosenResource.$chosenResourceBuyMax);

  // console.log(data);
  // console.log(amount);

  return (
    <div className="relative flex min-w-[50%] max-w-[90%] flex-shrink items-center gap-2 border-[2px] border-white px-2 py-1">
      <h6
        className="flex size-full items-center justify-center text-lg"
        style={{
          background: 'linear-gradient(90deg, #9EFFBF 0%, #C0FBFF 50.77%, #96FF65 100%)',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {price !== undefined && formatNumber(price)}
      </h6>
      <div className="absolute right-2 top-0 flex h-full items-center justify-center">
        <Coin
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};
