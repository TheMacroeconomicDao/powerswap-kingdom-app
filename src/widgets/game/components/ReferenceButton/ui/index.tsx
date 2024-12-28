'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import QuestionMark from './assets/question.svg';
import ReferenceBorder from './assets/reference-border.svg';
import { Block, Button, Text, Wrapper } from './styled';

export const ReferenceButton = ({
  reference,
  direction = 'fromLeft',
}: {
  reference: string;
  direction: 'fromLeft' | 'fromRight';
}) => {
  const [referenceShown, setReferenceShown] = useState<boolean>(false);

  return (
    <Wrapper>
      <Button
        onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setReferenceShown(!referenceShown);
        }}
      >
        <QuestionMark />
      </Button>
      <AnimatePresence>
        {referenceShown && (
          <Block
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
          >
            <Wrapper>
              <ReferenceBorder />
              <Text>{reference}</Text>
            </Wrapper>
          </Block>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
