'use client';

import { motion, AnimatePresence } from 'framer-motion';

import GrowerKingdomTier1 from './assets/kingdoms/grower/tier-1.svg';
import GrowerKingdomTier2 from './assets/kingdoms/grower/tier-2.svg';
import GrowerKingdomTier3 from './assets/kingdoms/grower/tier-3.svg';
import GrowerKingdomTier4 from './assets/kingdoms/grower/tier-4.svg';

import MinerKingdomTier1 from './assets/kingdoms/miner/tier-1.svg';
import MinerKingdomTier2 from './assets/kingdoms/miner/tier-2.svg';
import MinerKingdomTier3 from './assets/kingdoms/miner/tier-3.svg';
import MinerKingdomTier4 from './assets/kingdoms/miner/tier-4.svg';

import PowerKingdomTier1 from './assets/kingdoms/power/tier-1.svg';
import PowerKingdomTier2 from './assets/kingdoms/power/tier-2.svg';
import PowerKingdomTier3 from './assets/kingdoms/power/tier-3.svg';
import PowerKingdomTier4 from './assets/kingdoms/power/tier-4.svg';

import TraderKingdomTier1 from './assets/kingdoms/trader/tier-1.svg';
import TraderKingdomTier2 from './assets/kingdoms/trader/tier-2.svg';
import TraderKingdomTier3 from './assets/kingdoms/trader/tier-3.svg';
import TraderKingdomTier4 from './assets/kingdoms/trader/tier-4.svg';

import { useUnit } from 'effector-react';
import { tap, $kingdom } from '@/entities';
import { StyledWrapper } from './styled';
import { useState } from 'react';
import { TapTapMe } from '@/features/TapTapMe';

export const CurrentKingdom = () => {
  const kingdom = useUnit($kingdom);
  const [tapTrigger, setTapTrigger] = useState(0);

  const kingdoms = {
    crypto: [MinerKingdomTier1, MinerKingdomTier2, MinerKingdomTier3, MinerKingdomTier4],
    heat: [TraderKingdomTier1, TraderKingdomTier2, TraderKingdomTier3, TraderKingdomTier4],
    energy: [PowerKingdomTier1, PowerKingdomTier2, PowerKingdomTier3, PowerKingdomTier4],
    food: [GrowerKingdomTier1, GrowerKingdomTier2, GrowerKingdomTier3, GrowerKingdomTier4],
  };

  // @TODO: change this shit to fetchable tier
  const Kingdom = kingdom && kingdoms[kingdom] ? kingdoms[kingdom][0] : () => <></>;

  const handleClick = () => {
    tap();
    setTapTrigger((prev) => prev + 1); // Увеличиваем значение, чтобы `useEffect` в TapTapMe отработал
  };

  return (
    <AnimatePresence>
      <StyledWrapper
        key="kingdom-wrapper"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [0.8, 1],
          opacity: [0.6, 1],
          translateY: [40, 0],
          transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        exit={{
          scale: [1, 1.2],
          opacity: [1, 0],
          translateY: [0, 40],
          transition: { duration: 0.6, ease: 'circInOut' },
        }}
      >
        <button onClick={handleClick}>
          <Kingdom preserveAspectRatio="meet" className="h-[220px] max-h-[220px] transition-transform duration-75 active:scale-90 active:opacity-90"/>
        </button>
      </StyledWrapper>
      <TapTapMe onTap={tapTrigger} />
    </AnimatePresence>
  );
};
