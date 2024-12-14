'use client';

import { createEvent, createStore } from 'effector';

import { ReferralTabType } from './types';

export const setRefTab = createEvent<ReferralTabType>();

export const $refTab = createStore<ReferralTabType>('none').on(setRefTab, (_, data) => data);
