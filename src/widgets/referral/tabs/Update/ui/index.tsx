'use client';

import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ModalContainer, Overlay, OverlayButton, Text, TextBox, Title } from './styled';
import { GoBackButton } from '@/widgets/referral';
import { setRefTab, setTab } from '@/entities';
import { motion, PanInfo } from 'framer-motion';

const handleClick = () => {
  setTab('none');
  setRefTab('none');
};

export const UpdateModal = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.updatesTab',
  });

  const [dragDirection, setDragDirection] = useState<'left' | 'right' | 'none'>('none');

  return (
    <>
      <OverlayButton
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        onClick={handleClick}
      />
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ModalContainer
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: dragDirection === 'right' ? 200 : dragDirection === 'left' ? -200 : 0,
            y: dragDirection === 'none' ? 200 : 0,
          }}
          transition={{ duration: 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
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
