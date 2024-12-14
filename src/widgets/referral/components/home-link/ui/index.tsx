'use client';

import { motion } from 'framer-motion';
import { referralTap, setRefTab } from '@/entities';

import Paperclip from '@/shared/assets/Paperclip.svg';
import PaperclipBg from '@/shared/assets/Paperclip-bg.svg';

import styles from './styles/mainPageLink.module.css';

export const MainPageLink = () => {

  const handleClick = () => {
    setRefTab('none');
    referralTap();
  };

  return (
    <div className="relative mx-auto mt-[32px] h-[120px] w-[120px]">
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.05 }}
        className={styles.main_page_button}
        onClick={handleClick}
      >
        <Paperclip />
        <div className="absolute left-0 top-0 -z-10">
          <div className="relative">
            <span className={`${styles.glitch} absolute left-0 top-0`}>
              <Paperclip />
            </span>
            <span className={`${styles.glitch} absolute left-0 top-0`}>
              <Paperclip />
            </span>
            <span className={`${styles.glitch} absolute left-0 top-0`}>
              <Paperclip />
            </span>
          </div>
          <PaperclipBg />
        </div>
      </motion.button>
    </div>
  );
};
