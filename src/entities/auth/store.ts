'use client';

import { createStore, createEffect, sample, createEvent } from 'effector';
import { AuthDataType } from './types';
import { serverApiHost } from '@/shared/api/axios-hosts';

export const loginFx = createEffect<string, AuthDataType['data'], Error>(
  async (init_data: string) => {
    // const res = await axios.post<AuthDataType>(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
    //   {
    //     init_data,
    //   },
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // return res.data.data;
    const res = await serverApiHost.post<AuthDataType>('/auth/login', { init_data });
    return res.data.data;
  }
);

export const loggedIn = createEvent<void>();

export const $isAuth = createStore<boolean>(false).on(
  loginFx.doneData,
  (_, tokens) => !!tokens.access_token && !!tokens.refresh_token
);

// fire loggedIn event on loginFx.doneData
sample({
  clock: loginFx.doneData,
  target: loggedIn,
});
