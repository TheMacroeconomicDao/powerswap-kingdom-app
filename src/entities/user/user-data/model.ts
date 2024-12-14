'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';

import { createStore, createEffect, sample } from 'effector';

import { loggedIn } from '@/entities';

import { $userId, $username } from '../tg-data';
import { setTokens } from '../tokens';

import { UserType, UpdateUserParams } from './types';

export const getUserFx = createEffect(async () => {
  // const res = await authHost.get<UserType>(`/users/get_user`);
  // return res.data.data;
  const res = await serverApiHost.get<UserType>('/users/get_user');
  return res.data.data;
});

export const updateUserFx = createEffect<UpdateUserParams, UserType['data'] | undefined, Error>(
  async ({ userId, username }: UpdateUserParams) => {
    const res: { data: UserType } = await serverApiHost.post(`/users/update`, {
      user_id: userId,
      user_name: username,
    });
    return res.data.data;
  }
);

export const $user = createStore<UserType['data'] | null>(null).on(
  getUserFx.doneData,
  (_, user) => user ?? null
);
// .reset(logout);

// Samples

sample({
  clock: loggedIn,
  target: getUserFx,
});

// update username in case of it's absence
sample({
  clock: $user,
  source: { userId: $userId, username: $username },
  filter: (source, user) =>
    !!source.userId &&
    !!source.username &&
    (user?.user_name === '' || user?.user_name.toLowerCase() === 'unknown'),
  fn: ({ userId, username }) =>
    ({
      userId: userId,
      username: username,
    }) as UpdateUserParams,
  target: updateUserFx,
});

// write updateUserFx.doneData to $user
sample({
  source: updateUserFx.doneData,
  filter: userData => !!userData,
  target: $user,
});

// write $tokens on $user change
sample({
  source: $user,
  fn: user => user?.tokens_amount,
  filter: user => !!user?.tokens_amount,
  target: setTokens,
});
