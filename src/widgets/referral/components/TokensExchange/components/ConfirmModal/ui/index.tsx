'use client';

import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Box, Button, ModalContainer, ModalOverlay, Text } from './styled';
import { AnimatePresence, motion } from 'framer-motion';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.tokens-exchange.confirm',
  });

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <ModalOverlay
          key="ref-convert-modal-overlay"
          as={motion.div} // Добавляем motion.div для работы с анимацией
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ModalContainer
            key="ref-convert-modal-container"
            as={motion.div} // Добавляем motion.div
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
      )}
    </AnimatePresence>
  );
};
