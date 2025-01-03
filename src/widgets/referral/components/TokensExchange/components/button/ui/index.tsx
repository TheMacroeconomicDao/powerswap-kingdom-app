'use client';

import { useTranslation } from 'react-i18next';
import { StyledButton } from './styled';
import { exchangeTokensFx } from '../../../model';
import { setReferralStatus } from '@/entities/user/referral_status';

export const Button = ({ referralStatus }: { referralStatus: boolean }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.tokens-exchange',
  });

  const handleClick = () => {
    const confirmed = window.confirm(t('confirmedMessage'));
    if (confirmed) {
      exchangeTokensFx();
      setReferralStatus(false);
    }
  };

  return (
    <>
      {referralStatus && (
        <StyledButton
          onClick={handleClick}
          whileTap={{ scale: 0.7 }}
        >
          {t('buttonText')}
        </StyledButton>
      )}
    </>
  );
};
