'use client';

import { useState, useEffect, useMemo } from 'react';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';

import { useUnit } from 'effector-react';
import { KingdomType, ResourceType, $resources, UserResourceType, $kingdom } from '@/entities';

import { formatNumber } from '@/shared/utils/formatNumber';

export const KingdomResource = () => {
  const kingdom = useUnit($kingdom);
  const [resource, setResource] = useState<UserResourceType | null>(null);
  const resources = useUnit($resources);

  const icons: Record<ResourceType, React.FC<React.SVGProps<SVGElement>>> = {
    crypto: Crypto,
    energy: Energy,
    heat: Heat,
    food: Food,
  };

  const kingdomsResources = useMemo(
    () => ({
      crypto: 'crypto' as ResourceType,
      heat: 'heat' as ResourceType,
      energy: 'energy' as ResourceType,
      food: 'food' as ResourceType,
    }),
    []
  );

  const resourceKey = kingdomsResources[kingdom as KingdomType];
  const Resource = resourceKey ? icons[resourceKey as ResourceType] : null;

  useEffect(() => {
    if (resources && kingdom) {
      const res = resources.find(res => res.name === resourceKey);
      setResource(res ?? null);
    }
  }, [kingdom, resources, resourceKey]);

  return (
    <div className="mx-auto flex size-fit items-center justify-center gap-[10px] border-[1px] border-white px-3 py-1">
      <h6 className="text-[16px]">{resource ? formatNumber(resource.current) : 'ERR'}</h6>
      <div className="flex size-[18px] items-center justify-center">
        {Resource && resource ? (
          <Resource
            height={18}
            width={18}
          />
        ) : null}
      </div>
    </div>
  );
};
