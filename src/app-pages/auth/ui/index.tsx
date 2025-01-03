'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { LoadingPageUI } from '@/app-pages';

import { retrieveLaunchParams } from '@telegram-apps/sdk';

import { useInitData } from '@telegram-apps/sdk-react';

import { $user, setUserId as setUserIdEvent, setUsername as setUsernameEvent } from '@/entities';

import { useUnit } from 'effector-react';
import { loginFx, $isAuth, $lastOpenedPage } from '@/entities';

export const AuthPageUI = () => {
  const router = useRouter();

  const { initDataRaw } = retrieveLaunchParams();

  const initData = useInitData();

  const setUserId = useUnit(setUserIdEvent);
  const setUsername = useUnit(setUsernameEvent);

  const login = useUnit(loginFx);
  const isAuth = useUnit($isAuth);
  const user = useUnit($user);
  const lastPage = useUnit($lastOpenedPage);

  useEffect(() => {
    if (initData?.user?.id) {
      setUserId(initData.user.id);
    }
    if (initData?.user?.username) {
      setUsername(initData.user.username);
    }
  }, [initData, setUserId, setUsername]);

  useEffect(() => {
    if (initDataRaw && initDataRaw?.length > 0) {
      login(`${initDataRaw}`);
    }
  }, [initDataRaw, login]);

  useEffect(() => {
    if (isAuth && user) {
      router.push(`/${lastPage ?? 'game'}`);
    }
  }, [isAuth, user, router, lastPage]);

  return <LoadingPageUI />;
};
