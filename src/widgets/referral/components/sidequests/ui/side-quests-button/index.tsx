'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';
import SideQuestsBorder from '../assets/side-quests-border.svg?url';

import { useUnit } from 'effector-react';
import { setRefTab, $refTab } from '@/entities';

import { useTranslation } from 'react-i18next';

export const SideQuestsButton = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.quests.inviteQuests',
  });

  const tab = useUnit($refTab);

  const handleClick = () => {
    setRefTab(tab === 'side-quests' ? 'none' : 'side-quests');
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="mb-10 mt-auto"
      onClick={handleClick}
    >
      <div className="relative">
        <Image
          src={SideQuestsBorder}
          width={186}
          height={29}
          style={{ objectFit: 'fill', width: '100%', height: '29px' }}
          alt="side-quests-border"
          loading="eager"
        />
        <h6 className="absolute left-0 top-0 w-full text-lg uppercase text-[#FFE350]">
          {t('soon')}
        </h6>
      </div>
    </motion.button>
  );
};
