'use client';

import GyberLogoGreen from './assets/gyber-logo-green.svg';

import { TabAnimatedGame } from '@/widgets';

import styles from '../../styles/currentTab.module.css';

import tabStyles from './styles/AboutTab.module.css';
import { Trans } from 'react-i18next';

export const AboutTab = () => {
  return (
    <TabAnimatedGame className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className={`${styles.section_with_border} flex flex-col items-center`}>
        <div className="mt-4">
          <GyberLogoGreen />
        </div>
        <div className={`${tabStyles.about_text} mt-6 h-[100dvh] overflow-y-scroll break-words`}>
          <Trans i18nKey="game.tabs.about.text">
            <span className="text-[#e479ff]"></span>
            <span className="text-[#73c7ff]"></span>
            <span className="text-[#73ff83]"></span>
            <span className="text-[#faff5a]"></span>
          </Trans>
        </div>
      </div>
    </TabAnimatedGame>
  );
};
