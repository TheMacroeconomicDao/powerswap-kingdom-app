'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { isAxiosError, AxiosError } from 'axios';

import { createEffect, createStore, sample, attach } from 'effector';

import { loggedIn } from '../auth';
import { PingDataType } from './types';

export const ping = createEffect<void, PingDataType['data'] | undefined, AxiosError>(async () => {
  try {
    const res: { data: PingDataType } = await serverApiHost.get('/users/ping');

    return res.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const startPingIntervalFx = createEffect<void, NodeJS.Timeout, Error>(() => {
  ping();
  return setInterval(() => {
    ping();
  }, 180000); // 180 секунд
});

export const stopPingIntervalFx = createEffect<NodeJS.Timeout, void, Error>(
  (intervalId: NodeJS.Timeout) => {
    clearInterval(intervalId);
  }
);

export const $pingIntervalId = createStore<NodeJS.Timeout | null>(null)
  .on(startPingIntervalFx.doneData, (_, intervalId) => intervalId)
  .reset(stopPingIntervalFx.done);
// .reset(logout);

sample({
  clock: loggedIn,
  source: $pingIntervalId,
  filter: id => !!id,
  target: [stopPingIntervalFx, startPingIntervalFx],
});
