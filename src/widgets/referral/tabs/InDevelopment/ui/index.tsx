'use client';

import { TabAnimatedReferral } from '@/widgets';

import { useTranslation, Trans } from 'react-i18next';

import styles from '@/shared/ui/styles/referall-tab/referral.module.css';

export const InDevelopmentTabReferral = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'referral.notAvailable' });

  const handleClick = () => {
    window.open(`${process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL}`);
  };

  return (
    <TabAnimatedReferral className={styles.tab_wrapper}>
      <div className="flex h-[100%] w-[100%] items-center justify-center text-center text-white">
        <div className="w-[80%] max-w-[540px] uppercase">
          <h3 className="my-4 text-xl text-yellow-300">{t('title')}</h3>
          <Trans i18nKey="referral.notAvailable.text">
            <button
              className="uppercase text-blue-400"
              onClick={handleClick}
            ></button>
          </Trans>
        </div>
      </div>
    </TabAnimatedReferral>
  );
};
