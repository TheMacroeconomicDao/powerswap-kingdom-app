'use client';

import { createStore, createEvent } from 'effector';

export const setTokens = createEvent<number | undefined>();
export const $tokens = createStore<number>(0).on(setTokens, (state, tokens) => tokens ?? state);
