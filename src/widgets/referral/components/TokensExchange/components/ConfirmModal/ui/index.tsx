'use client';

import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Box, Button, ModalContainer, ModalOverlay, Text } from './styled';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.tokens-exchange.confirm',
  });

  if (!isOpen) return null;

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalContainer
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.5 }}
      >
        <Text>
          <Trans i18nKey="referral.pages.main.sections.tokens-exchange.confirm.message">
            <span className="text-[red]"></span>
            <span className="text-[#ee71e2]"></span>
          </Trans>
        </Text>

        <Box>
          <Button onClick={onConfirm}>{t('confirmText')}</Button>
          <Button onClick={onCancel}>{t('cancelText')}</Button>
        </Box>
      </ModalContainer>
    </ModalOverlay>
  );
};
