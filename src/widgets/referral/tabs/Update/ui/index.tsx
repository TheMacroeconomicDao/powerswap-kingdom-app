'use client';

import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ModalContainer, Overlay, OverlayButton, Text, TextBox, Title } from './styled';
import { GoBackButton } from '@/widgets/referral';
import { setRefTab, setTab } from '@/entities';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';


export const UpdateModal = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.updatesTab',
  });
  
  const [dragDirection, setDragDirection] = useState<'left' | 'right' | 'none'>('none');
  const handleClick = () => {
    setTab('none');
    setRefTab('none');
  };
  
  return (
    <>
      <div
        onClick={handleClick}
        className='absolute z-[51] h-full w-full py-[100px] top-0 cursor-default overflow-hidden'>
        <OverlayButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleClick}
        />
      </div>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ModalContainer
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            x: dragDirection === 'right' ? 200 : dragDirection === 'left' ? -200 : 0,
            y: dragDirection === 'none' ? 200 : 0,
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={ 0.2 }
          onDragEnd={(_, info: PanInfo) => {
            if (info.offset.x > 100) {
              setDragDirection('right');
              handleClick();
            } else if (info.offset.x < -100) {
              setDragDirection('left');
              handleClick();
            } else {
              setDragDirection('none');
            }
          }}
        >
          <Title>{t('title')}</Title>
          <TextBox>
            <Trans i18nKey="referral.updatesTab.text">
              <Text className="text-[#FC6AFF]" />
              <Text className="text-[#73ff6c]" />
              <Text className="text-[#84ffff]" />
              <Text className="text-[#ad84ff]" />
            </Trans>
          </TextBox>
          <GoBackButton />
        </ModalContainer>
      </Overlay>
    </>
  );
};
