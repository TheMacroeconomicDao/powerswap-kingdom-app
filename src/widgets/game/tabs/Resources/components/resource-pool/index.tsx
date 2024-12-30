'use client';

import Image from 'next/image';

import ResourcePoolBorder from './assets/pool-progress-border.svg?url';
import ResourcePoolFill from './assets/pool-progress-fill.svg?url';
import Flame from '../../assets/flame.svg';

import { useTranslation } from 'react-i18next';

import { formatNumber } from '@/shared/utils/formatNumber';

export const ResourcePool = ({
  sharedResources,
  sharedTotalResouces,
}: {
  sharedResources: number;
  sharedTotalResouces: number;
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.resources' });

  return (
    <div className="mx-auto mt-8 flex flex-col gap-[12px]">
      <div className="relative">
        <div className="relative z-20">
          <Image
            src={ResourcePoolBorder}
            width={282}
            height={32}
            style={{
              objectFit: 'fill',
              width: '100%',
              height: '32px',
            }}
            alt="resource-pool"
            loading="eager"
          />
        </div>

        <div className="absolute left-0 top-0 w-full">
          <div
            className="relative"
            style={{
              width: `${(sharedResources / sharedTotalResouces) * 100}%`,
            }}
          >
            <div className="relative z-10">
              <Image
                src={ResourcePoolFill}
                width={200}
                height={32}
                style={{
                  objectFit: 'fill',
                  width: '100%',
                  height: '32px',
                }}
                alt="resource-pool-fill"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-1 left-[calc(100%-20px)] z-30 h-12 w-10">
              <Flame />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h6 className="text-lg tracking-widest">{formatNumber(sharedResources)}</h6>
        <p className="text-sm font-normal uppercase tracking-wide">{t('resourcePool.title')}</p>
      </div>
    </div>
  );
};
