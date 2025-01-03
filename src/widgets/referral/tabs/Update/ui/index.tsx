'use client';

import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ModalContainer, Overlay, Text, TextBox, Title } from './styled';
import { GoBackButton } from '@/widgets/referral';
export const UpdateModal = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.updatesTab',
  });
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ModalContainer
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.8 }}
      >
        <Title>{t('title')}</Title>
        <TextBox>
          <Trans i18nKey="referral.updatesTab.text">
            <Text className="text-[#FC6AFF]"></Text>
            <Text className="text-[#73ff6c]"></Text>
            <Text className="text-[#84ffff]"></Text>
            <Text className="text-[#ad84ff]"></Text>
          </Trans>
        </TextBox>
        <GoBackButton />
      </ModalContainer>
    </Overlay>
  );
};
