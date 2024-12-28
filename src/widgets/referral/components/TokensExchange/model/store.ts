import { createEffect, sample } from 'effector';
import { serverApiHost } from '@/shared/api/axios-hosts';
import { getRefs, getUserFx } from '@/entities';

export const exchangeTokensFx = createEffect(async () => {
  try {
    const response = await serverApiHost.post('/users/exchange_tokens');
    return response.data;
  } catch (error) {
    console.error('Error exchanging tokens:', error);
    throw error;
  }
});

sample({
  clock: exchangeTokensFx.doneData,
  target: [getRefs, getUserFx],
});
