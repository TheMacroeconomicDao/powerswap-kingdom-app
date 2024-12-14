'use client';

import { createEvent, createStore } from 'effector';

import { TabType } from './types';

export const setTab = createEvent<TabType>();

export const $tab = createStore<TabType>('none').on(setTab, (_, data) => data);
