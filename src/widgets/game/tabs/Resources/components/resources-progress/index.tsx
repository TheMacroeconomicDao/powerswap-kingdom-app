'use client';

import {
  $availableKingdoms,
  $estimatedTime,
  $timerProgress,
  $totalTime,
  PoolResourceType,
} from '@/entities';

import { ResourceProgress } from '../resource-progress';
import { useUnit } from 'effector-react';
import { ResourceWithStateType } from '@/shared/types';

export const ResourcesProgress = ({ resources }: { resources: PoolResourceType[] }) => {
  const kingdoms = useUnit($availableKingdoms);
  // const time = useUnit($totalTime);
  // const estimatedTime = useUnit($estimatedTime);
  // const timerProgress = useUnit($timerProgress);

  // console.log(time);
  // console.log(estimatedTime);
  // console.log(timerProgress);

  const resourcesWithState = resources
    .map(
      res =>
        ({
          name: res.name,
          cost: res.cost,
          current: res.current,
          total: res.total,
          state: kingdoms?.find(kingdom => kingdom.name === res.name)?.state ?? 'locked',
        }) satisfies ResourceWithStateType
    )
    .toSorted((a, b) => +(b.state === 'opened') - +(a.state === 'opened'));

  return (
    <div className="mt-2 flex flex-col gap-4">
      {resourcesWithState.map((resource, idx) => (
        <ResourceProgress
          key={`resource-progress-${idx}`}
          resource={resource}
          progress={(resource.current / resource.total) * 100}
        />
      ))}
    </div>
  );
};
