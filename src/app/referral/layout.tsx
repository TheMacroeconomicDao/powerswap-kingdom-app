'use client'

import { type PropsWithChildren } from 'react';
import { AboutUs, RefTabSwitcher, ExitButton } from '@/widgets';
import Queen from '@/shared/assets/queen.svg';
import { Scaler } from '@/features/scaler';
import styles from '@/shared/ui/styles/referall-tab/referral.module.css';
import 'normalize.css/normalize.css';
import { useTranslation } from 'react-i18next';
import { AnimatedRoutingButton } from '@/shared/ui/components';
import { motion } from 'framer-motion';

export default function ReferralLayout({ children }: PropsWithChildren) {

  const { t } = useTranslation('translation', {
    keyPrefix: 'game.home.navbar.game',
  });

  return (
    <motion.div 
        key='refui'
        initial={{ translateX: '-100vw' }} 
        animate={{ translateX: 0 }}      
        transition={{ 
          duration: 0.7, 
          delay: 0.7,
          ease: 'easeInOut'}} 
        className="relative h-[100vh] w-[100vw] overflow-hidden text-white">
      <Scaler height={800}>
        <div
          className={`${styles.scroll} max-size-full relative z-30 flex size-full flex-col items-center overflow-x-clip text-center`}
        >
          {children}
        </div>
      </Scaler>
      <RefTabSwitcher />
      <div className="fixed bottom-0 left-0 z-50 flex h-[80px] w-full items-center justify-center rounded-t-[20px] border-t-[1px] border-[#dcdcdce6] bg-[#0e0e0e]">
        <AboutUs />
      </div>
      <AnimatedRoutingButton href={'/game'} setLastPageProp={'game'}>
        <button
          className="fixed left-8 top-7 z-50 size-[64px] active:scale-90 duration-[150ms] ease-in-out"
        >
          <Queen />
          <h6 className='mt-1 text-[10px]'>{t('title')}</h6>
        </button>
      </AnimatedRoutingButton>
      <div className="fixed right-8 top-7 z-50 flex w-full flex-row-reverse">
        <ExitButton />
      </div>
    </motion.div>
  );
}
