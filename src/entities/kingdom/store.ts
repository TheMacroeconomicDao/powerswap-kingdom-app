'use client';

import { createEffect, createEvent, createStore, sample } from 'effector';
import { AvailableKingdomsDataType, KingdomType } from './types';
import { serverApiHost } from '@/shared/api/axios-hosts';
import { loggedIn } from '../auth';

// logic for picking a kingdom
export const pickKingdom = createEvent<string>();
export const pickKingdomFx = createEffect<string, AvailableKingdomsDataType['data']>(
  async (kingdom: string) => {
    const res = await serverApiHost.post<AvailableKingdomsDataType>(`/kingdom/pick/${kingdom}`);
    return res.data.data;
  }
);

// logic for getting available kingdoms (currently used to display all kingdoms in kingdom-switcher)
export const getAvailableKingdomsFx = createEffect<void, AvailableKingdomsDataType['data']>(
  async () => {
    // const res = await authHost.get<AvailableKingdomsDataType>('/kingdom/available_kingdoms');
    // return res.data.data;
    const res = await serverApiHost.get<AvailableKingdomsDataType>('/kingdom/available_kingdoms');
    return res.data.data;
  }
);
export const $availableKingdoms = createStore<AvailableKingdomsDataType['data'] | null>(null)
  .on(getAvailableKingdomsFx.doneData, (_, data) => data)
  .on(pickKingdomFx.doneData, (_, data) => data);

// visible kingdom
export const setKingdom = createEvent<KingdomType>();
export const $kingdom = createStore<KingdomType | null>(null);

// get kingdoms on login
sample({
  clock: loggedIn,
  target: getAvailableKingdomsFx,
});

// run a check whether input from setKingdom is correct
sample({
  clock: setKingdom,
  source: $availableKingdoms,
  fn: (availableKingdoms, kingdom) => {
    const kingdoms = availableKingdoms?.filter(item => item.name === kingdom) ?? [];
    if (kingdoms.length > 0) {
      return kingdom;
    }
    return null;
  },
  target: $kingdom,
});

// link pickKingdom event to pickKingdomFx
sample({
  clock: pickKingdom,
  source: $availableKingdoms,
  filter: (source, clock) =>
    source !== null &&
    source.length > 0 &&
    clock.length > 0 &&
    source.find((item) => item.name === clock)?.state === 'available',
  fn: (_, clock) => clock,
  target: pickKingdomFx,
});
