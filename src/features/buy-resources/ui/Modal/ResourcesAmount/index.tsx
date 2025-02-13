'use client';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import { ResourceType } from '@/entities';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../../model';
import { formatNumber } from '@/shared/utils/formatNumber';

export const ResourcesAmount = () => {
  const buyResAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);
  const chosenResKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);

  const icons: {
    [resourceKey in ResourceType]: React.FC<React.SVGProps<SVGElement>>;
  } = {
    crypto: Crypto,
    heat: Heat,
    food: Food,
    energy: Energy,
  };

  const textColors = {
    heat: 'text-[#FFAD31]',
    food: 'text-[#B1FF82]',
    crypto: 'text-[#EE71E2]',
    energy: 'text-[#FEF164]',
  };

  const Icon = icons[chosenResKey ?? 'food'];

  return (
    <div className='mt-7 flex w-full items-center gap-2 justify-end'>
        <h6
          className="text-[15px] mt-1"
          style={{
            color: textColors[chosenResKey ?? 'food'],
          }}
        >
          {formatNumber(buyResAmount)}
      </h6>
        <Icon
          height={12}
          width={12}
        />
    </div>
  );
};
