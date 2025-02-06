'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { AxiosError } from 'axios';

import { createEffect, createStore, sample, createEvent } from 'effector';

import { loggedIn } from '@/entities';
import { $user } from '@/entities/user';

import { UpgradesDataType } from './types';

export const getUpgrades = createEffect<
  void,
  UpgradesDataType['data'] | undefined,
  AxiosError
>(async () => {
  const res = await serverApiHost.get<UpgradesDataType>('/api/v1/basic_upgrades/get_all');
  return res.data.data;
});

export const resetUpgrades = createEvent<void>();

export const $upgrades = createStore<UpgradesDataType['data'] | null>(null)
  .on(getUpgrades.doneData, (_, upgrades) => upgrades ?? null)
  .reset(resetUpgrades);

// Получаем апгрейды при логине
sample({
  clock: loggedIn,
  target: getUpgrades,
});

// Обновляем апгрейды при изменении пользователя
sample({
  clock: $user,
  target: getUpgrades,
});