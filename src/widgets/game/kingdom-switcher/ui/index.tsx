'use client';

import { KingdomSwitchButton } from './kingdom-switch-button';

import { useUnit } from 'effector-react';
import { $availableKingdoms } from '@/entities/kingdom';
import { StyledWrapper } from './styled';

export const KingdomSwitcher = () => {
  const kingdoms = useUnit($availableKingdoms);
  return (
    <StyledWrapper>
      {kingdoms &&
        kingdoms.length > 0 &&
        kingdoms?.map((kingdom, index) => (
          <KingdomSwitchButton
            kingdomType={kingdom.name}
            kingdomState={kingdom.state}
            key={`kingdom-switch-button-${index}`}
          />
        ))}
    </StyledWrapper>
  );
};
