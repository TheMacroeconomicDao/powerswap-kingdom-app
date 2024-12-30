'use client';

import { motion } from 'framer-motion';

export const TabAnimatedReferral = (props: { children?: React.ReactNode; className: string }) => {
  return (
    <motion.div
      key="tab"
      initial={{ translateY: '100%' }}
      animate={{ translateY: 0 }}
      exit={{ translateY: '100%' }}
      transition={{ duration: 0.25, ease: 'circOut' }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};
