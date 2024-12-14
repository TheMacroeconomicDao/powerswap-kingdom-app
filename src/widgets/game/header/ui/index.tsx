'use client';

import { Link } from '@/components/Link/Link';

import Paperclip from './assets/paperclip.svg';
import Message from './assets/message.svg';

import { HomeButton, RefLink } from './components';

import { useUnit } from 'effector-react';
import { setTab, $tab } from '@/entities';

import styles from './styles/header.module.css';

import { useTranslation } from 'react-i18next';

export const Header = () => {
  const tab = useUnit($tab);

  const { t } = useTranslation('translation', {
    keyPrefix: 'game.header',
  });

  return (
    <header className="sticky left-0 top-0 z-50 mx-[27px] flex h-[100px] items-center justify-between">
      <RefLink />
      <HomeButton />
      <button
        onClick={() => {
          setTab(tab === 'about' ? 'none' : 'about');
        }}
        className={`${styles.header_link} justify-end`}
      >
        <h6 className="h-[45px] text-end text-[14px] uppercase text-[#434343]">{t('about')}</h6>
      </button>
    </header>
  );
};
