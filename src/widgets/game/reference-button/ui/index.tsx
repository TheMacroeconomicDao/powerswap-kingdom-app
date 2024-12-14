'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import QuestionMark from './assets/question.svg';
import ReferenceBorder from './assets/reference-border.svg';

export const ReferenceButton = ({
  reference,
  direction = 'fromLeft',
}: {
  reference: string;
  direction: 'fromLeft' | 'fromRight';
}) => {
  const [referenceShown, setReferenceShown] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setReferenceShown(!referenceShown);
        }}
        className="flex items-center justify-center border-[3px] border-white p-1"
      >
        <QuestionMark />
      </button>
      <AnimatePresence>
        {referenceShown && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              translateX: '50%',
              translateY: '-50%',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateX: 0,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0,
              translateX: '50%',
              translateY: '-50%',
            }}
            transition={{
              duration: 0.15,
            }}
            className="absolute right-0 top-8 z-[100]"
          >
            <div className="relative">
              <ReferenceBorder />
              <p className="absolute left-0 top-0 size-full text-balance break-words p-6">
                {reference}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
