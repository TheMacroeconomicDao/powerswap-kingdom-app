'use client';

import { motion } from 'framer-motion';

import { ResourceType } from '@/entities';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Food from '@/shared/ui/icons/resources/food.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import Lock from '@/shared/assets/ResourceLock.svg';
import LockGreen from '@/shared/assets/Lock-green.svg';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../../model';
import { useCallback } from 'react';
import { ResourceWithStateType } from '@/shared/types';

export const ResourceButton = ({
  resource,
  size = 32,
}: {
  resource: ResourceWithStateType;
  size?: number;
}) => {
  const chosenResourceKey = useUnit(buyResourcesModelInputs.$chosenResourceKey);
  const setChosenResourceKey = useUnit(buyResourcesModelInputs.setChosenResourceKey);

  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setChosenResourceKey(resource.name);
  };

  const icons: {
    [resourceKey in ResourceType]: React.FC<React.SVGProps<SVGElement>>;
  } = {
    crypto: Crypto,
    heat: Heat,
    food: Food,
    energy: Energy,
  };

  const getIcon = useCallback(() => {
    switch (resource.state) {
      case 'opened':
        return icons[resource.name];
      case 'available':
        return LockGreen;
      case 'locked':
        return Lock;
    }
  }, []);
  const Icon = getIcon();
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      animate={
        chosenResourceKey !== resource.name
          ? {
              scale: 0.9,
              filter: 'grayscale(1)',
              translateY: 1,
            }
          : {
              scale: 1.1,
              filter: 'none',
              translateY: 0,
            }
      }
      transition={{ duration: 0.1, ease: 'easeInOut' }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      onClick={handleClick}
      disabled={resource.state !== 'opened'}
    >
      <Icon />
    </motion.button>
  );
};
