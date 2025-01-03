'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { useRef } from 'react';

import { ResourceBuySlider } from '../Slider';
import { ResourcesPrice } from './ResourcesPrice';
import { ResourcesAmount } from './ResourcesAmount';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';
import { ResourcesList } from './ResourcesList';
import { ResourceBuyButton } from './BuyButton';
export const BuyResourceModal = () => {
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);

  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      ref={modalRef}
      initial={{ translateY: '-100%' }}
      animate={{ translateY: ['-100%', 0], opacity: [0.4, 0.95], scale: [1.3, 1] }}
      exit={{ translateY: [0, '-100%'], opacity: [0.95, 0], scale: [1, 1.3] }}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.15,
      }}
      className="fixed left-0 top-[100px] z-50 flex h-[300px] w-full items-start bg-[#0e0e0e] px-[5%]"
    >
      <div className="flex size-full flex-col items-center justify-evenly border-[1px] border-white">
        <ResourcesList />
        {chosenResourceKey && (
          <>
            <ResourcesPrice />
            <ResourcesAmount />
            <ResourceBuySlider />
          </>
        )}
        <ResourceBuyButton />
      </div>
    </motion.div>
  );
};
