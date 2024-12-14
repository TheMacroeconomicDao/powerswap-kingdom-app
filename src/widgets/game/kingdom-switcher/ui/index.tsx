'use client';

import { KingdomSwitchButton } from './kingdom-switch-button';

import { useUnit } from 'effector-react';
import { $availableKingdoms } from '@/entities/kingdom';

export const KingdomSwitcher = () => {
  const kingdoms = useUnit($availableKingdoms);

  return (
    <div className="mt-8 flex w-full items-center justify-center gap-4">
      {kingdoms &&
        kingdoms.length > 0 &&
        kingdoms?.map((kingdom, index) => (
          <KingdomSwitchButton
            kingdomType={kingdom.name}
            kingdomState={kingdom.state}
            key={`kingdom-switch-button-${index}`}
          />
        ))}
    </div>
  );
};
