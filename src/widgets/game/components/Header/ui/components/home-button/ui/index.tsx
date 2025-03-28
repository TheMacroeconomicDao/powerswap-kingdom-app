'use client';

import Queen from '@/shared/assets/queen.svg';

import { motion } from 'framer-motion';

import { setTab } from '@/entities';
import { LinkButton } from '../../../styled';
import { useTranslation } from 'react-i18next';

export const HomeButton = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.home.navbar' });
  return (
      <LinkButton
        transition={{ duration: 1, delay: 0.2 }}
        whileTap={{ scale: 0.92, transition: { duration: 0.02, ease: 'easeInOut' } }}
        className="relative justify-center"
        onClick={() => {
          setTab('none');
        }}
      >
        <div className="size-[72px]">
          <Queen />
        </div>
        <h6 className='absolute bottom-[-20px] text-[10px] mx-auto left-0 right-0 w-fit'>{t('home.text')}</h6>
      </LinkButton>
  );
};
