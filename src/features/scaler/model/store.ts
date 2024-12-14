'use client';

import { createStore, createEvent } from 'effector';

export const setAppScale = createEvent<number>();
export const $appScale = createStore<number>(1).on(setAppScale, (_, scale) => scale);
