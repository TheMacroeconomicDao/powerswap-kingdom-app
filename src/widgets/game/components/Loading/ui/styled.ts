'use client';

import { Wrapper } from '@/shared';
import styled, { keyframes } from 'styled-components';

const TextPulsatingAnimated = keyframes`
  0% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledWrapper = styled(Wrapper)`
  height: 100%;
`;

export const PulsatingWrapper = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  animation: ${TextPulsatingAnimated} 1.5s ease-in-out infinite;
`;

export const SpinWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  animation: ${spin} 1.5s ease-in-out infinite;
`;
