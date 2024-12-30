'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { useEffect, useRef, useCallback } from 'react';

import { ResourceBuySlider } from '../Slider';
import { ResourcesPrice } from './ResourcesPrice';
import { ResourcesAmount } from './ResourcesAmount';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';
import { ResourcesList } from './ResourcesList';
import { ResourceBuyButton } from './BuyButton';
export const BuyResourceModal = () => {
  const buyResourceAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);
  const setModalShown = useUnit(buyResourcesModelInputs.setModalShown);

  const modalRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if (modalRef?.current?.contains(e.target as Node)) {
  //       setModalShown(false);
  //     }
  //   };
  //   modalRef?.current?.addEventListener('click', handleClick);

  //   return () => {
  //     modalRef?.current?.removeEventListener('click', handleClick);
  //   };
  // }, []);

  // for debug only
  useEffect(() => {
    console.debug(buyResourceAmount, chosenResourceKey);
  }, [buyResourceAmount, chosenResourceKey]);

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
