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
import { ResourceBalance } from './ResourceBalance';
import { ResourceClose } from './ResourceClose';
export const BuyResourceModal = () => {
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);

  const modalRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <motion.div 
        ref={modalRef}
        initial={{ translateY: '-100%' }}
        animate={{ translateY: ['-100%', 0], opacity: [0.4, 0.95]}}
        exit={{ translateY: [0, '-100%'], opacity: [0.95, 0] }}
        transition={{
          duration: 0.4,
          type: 'spring',
          bounce: 0.15,
        }}
        className="fixed inset-0 z-50 bg-[#0e0e0e]"
      />
      <motion.div
        ref={modalRef}
        initial={{ translateY: '-100%' }}
        animate={{ translateY: ['-100%', 0], opacity: [0, 1],  scale: [1.3, 1] }}
        exit={{ translateY: [0, '-100%'], opacity: [1, 0], scale: [1, 1.3] }}
        transition={{
          duration: 0.4,
          type: 'spring',
          bounce: 0.15,
        }}
        className="fixed inset-0 z-50 flex flex-col h-full w-full justify-center items-center px-[5%]"
      >
        <ResourceBalance/>
        <div className='mt-3 flex max-w-[400px] w-full items-start bg-[#0E0E0E] z-50'>
          <div className="flex size-full pb-4 flex-col items-center w-full border-[3px] px-[30px] border-white">
            <ResourcesList />
            {chosenResourceKey && (
              <>
                <ResourcesAmount />
                <ResourceBuySlider />
                <ResourcesPrice />
              </>
            )}
            <div className='mt-8 self-start flex justify-between w-full'>
              <ResourceBuyButton />
              <ResourceClose/>
            </div>
          </div>
        </div>
      </motion.div>
      </>
  );
};
