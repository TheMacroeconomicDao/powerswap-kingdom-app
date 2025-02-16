'use client';

import { useUnit } from 'effector-react';
import { buyResourcesModel, buyResourcesModelInputs } from '@/features/buy-resources';
import Market from '@/widgets/game/components/Footer/ui/assets/market.svg'
import { useTranslation } from 'react-i18next';

export const ResourceBuyButton = () => {
  const buyResources = useUnit(buyResourcesModel.buyResourcesFromPool);
  const setModalShown = useUnit(buyResourcesModelInputs.setModalShown);

  const handleClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    buyResources();
    setModalShown(false);
  };
  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.resources' });

  return (
    <button
      className="flex self-start active:opacity-60 gap-2"
      onClick={handleClick}
    >
      <Market />
      <span className='border border-white min-w-20 p-[1px] pl-[4px] pr-[4px] pt-[2px] text-[12px] mt-2'>{t('modalSubmit.text')}</span>
    </button>
  );
}; 
