import axios, { AxiosError } from 'axios';
import { getAuthTokens } from '@/actions/auth/getAuthTokens';
import { setCookie } from '@/actions/auth/setCookie';
import { deleteCookie } from '@/actions/auth/deleteCookie';
import { HOST } from '../config/host';

export const API_URL = `${HOST}/api/v1`;
export const NEXT_API_URL = process.env.NEXT_PUBLIC_API_URL;
// export const NEXT_SERVER_API_URL = process.env.NEXT_PUBLIC_HOST_SERVER_URL;

export const nextApiHost = axios.create({
  baseURL: `${NEXT_API_URL}/next-api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export const serverApiHost = axios.create({
  baseURL: `/api`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
//
// const refreshTokens = async () => {
//   try {
//     const tokens = getAuthTokens();
//
//     const newTokens = await axios.post<{
//       data: {
//         access_token: string;
//       };
//     }>(
//       `${API_URL}/auth/update_access_token`,
//       {
//         refresh_token: tokens.refresh,
//       },
//       {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//
//     setCookie({
//       name: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`,
//       value: newTokens.data.data.access_token,
//     });
//
//     return newTokens.data.data.access_token;
//   } catch (error) {
//     // if error occured while refreshing tokens (ex: tokens are missing) -> redirect to '/' so it relogins
//     deleteCookie(`${process.env.NEXT_PUBLIC_ACCESS_TOKEN_NAME}`);
//     deleteCookie(`${process.env.NEXT_PUBLIC_REFRESH_TOKEN_NAME}`);
//     window.location.href = '/';
//   }
// };

// authHost.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
//   const tokens = getAuthTokens();

//   config.headers.set('jwt-token', tokens?.access);

//   return config;
// });
//
// authHost.interceptors.response.use(
//   res => res,
//   async (error: AxiosError) => {
//     const originalRequest = error.config;
//
//     if (
//       error.response?.status === 401
//       //  || error.response?.status === 422
//     ) {
//       try {
//         //const newTokens =
//         await refreshTokens();
//
//         // ### may not work (in Chrome especially)
//         // originalRequest?.headers.set('jwt-token', newTokens);
//         // ###
//         // @ts-ignore
//         return authHost(originalRequest);
//       } catch (refreshError) {
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
