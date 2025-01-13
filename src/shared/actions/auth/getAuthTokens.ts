'use server';

import { cookies } from 'next/headers';

export const getAuthTokens = () => {
  const access = cookies().get(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`)?.toString();
  const refresh = cookies().get(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`)?.toString();

  return {
    access,
    refresh,
  };
};
