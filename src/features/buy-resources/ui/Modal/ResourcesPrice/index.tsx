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
    <div className='mt-6 flex items-center justify-center flex-col gap-4'>
      <div className='scale-[2]'>
        <Coin />
      </div>
      <h6 className="text-[15px]">
        {price !== undefined && formatNumber(price)}
      </h6>
    </div>
  );
};
