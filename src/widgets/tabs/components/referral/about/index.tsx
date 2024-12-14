'use client';

import { mainFont, fallbackFont } from '@/fonts';

import styles from '@/shared/ui/styles/referall-tab/referral.module.css';

import Queen from './assets/mystical-queen-card.svg';

import { GoBackButton, TabAnimatedReferral } from '@/widgets';
import { SocialLinks } from './social-links/ui';
import { TextSection } from './text/ui';

import { useTranslation, Trans } from 'react-i18next';

export const ReferralAboutTab = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.aboutUs.sections',
  });

  return (
    <TabAnimatedReferral className={`${styles.tab_wrapper} flex flex-col items-center`}>
      <div className="my-3 flex w-full justify-center">
        <Queen />
      </div>
      <div className="flex w-[95%] flex-grow flex-col gap-10 overflow-y-auto overflow-x-clip text-center text-sm uppercase text-white">
        <div
          className="flex flex-col gap-10"
          style={{
            fontFamily: fallbackFont.style.fontFamily,
          }}
        >
          <h6 className="mx-auto w-[95%] max-w-[800px] text-sm font-medium">
            <Trans i18nKey="referral.pages.aboutUs.sections.mainTitle.text">
              <span className="text-[#FC6AFF]"></span>
            </Trans>
          </h6>
          <TextSection
            title={t('articles.0.title')}
            text={t('articles.0.text')}
          />
          <TextSection
            title={t('articles.1.title')}
            text={t('articles.1.text')}
          />
        </div>
        <div>
          <h6 className="text-xl uppercase tracking-widest">{t('socials.mainTitle')}</h6>
          <div className="mt-4">
            <SocialLinks />
          </div>
          <div className="flex h-16 w-[calc(100%-40px)] items-center justify-end">
            <GoBackButton />
          </div>
        </div>
      </div>
    </TabAnimatedReferral>
  );
};
