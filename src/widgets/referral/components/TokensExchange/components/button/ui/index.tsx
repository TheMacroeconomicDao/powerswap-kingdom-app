'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from './styled';
import { exchangeTokensFx } from '../../../model';
import { setReferralStatus } from '@/entities/user/referral_status';
import { ConfirmModal } from '../../ConfirmModal';

export const Button = ({ referralStatus }: { referralStatus: boolean }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.tokens-exchange',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    exchangeTokensFx();
    setReferralStatus(false);
    setIsModalOpen(false);
  };

  return (
    <>
      {referralStatus && (
        <>
          <StyledButton
            onClick={() => setIsModalOpen(true)}
            whileTap={{ scale: 0.7 }}
          >
            {t('buttonText')}
          </StyledButton>

          <ConfirmModal
            isOpen={isModalOpen}
            onConfirm={handleConfirm}
            onCancel={() => setIsModalOpen(false)}
          />
        </>
      )}
    </>
  );
};
