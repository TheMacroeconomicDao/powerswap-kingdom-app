'use client';

import { serverApiHost } from '@/shared/api/axios-hosts';
import { isAxiosError } from 'axios';

import { createEffect, createStore, createEvent, sample } from 'effector';

import { $user, $userId } from '../../user';
import { TapDataType, PostTapParams } from './types';
import { tapsChunk } from '@/shared/config/tap';
import { $points, setPoints } from '@/entities/user/referral_points';
import { $refs } from '@/entities/referrals';
import {
  $tap_multiplier,
  $tapTimeoutId,
  clearTimeoutIdFx,
  calculateAdditionalTokens,
} from '../store';

export const referralTap = createEvent<void>();
export const postReferralTap = createEvent<void>();

export const postReferralTapFx = createEffect(async ({ referralTaps }: PostTapParams) => {
  try {
    const res: { data: TapDataType } = await serverApiHost.post('/actions/referral_tap', {
      taps_amount: referralTaps,
    });

    return res.data.data.referrals_points;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.message);
    }
  }
});

export const $referralTaps = createStore<number>(0)
  .on(referralTap, count => count + 1)
  .reset(postReferralTapFx);

sample({
  source: $user,
  filter: user => !!user?.tap_multiplier,
  fn: user => user!.tap_multiplier,
  target: $tap_multiplier,
});

sample({
  clock: referralTap,
  source: $tapTimeoutId,
  target: clearTimeoutIdFx,
});

sample({
  clock: referralTap,
  fn: () => setTimeout(postReferralTap, 500),
  target: $tapTimeoutId,
});

sample({
  clock: postReferralTap,
  source: { userId: $userId, referralTaps: $referralTaps },
  filter: ({ userId }) => !!userId,
  fn: ({ userId, referralTaps }) => ({ userId, referralTaps }) as PostTapParams,
  target: postReferralTapFx,
});

sample({
  source: $referralTaps,
  filter: referralTaps => referralTaps >= tapsChunk,
  target: postReferralTap,
});

sample({
  clock: referralTap,
  source: {
    currentPoints: $points,
    referralsData: $refs,
    multiplier: $tap_multiplier,
  },
  fn: ({ currentPoints, referralsData, multiplier }) => {
    const referralsCount = referralsData ? referralsData.referrals_count : 0;
    const tokensToAdd = calculateAdditionalTokens(referralsCount) * multiplier;

    return currentPoints + tokensToAdd;
  },
  target: setPoints,
});
