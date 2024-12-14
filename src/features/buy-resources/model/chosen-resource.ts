'use client';

import { combine } from 'effector';
import { resourcePoolModel } from '@/entities';
import { $tokens } from '@/entities/user/tokens';
import { $chosenResourceKey, $buyResourceAmount } from './inputs';

export const $chosenResourceData = combine(
  resourcePoolModel.$resourcePool,
  $chosenResourceKey,
  (pool, chosenResource) => pool?.entities.find(res => res.name === chosenResource) ?? null
);

export const $chosenResourceBuyMax = combine($chosenResourceData, $tokens, (res, tokens) =>
  res?.cost ? Math.floor(tokens / res.cost) : 0
);

export const $chosenResourceTotalPrice = combine(
  $chosenResourceData,
  $buyResourceAmount,
  (data, amount) => (data?.cost ? data.cost * amount : 0)
);
