'use client';

import { KingdomType, pickKingdom } from '@/entities';
import { createStore, createEvent, sample } from 'effector';

export const setPickedKingdom = createEvent<KingdomType>();
export const $pickedKingdom = createStore<KingdomType>('food').on(
  setPickedKingdom,
  (_, kingdom) => kingdom
);

sample({
  clock: $pickedKingdom,
  target: pickKingdom,
});
