'use client'
import type { PropsWithChildren } from 'react';
import { Header, Footer, TabSwitcher } from '@/widgets';
import { Scaler } from '@/features/scaler';
import { motion } from 'framer-motion';

export default function GameLayout({ children }: PropsWithChildren) {
   
  return (
    <motion.div 
      key='gameui'
      initial={{ translateX: '100vw' }} 
      animate={{ translateX: 0 }}      
      transition={{ 
      duration: 0.7, 
      ease: 'easeInOut'}} 
      className="relative max-h-screen min-h-screen overflow-hidden text-white"
    >
      <Header />
      <Scaler height={800}>{children}</Scaler>
      <TabSwitcher />
      <Footer />
    </motion.div>
  );
}
