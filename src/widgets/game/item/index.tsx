import { ItemStyled, ItemText } from './styled';

export interface ItemProps {
  content?: string;
  color?: string;
  secondaryColor?: string;
  icon?: React.ReactNode;
  size?: number;
}
export const Item: React.FC<ItemProps> = ({ content, color, secondaryColor, icon, size }) => {
  return (
    <ItemStyled>
      {icon}
      <ItemText
        $color={color}
        $secondaryColor={secondaryColor}
        $size={size}
        $content={content}
      >
        {content}
      </ItemText>
    </ItemStyled>
  );
};
