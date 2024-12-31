'use client';

import styled from '@emotion/styled';

export const KingdomPickStatsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const KingdomPickStatStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export interface KingdomPickStatItemProps {
  $production?: '-' | '+';
}
export const KingdomPickStatItemStyled = styled.span<KingdomPickStatItemProps>`
  color: ${({ $production }) => {
    switch ($production) {
      case '-':
        return '#FF385C';
      case '+':
        return '#83FA79';
      default:
        return '#fff';
    }
  }};
  text-align: center;
`;
