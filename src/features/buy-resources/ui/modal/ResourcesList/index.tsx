'use client';

import { ResourceButton } from '../ResourceButton';

import { useUnit } from 'effector-react';
import { $availableKingdoms, resourcePoolModel } from '@/entities';
import { ResourceWithStateType } from '@/shared/types';

export const ResourcesList = () => {
  const kingdoms = useUnit($availableKingdoms);
  const resources = useUnit(resourcePoolModel.$resourcePool);

  const resourcesWithState =
    resources?.entities
      ?.map(
        res =>
          ({
            name: res.name,
            cost: res.cost,
            current: res.current,
            total: res.total,
            state: kingdoms?.find(kingdom => kingdom.name === res.name)?.state ?? 'locked',
          }) satisfies ResourceWithStateType
      )
      .toSorted((a, b) => +(b.state === 'opened') - +(a.state === 'opened')) ?? [];

  return (
    <div className="mx-auto mt-2 flex size-fit items-center justify-center gap-4 border-[3px] border-white p-2">
      {resourcesWithState.map((resource, idx) => (
        <ResourceButton
          key={`resource-button-${idx}`}
          resource={resource}
        />
      ))}
    </div>
  );
};
