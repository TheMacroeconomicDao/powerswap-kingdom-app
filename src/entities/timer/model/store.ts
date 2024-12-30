'use client';

import { combine, createStore, createEffect, createEvent, sample } from 'effector';

import { resourcePoolModel } from '@/entities/resources-pool';

const $startTime = combine(resourcePoolModel.$resourcePool, pool => pool?.start_reset_time ?? 0);
const $endTime = combine(resourcePoolModel.$resourcePool, pool => pool?.end_reset_time ?? 0);
export const $totalTime = combine($startTime, $endTime, (start, end) =>
  Math.floor(
    end - start
    // / 1000 UNCOMMENT IF THIS GOES IN ms
  )
);

export const $estimatedTime = createStore<number>(0);
export const $timerProgress = combine($estimatedTime, $totalTime, (estimated, total) =>
  Math.floor((estimated / total) * 100)
);

const tick = createEvent<void>();

const startTimerInterval = createEffect<void, NodeJS.Timeout, void>(() => {
  return setInterval(tick, 1000);
});

const stopTimerInterval = createEffect<NodeJS.Timeout | null, void, void>(
  async (timerId: NodeJS.Timeout | null) => {
    if (timerId) {
      clearInterval(timerId);
    }
  }
);

const $timerId = createStore<NodeJS.Timeout | null>(null);

// set estimated time on tick and loginFx
sample({
  clock: [tick, resourcePoolModel.getResourcePool.doneData],
  source: $endTime,
  filter: end => !!end,
  // @ts-ignore
  fn: end =>
    Math.floor(end - new Date().getTime() / 1000) >= 0
      ? Math.floor(end - new Date().getTime() / 1000)
      : 0,
  target: $estimatedTime,
});

// stop prev and start a new one on getResourcePool.doneData
sample({
  clock: resourcePoolModel.getResourcePool.doneData,
  source: $timerId,
  target: [stopTimerInterval, startTimerInterval],
});

// set timerId
sample({
  source: startTimerInterval.doneData,
  target: $timerId,
});

// update resources-pool when time's up
sample({
  source: $estimatedTime,
  filter: estimated => estimated === 0,
  target: [resourcePoolModel.resetResourcePool, resourcePoolModel.getResourcePool],
});
