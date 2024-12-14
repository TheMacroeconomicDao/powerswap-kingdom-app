'use client';

import MinerIcon from '@/shared/ui/icons/kingdoms/miner.svg';
import GrowerIcon from '@/shared/ui/icons/kingdoms/grower.svg';
import PowerIcon from '@/shared/ui/icons/kingdoms/power.svg';
import TraderIcon from '@/shared/ui/icons/kingdoms/trader.svg';

import Lock from '@/shared/assets/Lock.svg';
import LockGreen from '@/shared/assets/Lock-green.svg';

import { motion } from 'framer-motion';

import {
  KingdomType,
  KingdomStateUnitType,
  setKingdom as setKingdomEvent,
  pickKingdom as pickKingdomEvent,
} from '@/entities';
import { useUnit } from 'effector-react';

interface KingdomSwitchButtonProps {
  kingdomType: KingdomType;
  kingdomState: KingdomStateUnitType;
}

export const KingdomSwitchButton: React.FC<KingdomSwitchButtonProps> = ({
  kingdomType,
  kingdomState,
}) => {
  const resourceIcons = {
    crypto: MinerIcon,
    heat: TraderIcon,
    energy: PowerIcon,
    food: GrowerIcon,
  };

  const setKingdom = useUnit(setKingdomEvent);
  const pickKingdom = useUnit(pickKingdomEvent);

  const Resource = resourceIcons[kingdomType];

  const getIcon = () => {
    switch (kingdomState) {
      case 'opened':
        return Resource ? (
          <Resource
            height={55}
            width={55}
          />
        ) : null;
      case 'available':
        return <LockGreen />;
      case 'locked':
        return <Lock />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    switch (kingdomState) {
      case 'opened':
        setKingdom(kingdomType);
        break;
      case 'available':
        pickKingdom(kingdomType);
        break;
      default:
        break;
    }
  };

  return (
    <motion.button
      initial={{ scale: 1, opacity: 1 }}
      whileTap={{
        scale: 0.9,
        opacity: 0.9,
        transition: {
          duration: 0.2,
          type: 'spring',
          bounce: 0.6,
        },
      }}
      className="flex max-h-[55px] min-h-[55px] min-w-[55px] max-w-[55px] flex-grow items-center justify-center border-[3px] border-white p-1"
      onClick={handleClick}
    >
      {getIcon()}
    </motion.button>
  );
};
