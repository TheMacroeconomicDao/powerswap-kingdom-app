'use client';

import { createStore, createEvent } from 'effector';

export const setPoints = createEvent<number | undefined>();
export const $points = createStore<number>(0).on(setPoints, (state, points) => points ?? state);
