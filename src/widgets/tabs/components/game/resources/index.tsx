'use client';

import { useEffect } from 'react';

import { ResourcePool, UpdatePoolProgress, ResourcesProgress } from './components';
import { ToggleResourceMenuButton, BuyResourceModal } from '@/features/buy-resources';
import { ReferenceButton, LoadingFallback, TabAnimatedGame } from '@/widgets';

import { useUnit } from 'effector-react';
import { resourcePoolModel } from '@/entities/resources-pool';
import { buyResourcesModelInputs } from '@/features/buy-resources';

import styles from '../styles/currentTab.module.css';
import { AnimatePresence } from 'framer-motion';
import { Scaler } from '@/features/scaler';

export const ResourcesTab = () => {
  const resources = useUnit(resourcePoolModel.$resourcePool);
  const modalShown = useUnit(buyResourcesModelInputs.$modalShown);

  const getResourcePool = useUnit(resourcePoolModel.getResourcePool);

  useEffect(() => {
    getResourcePool();
  }, [getResourcePool]);

  return (
    <TabAnimatedGame className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex w-full justify-end">
        <ReferenceButton
          direction="fromRight"
          reference="This is the resource pool. It says how much resources are there for people to obtain."
        />
      </div>
      <div className={`${styles.section_with_border} relative overflow-clip`}>
        <Scaler height={800}>
          {resources ? (
            <>
              <ResourcePool
                sharedResources={resources?.shared_resources}
                sharedTotalResouces={resources?.shared_total_resources}
              />
              <ResourcesProgress resources={resources?.entities} />
              <div className="flex flex-col items-end gap-2">
                <UpdatePoolProgress />
                <ToggleResourceMenuButton />
              </div>
              <AnimatePresence mode="wait">
                {modalShown && <BuyResourceModal key="buy-res-modal" />}
              </AnimatePresence>
            </>
          ) : (
            <LoadingFallback />
          )}
        </Scaler>
      </div>
    </TabAnimatedGame>
  );
};
