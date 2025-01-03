'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';

import { createEffect, sample, createStore, createEvent } from 'effector';

import { $kingdom, KingdomType, KingdomTypeArray, pickKingdom } from '@/entities';
import { $user } from '../user-data';
import { $userId } from '../tg-data';
import { UpdateStateType, UpdateStateProps, LastOpenedPageType } from './types';

export const updateStateFx = createEffect<
  UpdateStateProps,
  UpdateStateType['data']['state'] | undefined,
  Error
>(async ({ userId, lastActiveResource, lastOpenedPage }: UpdateStateProps) => {
  const res: { data: UpdateStateType } = await serverApiHost.post('/users/update_state', {
    user_id: userId,
    last_active_resource: lastActiveResource,
    last_opened_page: lastOpenedPage,
  });
  return res.data.data.state;
});

export const $lastActiveResource = createStore<KingdomType | null>(null);

export const setLastOpenedPage = createEvent<LastOpenedPageType>();
export const $lastOpenedPage = createStore<LastOpenedPageType | null>(null).on(
  setLastOpenedPage,
  (_, page) => page
);

// Samples
sample({
  clock: [$lastActiveResource, $lastOpenedPage],
  source: [$lastActiveResource, $lastOpenedPage, $userId],
  filter: ([res, page, userId]) => !!res || (!!page && !!userId),
  fn: ([res, page, userId]) =>
    ({
      userId: userId,
      lastActiveResource: res,
      lastOpenedPage: page,
    }) as UpdateStateProps,
  target: updateStateFx,
});

// write user data to last opened things
sample({
  source: $user,
  filter: user => !!user && !!user.state.last_active_resource,
  fn: user => user?.state.last_active_resource!,
  target: $lastActiveResource,
});

sample({
  source: $user,
  filter: user => !!user && !!user.state.last_opened_page,
  fn: user => user?.state.last_opened_page!,
  target: $lastOpenedPage,
});

// write last opened res
sample({
  source: $kingdom,
  filter: kingdom => !!kingdom,
  target: $lastActiveResource,
});

// write last opened res on pickKingdom
sample({
  clock: pickKingdom,
  filter: kingdom => !!kingdom,
  target: $lastActiveResource,
});

// write last opened res back to $kingdom if it lacks value
sample({
  source: { resource: $lastActiveResource, kingdom: $kingdom },
  filter: ({ resource, kingdom }) =>
    !!resource && KingdomTypeArray.includes(resource) && kingdom !== resource,
  fn: ({ resource }) => resource,
  target: $kingdom,
});
