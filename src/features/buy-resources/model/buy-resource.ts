'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';
import { createEffect, createEvent, sample } from 'effector';

import { UserType, resourcePoolModel, PoolResourcesDataType } from '@/entities';

import { setTokens, $user, $userId } from '@/entities/user';

import { BuyResourcesFromPoolParams, BuyResourcesFromPoolDataType } from './types';
import { $buyResourceAmount, $chosenResourceKey } from './inputs';

export const buyResourcesFromPool = createEvent<void>();
export const buyResourcesFromPoolFx = createEffect<
  BuyResourcesFromPoolParams,
  BuyResourcesFromPoolDataType['data'] | undefined,
  Error
>(async ({ userId, resourceKey, amount }: BuyResourcesFromPoolParams) => {
  try {
    const res: { data: BuyResourcesFromPoolDataType } = await serverApiHost.post(
      `/users/buy_resources_from_pool`,
      {
        user_id: userId,
        resource_key: resourceKey,
        amount: amount,
      }
    );
    return res.data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

// link buyResourceFromPool to buyResourceFromPoolFx
sample({
  clock: buyResourcesFromPool,
  source: {
    userId: $userId,
    amount: $buyResourceAmount,
    resourceKey: $chosenResourceKey,
  },
  filter: ({ userId, amount, resourceKey }) => !!userId && !!amount && !!resourceKey,
  fn: ({ userId, amount, resourceKey }) =>
    ({
      userId: userId,
      amount: amount,
      resourceKey: resourceKey,
    }) as BuyResourcesFromPoolParams,
  target: buyResourcesFromPoolFx,
});

// write buyResourceFromPoolFx.doneData to $user
sample({
  source: buyResourcesFromPoolFx.doneData,
  filter: data => !!data,
  fn: data =>
    ({
      id: data?.user.id,
      user_id: data?.user.user_id,
      user_name: data?.user.user_name,
      tokens_amount: data?.user.tokens_amount,
      referrals_tokens_amount: data?.user.referrals_tokens_amount,
      resources_amount: data?.user.resources_amount,
      game_information: data?.user.game_information,
      upgrades_information: data?.user.upgrades_information,
      state: data?.user.state,
    }) as UserType['data'],
  target: $user,
});

// set tokens after buying res
sample({
  source: buyResourcesFromPoolFx.doneData,
  filter: data => !!data,
  fn: data => data?.user.tokens_amount,
  target: setTokens,
});

// write buyResourceFromPoolFx.doneData to $resourcePool
sample({
  source: buyResourcesFromPoolFx.doneData,
  filter: data => !!data,
  fn: data =>
    ({
      entities: data?.entities,
      shared_resources: data?.shared_resources,
      shared_total_resources: data?.shared_total_resources,
      start_reset_time: data?.start_reset_time,
      end_reset_time: data?.end_reset_time,
    }) as PoolResourcesDataType['data'],
  target: resourcePoolModel.$resourcePool,
});
