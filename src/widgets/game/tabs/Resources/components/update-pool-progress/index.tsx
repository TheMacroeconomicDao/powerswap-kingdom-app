'use client';

// @ts-ignore
import ProgressBar from 'react-customizable-progressbar';

import { useUnit } from 'effector-react';
import { $estimatedTime, $timerProgress } from '@/entities';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const UpdatePoolProgress = () => {
  const estimatedTime = useUnit($estimatedTime);
  const timerProgress = useUnit($timerProgress);

  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.resources' });

  return (
    <div className="w-[150px]">
      <h6 className="flex w-full justify-start text-[13px] uppercase">{t('updatePool.text')}</h6>
      <div className="flex items-center border-[3px] border-white py-1 pl-4">
        <p className="flex gap-1">
          {Math.floor(estimatedTime / 3600) < 10
            ? `0${Math.floor(estimatedTime / 3600)}`
            : Math.floor(estimatedTime / 3600)}
          :
          {Math.floor((estimatedTime % 3600) / 60) < 10
            ? `0${Math.floor((estimatedTime % 3600) / 60)}`
            : Math.floor((estimatedTime % 3600) / 60)}
          :
          {(estimatedTime % 3600) % 60 < 10
            ? `0${(estimatedTime % 3600) % 60}`
            : (estimatedTime % 3600) % 60}
        </p>
        <ProgressBar
          className="flex h-[18px] items-center"
          radius={8}
          progress={timerProgress}
          steps={100}
          strokeWidth={2}
          strokeColor="white"
          strokeLinecap="square"
          trackStrokeWidth={0}
          trackStrokeColor="white"
        />
      </div>
    </div>
  );
};
