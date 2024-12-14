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
    <div className="relative flex min-w-[50%] max-w-[90%] flex-shrink items-center gap-2 border-[2px] border-white px-2 py-1">
      <h6
        className="flex size-full items-center justify-center text-lg"
        style={{
          color: textColors[chosenResKey ?? 'food'],
        }}
      >
        {formatNumber(buyResAmount)}
      </h6>
      <div className="absolute right-2 top-0 flex h-full items-center justify-center">
        <Icon
          height={24}
          width={24}
        />
      </div>
    </div>
  );
};
