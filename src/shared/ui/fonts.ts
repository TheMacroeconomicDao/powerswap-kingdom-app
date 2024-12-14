import localFont from 'next/font/local';

export const mainFont = localFont({
  src: './fonts/Tickerbit-regular.woff2',
  adjustFontFallback: false,
});

export const fallbackFont = localFont({
  src: './fonts/Hardpixel.otf',
});
