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
import { useEffect, useState } from 'react';

export const CurrentKingdom = () => {
  const [texts, setTexts] = useState<{ text: string; x: string; y: string; id: number }[]>([]);
  const [id, setId] = useState(0);

  const kingdom = useUnit($kingdom);

  const kingdoms = {
    crypto: [MinerKingdomTier1, MinerKingdomTier2, MinerKingdomTier3, MinerKingdomTier4],
    heat: [TraderKingdomTier1, TraderKingdomTier2, TraderKingdomTier3, TraderKingdomTier4],
    energy: [PowerKingdomTier1, PowerKingdomTier2, PowerKingdomTier3, PowerKingdomTier4],
    food: [GrowerKingdomTier1, GrowerKingdomTier2, GrowerKingdomTier3, GrowerKingdomTier4],
  };

  // @TODO: change this shit to fetchable tier
  const Kingdom = kingdom && kingdoms[kingdom] ? kingdoms[kingdom][0] : () => <></>;

    const handleClick = () => {
    const randomX = Math.random() * 70 + 15;
    const randomY = Math.random() * 70 + 15; 

    setTexts((prevTexts) => [
      ...prevTexts,
      { text: "tap tap me!", x: `${randomX}%`, y: `${randomY}%`, id: id }
    ]);

    setId((prevId) => prevId + 1);
  };

  useEffect(() => {
    if (texts.length > 0) {
      const lastText = texts[texts.length - 1]; 

      const timer = setTimeout(() => {
        setTexts((prevTexts) =>
          prevTexts.filter((text) => text.id !== lastText.id) 
        );
      }, 1500);

      return () => clearTimeout(timer);
    } 
  }, [texts]);


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
        <motion.button
          key="kingdom"
          initial={{ scale: 1, opacity: 1 }}
          whileTap={{
            scale: 0.9,
            opacity: 0.9,
            transition: { duration: 0.03, ease: 'easeInOut' },
          }}
          onClick={() => { tap(); handleClick(); }}
          className="h-[220px] max-h-[220px] w-auto"
        >
          <Kingdom preserveAspectRatio="meet" />
        </motion.button>
      </StyledWrapper>
      <div className='absolute z-[-1] w-full h-[160px]'>
      {texts.map((showText) => (
        <motion.div
          key={showText.id}
          initial={{ opacity: 1, y: 20 }}
          animate={{
            opacity: 0,
            y: -20,
            transition: { duration: 1.5, ease: 'easeOut' },
          }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
          style={{
            opacity:'1',
            position: 'absolute',
            left: showText.x,
            top: showText.y,
            pointerEvents: 'none',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          {showText.text}
        </motion.div>
      ))}
      </div>
    </AnimatePresence>
  );
};
