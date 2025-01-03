'use client';

import { createStore, createEvent } from 'effector';

export const setReferralStatus = createEvent<boolean | undefined>();
export const $referralStatus = createStore<boolean>(false).on(
  setReferralStatus,
  (state, status) => status ?? state
);
