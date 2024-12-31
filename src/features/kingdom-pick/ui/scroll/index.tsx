'use client';

import { forwardRef } from 'react';

import { KingdomPickScrollStyled } from './styled';

export interface KingdomPickScrollProps {
  children?: React.ReactNode;
}
export const KingdomPickScroll = forwardRef<HTMLDivElement | null, KingdomPickScrollProps>(
  ({ children }, ref) => {
    return <KingdomPickScrollStyled ref={ref}>{children}</KingdomPickScrollStyled>;
  }
);
