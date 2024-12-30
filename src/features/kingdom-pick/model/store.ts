'use client';

import { KingdomType } from '@/entities';
import { createStore, createEvent } from 'effector';

export const setPickedKingdom = createEvent<KingdomType>();
export const $pickedKingdom = createStore<KingdomType>('food').on(
  setPickedKingdom,
  (_, kingdom) => kingdom
);
