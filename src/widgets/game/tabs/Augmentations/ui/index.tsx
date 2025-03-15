'use client'
import { ReferenceButton, TabAnimatedGame } from '@/widgets';
import styles from '../../styles/currentTab.module.css';
import { Scaler } from '@/features/scaler';
import { useTranslation } from 'react-i18next';
import { Augmentation, AugmentationBalance } from '@/widgets';
import { useEffect } from 'react';
import { useUnit } from 'effector-react';

export const AugmentationsTab = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.augmentations' });
  
  return (
    <TabAnimatedGame className={styles.tab_wrapper}>
      <div className="relative mb-1 ml-auto flex justify-center w-full">
        <h5 className='text-center'>{t('augmentation.title')}</h5>
        <div className='absolute right-0'>
          <ReferenceButton
            direction="fromRight"
            reference="These are augmentations. They can quickly increase your mining speed. You can buy them once you have enough coins."
          />
        </div>
      </div>
      <div className={styles.section_with_border}>
        <Scaler height={850}>
          <>
            <AugmentationBalance/>
            <div className='flex flex-col mt-4 gap-[3vh]'>
                <Augmentation isLocked={false}/>
                <Augmentation isLocked={false}/>
                <Augmentation isLocked/>
            </div>
          </>
        </Scaler>
      </div>
    </TabAnimatedGame>
  );
};
