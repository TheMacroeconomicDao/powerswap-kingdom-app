'use client';
import { useCallback, useMemo } from 'react';
import Image from 'next/image';

import LockFill from './assets/fills/locked.svg?url';

import Heat from '@/shared/ui/icons/resources/heat.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';
import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Food from '@/shared/ui/icons/resources/food.svg';

import Lock from '@/shared/assets/ResourceLock.svg';
import LockGreen from '@/shared/assets/Lock-green.svg';

import HeatFill from './assets/fills/heat.svg?url';
import EnergyFill from './assets/fills/energy.svg?url';
import CryptoFill from './assets/fills/crypto.svg?url';
import FoodFill from './assets/fills/food.svg?url';

import ProgressBorder from './assets/border/progress-border.svg?url';

import { ResourceWithStateType } from '@/shared/types';

export interface ResourceProgressProps {
  progress: number;
  resource: ResourceWithStateType;
}
export const ResourceProgress = ({ progress = 100, resource }: ResourceProgressProps) => {
  const assets = useMemo(
    () => ({
      crypto: {
        icon: Crypto,
        fill: CryptoFill,
      },
      heat: {
        icon: Heat,
        fill: HeatFill,
      },
      food: {
        icon: Food,
        fill: FoodFill,
      },
      energy: {
        icon: Energy,
        fill: EnergyFill,
      },
    }),
    []
  );

  const getResourceIcon = useCallback(() => {
    switch (resource.state) {
      case 'opened':
        return assets[resource.name].icon;
      case 'available':
        return LockGreen;
      case 'locked':
        return Lock;
      default:
        return null; 
    }
  }, [assets, resource.name, resource.state]);

  const getResourceFill = useCallback(() => {
    switch (resource.state) {
      case 'opened':
        return assets[resource.name].fill;
      case 'available':
      case 'locked':
        return LockFill;
      default:
        return null;
    }
  }, [assets, resource.name, resource.state]);

  const ResourceIcon = getResourceIcon();
  const ResourceFill = getResourceFill();

  return (
    <div className="relative flex items-center gap-0">
      <div className="z-30 min-h-[48px] min-w-[48px] border-[3px] border-white bg-[#0e0e0e] p-2">
        {ResourceIcon ? <ResourceIcon /> : null}
      </div>
      
      <div className="relative w-full">
      <h6 className='absolute right-0 mt-[-20px] text-[15px]'>{Math.round(progress * 100) / 100}%</h6>
        <div className="relative w-full">
          <Image
            className="relative z-20"
            src={ProgressBorder}
            width={282}
            height={22}
            alt="progress-border"
            style={{
              objectFit: 'fill',
              width: '100%',
              height: '22px',
            }}
            loading="eager"
          />
          <Image
            className="absolute left-0 top-0 z-10"
            src={ResourceFill}
            width={200}
            height={22}
            alt="progress-fill"
            style={{
              objectFit: 'fill',
              width: `${progress}%`,
              height: '22px',
            }}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
