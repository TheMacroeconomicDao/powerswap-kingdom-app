'use client';

import BuyButtonBgImg from './assets/buy-button-bg.svg?url';
import Image from 'next/image';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs } from '../../model';
import { useTranslation } from 'react-i18next';
export const ToggleResourceMenuButton = () => {
  const modalShown = useUnit(buyResourcesModelInputs.$modalShown);
  const setModalShown = useUnit(buyResourcesModelInputs.setModalShown);

  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.resources' });

  return (
    <button
      className="z-50 flex items-center justify-center active:opacity-40"
      onClick={() => {
        setModalShown(!modalShown);
      }}
    >
      <div className="relative">
        <div className="absolute left-0 top-0">
          <Image
            src={BuyButtonBgImg}
            className="h-[unset]"
            alt="button"
            loading="eager"
          />
        </div>
        <h6 className="relative p-2 text-sm uppercase leading-none text-white">
          {t('buyResource.text')}
        </h6>
      </div>
    </button>
  );
};
