'use client';

import Queen from '@/shared/assets/queen.svg';

import { motion } from 'framer-motion';

import { setTab } from '@/entities';

import styles from '../../styles/header.module.css';

export const HomeButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.92, transition: { duration: 0.02, ease: 'easeInOut' } }}
      onClick={() => {
        setTab('none');
      }}
      className={`${styles.header_link} justify-center`}
    >
      <div className="size-[72px]">
        <Queen />
      </div>
    </motion.button>
  );
};
