import { Wrapper } from '@/shared';
import styled from 'styled-components';

export const StyledWrapper = styled(Wrapper)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  justify-content: space-between;
  padding-inline: 12%;
  z-index: 50;
`;

export const IconWrapper = styled.div<{ $isActive: boolean }>`
  & path {
    fill: ${({ $isActive }) => ($isActive ? '#bfff6e' : 'white')};
  }
`;
