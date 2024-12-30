'use client';

import { motion } from 'framer-motion';

import { postEvent } from '@telegram-apps/sdk';
import { useTranslation } from 'react-i18next';

export const ExitButton = () => {
  const handleExit = () => {
    postEvent('web_app_close');
  };
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.header',
  });
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="border-[1px] border-white bg-[#0e0e0e] px-2 pt-[2px] text-[13px] font-semibold uppercase text-[#DE2B2B] duration-75 ease-in-out active:scale-95"
      onClick={handleExit}
    >
      {t('exitButton')}
    </motion.button>
  );
};
