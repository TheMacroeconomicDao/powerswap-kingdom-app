'use client'
import Coin from '@/shared/assets/coin.svg';
import { useUnit } from 'effector-react';
import { $tokens } from '@/entities';
import { formatNumber } from '@/shared/utils/formatNumber';
import { useTranslation } from 'react-i18next';

export const ResourceBalance = () =>{
    const tokens = useUnit($tokens)
    const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.augmentations' });

    return(
        <div className="border-[3px] border-white max-w-[400px] w-full items-center justify-between gap-[10vw] h-[37px] px-[20px] flex ">
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