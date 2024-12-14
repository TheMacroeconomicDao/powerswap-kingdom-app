'use server';

import { cookies } from 'next/headers';

export const setCookie = ({ name, value, ...args }: { name: string; value: string }) => {
  cookies().set({
    name,
    value,
    ...args,
    sameSite: 'none',
    secure: true,
  });
};
