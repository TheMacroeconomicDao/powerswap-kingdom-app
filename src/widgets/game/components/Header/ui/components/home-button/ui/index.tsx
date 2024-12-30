'use client';

import Queen from '@/shared/assets/queen.svg';

import { motion } from 'framer-motion';

import { setTab } from '@/entities';
import { LinkButton } from '../../../styled';

export const HomeButton = () => {
  return (
    <LinkButton
      transition={{ duration: 1, delay: 0.2 }}
      whileTap={{ scale: 0.92, transition: { duration: 0.02, ease: 'easeInOut' } }}
      className="justify-center"
      onClick={() => {
        setTab('none');
      }}
    >
      <div className="size-[72px]">
        <Queen />
      </div>
    </LinkButton>
  );
};
