'use client';

import { useEffect } from 'react';

import { ResourcePool, UpdatePoolProgress, ResourcesProgress } from './components';
import { ToggleResourceMenuButton, BuyResourceModal, buyResourcesModelInputs } from '@/features/buy-resources';
import { ReferenceButton, LoadingFallback, TabAnimatedGame } from '@/widgets';

import { useUnit } from 'effector-react';
import { resourcePoolModel } from '@/entities/resources-pool';

import styles from '../styles/currentTab.module.css';
import { AnimatePresence } from 'framer-motion';
import { Scaler } from '@/features/scaler';
import { useTranslation } from 'react-i18next';

export const ResourcesTab = () => {
  const resources = useUnit(resourcePoolModel.$resourcePool);
  const modalShown = useUnit(buyResourcesModelInputs.$modalShown);

  const getResourcePool = useUnit(resourcePoolModel.getResourcePool);
  const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.resources' });
  
  useEffect(() => {
    getResourcePool();
  }, [getResourcePool]);


  return (
      <>
        <TabAnimatedGame className={`${styles.tab_wrapper} flex flex-col gap-1`}>
          <div className="relative mb-1 ml-auto flex justify-center w-full">
            <h5 className='text-center'>{t('title')}</h5>
            <div className='absolute right-0'>
              <ReferenceButton
                direction="fromRight"
                reference={t('referenceDescription.text')}
              />
            </div>
          </div>
          <div className={`${styles.section_with_border} relative overflow-clip`}>
              {resources ? (
                <Scaler height={800}>
                  <ResourcePool
                    sharedResources={resources?.shared_resources}
                    sharedTotalResouces={resources?.shared_total_resources}
                  />
                  <ResourcesProgress resources={resources?.entities} />
                  <div className="flex flex-col items-end gap-2">
                    <UpdatePoolProgress />
                    <ToggleResourceMenuButton />
                  </div>
                </Scaler>
              ) : (
                <LoadingFallback />
              )}
          </div>
        </TabAnimatedGame>
        <AnimatePresence mode="wait">
        {modalShown && 
          <BuyResourceModal key="buy-res-modal" />
        }
      </AnimatePresence>
    </>
  );
};
