'use client'
import Coin from '@/shared/assets/coin.svg';
import { useUnit } from 'effector-react';
import { $tokens } from '@/entities';
import { formatNumber } from '@/shared/utils/formatNumber';
import { useTranslation } from 'react-i18next';

export const AugmentationBalance = () => {
    const tokens = useUnit($tokens)
    const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.augmentations' });

    return(
    <div className="min-w-[300px] justify-self-center gap-[10vw] mt-[10px] border font-normal flex items-center justify-around px-[20px] h-[40px]">
        <div className="flex gap-[5vw]">
            <span>{t('balance.text')}</span>
            <span>{formatNumber(tokens)}</span>
        </div>
        <div className='scale-150'>
            <Coin />
        </div>
    </div>
)
}