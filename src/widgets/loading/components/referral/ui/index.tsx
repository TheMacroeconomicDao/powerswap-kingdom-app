'use client';

import { motion } from 'framer-motion';

import PaperclipBig from '@/shared/assets/Paperclip-big.svg';

export const LoadingUIMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0.6, scale: 1 }}
      animate={{
        opacity: [0.6, 1],
        scale: [1, 1.1],
        transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' },
      }}
      exit={{ opacity: 0, scale: 10 }}
      transition={{ duration: 0.5 }}
      className="flex h-[calc(100vh-80px)] w-[100vw] items-center justify-center"
    >
      <PaperclipBig />
    </motion.div>
  );
};
