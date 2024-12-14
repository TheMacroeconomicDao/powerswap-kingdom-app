import { createEffect, createStore, createEvent } from 'effector';

export const clearTimeoutIdFx = createEffect<NodeJS.Timeout | null, void, Error>(
  (timeout: NodeJS.Timeout | null) => {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
);

export const $tapTimeoutId = createStore<NodeJS.Timeout | null>(null).reset(clearTimeoutIdFx);

export const $tap_multiplier = createStore<number>(1);

export const calculateAdditionalTokens = (referralsCount: number) => {
  return referralsCount < 10 ? 100 : referralsCount < 100 ? 200 : referralsCount < 150 ? 400 : 800;
};
