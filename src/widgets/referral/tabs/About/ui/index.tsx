'use client';

import { mainFont, fallbackFont } from '@/fonts';

import styles from '@/shared/ui/styles/referall-tab/referral.module.css';

import Queen from '../assets/mystical-queen-card.svg';

import { GoBackButton, TabAnimatedReferral } from '@/widgets';
import { SocialLinks } from './social-links';
import { TextSection } from './text';

import { useTranslation, Trans } from 'react-i18next';
import { motion, PanInfo } from 'framer-motion';
import { setRefTab, setTab } from '@/entities';
import { useState } from 'react';

export const ReferralAboutTab = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.aboutUs.sections',
  });
  
const [dragDirection, setDragDirection] = useState<'left' | 'right' | 'bottom' | 'none'>('none');

const handleClick = () => {
  setTab('none');
  setRefTab('none');
};

return (
  <>
    <button className="absolute w-full h-full top-0" onClick={handleClick}></button>
    <motion.div
      key="tabrefabout"
      initial={{ translateY: '100%' }}
      animate={{ translateY: ['100%', 0], opacity: [0.4, 1], scale: [1.3, 1] }}
      exit={{
        opacity: [1, 0], 
        scale: [1, 1.3],
        x: dragDirection === 'right' ? 200 : dragDirection === 'left' ? -200 : 0,
        y: '100%',
        transition: { 
          duration: dragDirection === 'none' ? 0.35 : 0.25,
        },
      }}
      transition={{
        duration: 0.4, 
        type: 'spring',
        bounce: 0.15,
      }}

      drag={true}
      dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
      dragElastic={{ top: 0, bottom: 0.2, left: 0.07, right: 0.07 }}
      onDragEnd={(_, info: PanInfo) => {
        if (info.offset.x > 200) {
          setDragDirection('right');
          handleClick();
        } else if (info.offset.x < -200) {
          setDragDirection('left');
          handleClick();
        } else if (info.offset.y > 200) {
          setDragDirection('bottom');
          handleClick();
        }
      }}
      className={`${styles.tab_wrapper} flex flex-col items-center`}>
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
    </motion.div>
    </>
  );
};
