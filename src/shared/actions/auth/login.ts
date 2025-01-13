'use server';

import axios from 'axios';
import { cookies, headers } from 'next/headers';
import { AuthDataType } from '@/entities/auth';

export const login = async (init_data: string) => {
  const res: { data: AuthDataType } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
    {
      init_data,
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  const tokens = res.data.data;

  cookies().set({
    name: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`,
    value: tokens.access_token,
    sameSite: 'none',
    secure: true,
  });

  cookies().set({
    name: `${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`,
    value: tokens.refresh_token,
    sameSite: 'none',
    secure: true,
  });

  headers().set('jwt-token', tokens.access_token);

  return tokens;
};
