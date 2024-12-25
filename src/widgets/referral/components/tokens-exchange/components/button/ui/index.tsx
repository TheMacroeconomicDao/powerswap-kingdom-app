// src/features/tokenExchangeFeature/ui/Button.js

'use client';

import { useTranslation } from 'react-i18next';
import { StyledButton } from './styled';
import { exchangeTokensFx } from '../../../model';
import { useState } from 'react';

export const Button = () => {
  const [isHidden, setHidden] = useState(false);

  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.tokens-exchange',
  });

  const handleClick = () => {
    exchangeTokensFx();
    setHidden(true);
  };

  return (
    <>
      {!isHidden && (
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
