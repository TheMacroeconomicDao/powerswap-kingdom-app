'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton } from './styled';
import { exchangeTokensFx } from '../../../model';
import { setReferralStatus } from '@/entities/user/referral_status';
import { ConfirmModal } from '../../ConfirmModal';
import { AnimatePresence, motion } from 'framer-motion';

export const Button = ({
  refPoints = 0,
  referralStatus,
}: {
  refPoints: number;
  referralStatus: boolean;
}) => {
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
    {referralStatus && refPoints >= 500000 && (
        <>
        <StyledButton
          onClick={() => setIsModalOpen(true)}
          whileTap={{ scale: 0.7 }}
          >
        <motion.p
          key="textConvertRef"
          animate={{
            opacity: 1,
            y: 0,
            textShadow: [
              "-2px 2px 0px rgba(255, 0, 0, 0.8), 2px -2px 0px rgba(0, 255, 251, 0.8), -2px -2px 0px rgba(60, 255, 0, 0.8)",
              "2px -2px 0px rgba(255, 0, 0, 0.8), -2px 2px 0px rgba(0, 251, 255, 0.8), 2px 2px 0px rgba(9, 255, 0, 0.8)",
              "0px 0px 0px rgba(255, 0, 0, 0)",
              "0px 0px 0px rgba(255, 0, 0, 0)",
              "0px 0px 0px rgba(255, 0, 0, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="text-[#e0c747] text-[24px] font-bold"
        >
          {t('buttonText')}
        </motion.p>
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