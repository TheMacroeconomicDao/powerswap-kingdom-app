'use client';

import TelegramSquare from './assets/telegram-square.svg';

import { Quest, GoBackButton, TabAnimatedReferral } from '@/widgets';
import styles from './styles/SideQuests.module.css';

import { useTranslation, Trans } from 'react-i18next';

export const SideQuests = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.quests.sideQuestsTab',
  });

  return (
    <TabAnimatedReferral className={`${styles.tab_wrapper} mx-auto flex size-fit flex-col`}>
      <div className="flex flex-col">
        <Quest
          title={t('quests.0.title')}
          reward={
            <Trans i18nKey="referral.pages.main.sections.quests.sideQuestsTab.quests.0.reward">
              <span className="text-[#FFD056]"></span>
            </Trans>
          }
          image={
            <div className="h-[52px] w-[52px]">
              <TelegramSquare />
            </div>
          }
        />
        <Quest
          title={t('quests.1.title')}
          reward={
            <Trans i18nKey="referral.pages.main.sections.quests.sideQuestsTab.quests.1.reward">
              <span className="text-[#FFD056]"></span>
            </Trans>
          }
          image={
            <div className="h-[52px] w-[52px]">
              <TelegramSquare />
            </div>
          }
        />
      </div>
      <div className="flex justify-end">
        <GoBackButton />
      </div>
    </TabAnimatedReferral>
  );
};
