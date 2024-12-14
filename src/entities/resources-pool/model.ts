'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { AxiosError } from 'axios';

import { createEffect, createStore, sample, createEvent } from 'effector';

import { loggedIn } from '@/entities';
import { $user } from '@/entities/user';

import { PoolResourcesDataType } from './types';

export const getResourcePool = createEffect<
  void,
  PoolResourcesDataType['data'] | undefined,
  AxiosError
>(async () => {
  // const res = await authHost.get<PoolResourcesDataType>('/kingdom/pool_resources');
  // return res.data.data;
  const res = await serverApiHost.get<PoolResourcesDataType>('/kingdom/pool_resources');
  return res.data.data;
});

export const resetResourcePool = createEvent<void>();

export const $resourcePool = createStore<PoolResourcesDataType['data'] | null>(null)
  .on(getResourcePool.doneData, (_, resources) => resources ?? null)
  .reset(resetResourcePool);

// get resourcePool on login
sample({
  clock: loggedIn,
  target: getResourcePool,
});

// getResourcePool on $user change (update current pool)
sample({
  clock: $user,
  target: getResourcePool,
});
