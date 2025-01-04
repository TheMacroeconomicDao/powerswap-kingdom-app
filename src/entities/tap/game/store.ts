'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';
import { createEffect, createEvent, createStore, sample } from 'effector';

import { $userId } from '../../user/tg-data';
import { $tokens, setTokens } from '../../user/tokens';
import {
  $resources,
  $user,
  getResourcesFx,
  GetResourcesParams,
  UserResourceType,
} from '../../user';
import { $kingdom, kingdomToResource } from '../../kingdom';

import { TapDataType, PostTapParams } from './types';
import { tapsChunk } from '@/shared/config/tap';

import { clearTimeoutIdFx, $tapTimeoutId, $tap_multiplier } from '../store';

export const tap = createEvent<void>();
export const postTap = createEvent<void>();

export const postTapFx = createEffect(async ({ taps, resourcesId }: PostTapParams) => {
  try {
    const res: { data: TapDataType } = await serverApiHost.post('/actions/tap', {
      resources_key: resourcesId,
      taps_amount: taps,
    });

    return res.data.data.tokens_amount;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $taps = createStore<number>(0)
  .on(tap, taps => taps + 1)
  .reset(postTapFx);

sample({
  source: $user,
  filter: user => !!user?.tap_multiplier,
  fn: user => user!.tap_multiplier,
  target: $tap_multiplier,
});

sample({
  clock: tap,
  source: $tapTimeoutId,
  target: clearTimeoutIdFx,
});

sample({
  clock: tap,
  fn: () => setTimeout(postTap, 2000),
  target: $tapTimeoutId,
});

sample({
  clock: postTap,
  source: { userId: $userId, taps: $taps, kingdom: $kingdom },
  filter: ({ userId, kingdom }) => !!userId && !!kingdom,
  fn: ({ userId, taps, kingdom }) => ({
    userId,
    taps,
    resourcesId: kingdomToResource[kingdom!],
  }),
  target: postTapFx,
});

sample({
  source: $taps,
  filter: taps => taps >= tapsChunk,
  target: postTap,
});

sample({
  clock: tap,
  source: { tokens: $tokens, multiplier: $tap_multiplier },
  fn: ({ tokens, multiplier }) => tokens + 100 * multiplier,
  target: setTokens,
});

sample({
  clock: tap,
  source: { resources: $resources, kingdom: $kingdom },
  filter: ({ resources, kingdom }) => !!kingdom && !!resources,
  fn: ({ resources, kingdom }) =>
    resources!.map(res =>
      res.name === kingdom
        ? ({
            cost: res.cost,
            current: res.current + 1,
            name: res.name,
            state: res.state,
            total: res.total,
          } satisfies UserResourceType)
        : res
    ),
  target: $resources,
});

sample({
  clock: postTapFx.doneData,
  source: { userId: $userId },
  filter: ({ userId }) => !!userId,
  fn: ({ userId }) => ({ userId }) as GetResourcesParams,
  target: getResourcesFx,
});
