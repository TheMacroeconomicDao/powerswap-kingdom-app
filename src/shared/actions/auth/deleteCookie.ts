'use server';

import { cookies } from 'next/headers';

export const deleteCookie = (name: string) => {
  cookies().delete(name);
};
