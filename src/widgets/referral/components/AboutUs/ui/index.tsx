'use client';

import { motion } from 'framer-motion';

import { useUnit } from 'effector-react';
import { $refTab } from '@/entities';
import { setRefTab } from '@/entities';
import { useTranslation } from 'react-i18next';

import styles from './styles/AboutUs.module.css';

export const AboutUs = () => {
  const tab = useUnit($refTab);

  const handleClick = () => {
    setRefTab(tab === 'about' ? 'none' : 'about');
  };

  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.footer',
  });

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="h-full w-fit px-16"
      onClick={handleClick}
      
    >
      <h6 className={`${styles.about_us} text-base font-normal uppercase`}>{t('aboutUsButton')}</h6>
    </motion.button>
  );
};
