'use client';

import styled from '@emotion/styled';

export const KingdomPickScrollStyled = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
