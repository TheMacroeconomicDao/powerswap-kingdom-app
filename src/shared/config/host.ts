export const HOST =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_HOST_LOCAL_URL
    : process.env.NEXT_PUBLIC_HOST_SERVER_URL;
