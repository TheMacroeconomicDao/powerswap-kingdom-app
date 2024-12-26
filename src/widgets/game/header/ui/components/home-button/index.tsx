'use client';

import Queen from '@/shared/assets/queen.svg';

import { motion } from 'framer-motion';

import { setTab } from '@/entities';

import styles from '../../styles/header.module.css';

export const HomeButton = () => {
  return (
    <motion.button
      initial={{ scale: 0.7, translateX: '-8.2em', opacity: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      animate={{ scale: 1, translateX: '0', opacity: 1 }}
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
