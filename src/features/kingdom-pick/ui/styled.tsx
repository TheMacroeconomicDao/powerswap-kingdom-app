import { KingdomType } from '@/entities';
import { Item } from '@/widgets/game/item';
import styled from '@emotion/styled';
import Image from 'next/image';

export const KingdomPickStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  margin-top: 20px;
  padding: 18px;
  align-items: center;
  border: 4px solid white;
`;

export const KingdomPickCard = styled.div`
  min-width: 100vw;
  flex-grow: 1;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
  padding-block: 30px 18px;
  scroll-snap-align: center;
`;

export interface KingdomPickIconProps {
  width?: number;
  height?: number;
}
export const KingdomPickIcon = styled(Image)<KingdomPickIconProps>`
  ${({ width, height }) => `
  ${width && `width: ${width}px`};
  ${height && `height: ${height}px`};
`}
`;

export const KingdomPickTitlesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
`;

export interface KingdomPickTitleProps {
  $kingdom?: KingdomType;
}
export const KingdomPickTitle = styled.div<KingdomPickTitleProps>`
  margin-inline: auto;
  position: relative;
  text-align: center;
  &:before {
    content: '';
    width: 100%;
    height: 80%;
    position: absolute;
    top: 8%;
    left: 0;
    background: ${({ $kingdom }) => {
      switch ($kingdom) {
        case 'food':
          return 'linear-gradient(90deg, #0e0e0e, rgba(131, 250, 121, 0.3), #0e0e0e)';
        case 'crypto':
          return 'linear-gradient(90deg, #0e0e0e, rgba(255, 53, 186, 0.45), #0e0e0e)';
      }
    }};
    z-index: -1;
  }
`;
export const KingdomPickTitleText = styled(Item)``;

export const KingdomPickSubtitle = styled.span`
  font-style: italic;
  font-size: 16px;
  font-weight: 100;
  &:before {
    content: '-';
  }
  &:after {
    content: '-';
  }
`;

export interface KingdomPickButton {
  $color?: string;
}
export const KingdomPickButton = styled.button<KingdomPickButton>`
  all: unset;
  padding: 8px 81px;
  background-color: #fff;
  color: black;
  text-transform: uppercase;
  font-size: 1.2rem;
  border: 4px solid white;
  margin-top: auto;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: white;
    background-color: ${({ $color }) => $color ?? 'rgba(131, 250, 121, 0.5)'};
    box-shadow: inset 2px 2px 0px 2px rgba(0, 0, 0, 0.25);
    transform: translateY(1px);
  }
  transition: all 100ms;
`;

export const KingdomPickDotsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-block: 24px;
`;

export interface DotProps {
  $active?: boolean;
}
export const KingdomPickDot = styled.button<DotProps>`
  all: unset;
  ${({ $active }) => {
    switch ($active) {
      case true:
        return `
          width: 16px;
          height: 16px;
          background-color: white;
      `;
      default:
        return `
          width: 8px;
          height: 8px;
          background-color: black;
          border: 4px solid white;
        `;
    }
  }}
  &:hover {
    cursor: pointer;
  }
`;
