import styled from '@emotion/styled';

export const ItemStyled = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export interface ItemTextProps {
  $color?: string;
  $secondaryColor?: string;
  $size?: number;
  $content?: string;
}
export const ItemText = styled.span<ItemTextProps>`
  color: ${({ $color }) => ($color ? $color : 'white')};
  position: relative;
  font-size: ${({ $size }) => $size ?? 1}rem;
  ${({ $secondaryColor }) => $secondaryColor && `text-shadow: 2px 1px 0 ${$secondaryColor}`}
`;
