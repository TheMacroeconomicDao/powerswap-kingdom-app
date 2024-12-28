'use client';

import PaperclipBig from '@/shared/assets/Paperclip-big.svg';
import { StyledWrapper } from './styled';

export const LoadingUIMain = () => {
  return (
    <StyledWrapper
      initial={{ opacity: 0.6, scale: 1 }}
      animate={{
        opacity: [0.6, 1],
        scale: [1, 1.1],
        transition: { duration: 1, repeat: Infinity, repeatType: 'mirror' },
      }}
      exit={{ opacity: 0, scale: 10 }}
      transition={{ duration: 0.5 }}
    >
      <PaperclipBig />
    </StyledWrapper>
  );
};
