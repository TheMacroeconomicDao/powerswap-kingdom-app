'use client';

import { createStore, createEvent, sample } from 'effector';

import { ResourceType, $tab, $lastActiveResource } from '@/entities';

export const resetInputs = createEvent<void>();

export const setModalShown = createEvent<boolean>();
export const $modalShown = createStore<boolean>(false)
  .on(setModalShown, (_, data) => data)
  .reset(resetInputs);

export const setResourceBuyAmount = createEvent<number>();
export const $buyResourceAmount = createStore<number>(0)
  .on(setResourceBuyAmount, (_, range) => range)
  .reset(resetInputs);

export const setChosenResourceKey = createEvent<ResourceType>();
export const $chosenResourceKey = createStore<ResourceType | null>(null)
  .on(setChosenResourceKey, (_, resource) => resource)
  .reset(resetInputs);

// reset inputs on tab change
sample({
  clock: $tab,
  target: resetInputs,
});

// set chosen resource key on $lastActiveResource set
sample({
  clock: setModalShown,
  source: $lastActiveResource,
  filter: (resource, modalShown) => !!modalShown && !!resource,
  fn: res => res!,
  target: setChosenResourceKey,
});
