'use client';

import { HomeButton, RefLink } from './components';

import { useUnit } from 'effector-react';
import { setTab, $tab } from '@/entities';

import { useTranslation } from 'react-i18next';
import { Text, LinkButton, StyledHeader } from './styled';

export const Header = () => {
  const tab = useUnit($tab);

  const { t } = useTranslation('translation', {
    keyPrefix: 'game.header',
  });

  return (
    <StyledHeader as="header">
      <RefLink />
      <HomeButton />
      <LinkButton
        onClick={() => {
          setTab(tab === 'about' ? 'none' : 'about');
        }}
      >
        <Text>{t('about')}</Text>
      </LinkButton>
    </StyledHeader>
  );
};
