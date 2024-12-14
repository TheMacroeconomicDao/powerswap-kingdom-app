'use client';

import { createStore, createEvent } from 'effector';

export const setUserId = createEvent<number>();
export const $userId = createStore<number | null>(null).on(setUserId, (_, userId) => userId);

export const setUsername = createEvent<string>();
export const $username = createStore<string | null>(null).on(setUsername, (_, name) => name);
