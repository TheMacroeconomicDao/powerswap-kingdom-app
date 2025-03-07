'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import QuestionMark from './assets/question.svg';
import ReferenceBorder from './assets/reference-border.svg';
import { Block, Button, Text, Wrapper } from './styled';

export const ReferenceButton = ({
  reference,
  direction = 'fromRight',
}: {
  reference: string;
  direction: 'fromLeft' | 'fromRight';
}) => {
  const [referenceShown, setReferenceShown] = useState<boolean>(false);

  return (
    <>

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
          <>
          <button onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setReferenceShown(!referenceShown);
           }} className='absolute cursor-default w-[100vw] h-[100vh] top-[-14vh] right-0 z-50'></button>
            <Block
              direction = {direction}
              initial={{
                opacity: 0,
                scale: 0,
                translateX: direction === 'fromLeft' ? '-50%' : '50%',
                // translateX: '-50%',
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
                translateX: direction === 'fromLeft' ? '-50%' : '50%',
                // translateX: '-50%',
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
          </>
        )}
      </AnimatePresence>
    </Wrapper>
    </>
  );
};
