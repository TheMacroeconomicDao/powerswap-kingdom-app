'use client';

import GyberLogoGreen from './assets/gyber-logo-green.svg';

import { TabAnimatedGame } from '@/widgets';

import styles from '../../styles/currentTab.module.css';

import tabStyles from './styles/AboutTab.module.css';
import { Trans } from 'react-i18next';
import { useUnit } from 'effector-react';
import { setRefTab, setTab } from '@/entities';
import { motion, PanInfo } from 'framer-motion';
import { useState } from 'react';


export const AboutTab = () => {
  
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | 'none'>('none');
  
  const handleClick = () => {
    setTab('none');
    setRefTab('none');
  };
  
  return (
    <motion.div key="tababout"
      initial={{ translateY: '100%' }}
      animate={{ translateY: ['100%', 0], opacity: [0.4, 1], scale: [1.3, 1] }}
      
      exit={{
        opacity: [1, 0],
        x: dragDirection === 'right' ? 200 : dragDirection === 'left' ? -200 : 0,
        y: dragDirection === 'none' ? 200 : 0,
      }}
      transition={{
        duration: 0.4,
        type: 'spring',
        bounce: 0.15,
      }} 
      drag='x'
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={ 0.25 }
      onDragEnd={(_, info: PanInfo) => {
        if (info.offset.x > 100) {
          setDragDirection('right');
          handleClick();
        } else if (info.offset.x < -100) {
          setDragDirection('left');
          handleClick();
        } else {
          setDragDirection('none');
        }
      }}
      className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className={`${styles.section_with_border} flex flex-col items-center`}>
        <div className="mt-4">
          <GyberLogoGreen />
        </div>
        <div className={`${tabStyles.about_text} mt-6 h-[49.5dvh] overflow-y-scroll break-words`}>
          <Trans i18nKey="game.tabs.about.text">
            <span className="text-[#e479ff]"></span>
            <span className="text-[#73c7ff]"></span>
            <span className="text-[#73ff83]"></span>
            <span className="text-[#faff5a]"></span>
            <span className="font-bold text-[#73c7ff]"></span>
          </Trans>
        </div>
      </div>
    </motion.div>
  );
};
