'use client';

import { createStore, createEffect, sample } from 'effector';

import { LeaderboardDataType, LeaderboardUnitType } from './types';
import { serverApiHost } from '@/shared/api/axios-hosts';
import { loggedIn } from '../auth';
import { postTapFx } from '../tap/game';

export const getLeadersFx = createEffect(async () => {
  const res = await serverApiHost.get<LeaderboardDataType>('/users/get_leaders');
  return res.data.data;
});

export const $leaderboard = createStore<LeaderboardUnitType[] | null>(null).on(
  getLeadersFx.doneData,
  (_, leaders) => leaders ?? null
);

sample({
  clock: [loggedIn, postTapFx.doneData],
  target: getLeadersFx,
});
