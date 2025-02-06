'use client'
import { ReferenceButton, TabAnimatedGame } from '@/widgets';

import styles from '../../styles/currentTab.module.css';
import { Scaler } from '@/features/scaler';
import { useTranslation } from 'react-i18next';
import { Augmentation, AugmentationBalance } from '@/widgets';
import { useEffect } from 'react';
import { useUnit } from 'effector-react';


export const AugmentationsTab = () => {


  

  return (
    <TabAnimatedGame className={styles.tab_wrapper}>
      <h5 className='text-center'>UPGRADE</h5>
      <div className="mb-1 ml-auto">
        {/* <ReferenceButton
          direction="fromRight"
          reference="These are augmentations. They can quickly increase your mining speed. You can buy them once you have enough coins."
        /> */}
      </div>
      <div className={styles.section_with_border}>
        <Scaler height={850}>
          <>
            <AugmentationBalance/>
            <div className='flex flex-col mt-4 gap-[3vh]'>
                <Augmentation/>
                <Augmentation/>
                <Augmentation/>
            </div>
          </>
        </Scaler>

      </div>
    </TabAnimatedGame>
  );
};
