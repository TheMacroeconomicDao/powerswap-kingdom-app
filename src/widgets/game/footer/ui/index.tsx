'use client';
import Resources from './assets/resources.svg';
import Augmentations from './assets/augmentations.svg';
import Leaderboard from './assets/leaderboard.svg';
import Market from './assets/market.svg';

import { useUnit } from 'effector-react';
import { $tab, setTab } from '@/entities';
import { IconWrapper, StyledWrapper } from './styled';

export const Footer = () => {
  const tab = useUnit($tab);

  return (
    <StyledWrapper as="footer">
      <button
        onClick={() => {
          setTab(tab !== 'resources' ? 'resources' : 'none');
        }}
      >
        <IconWrapper $isActive={tab === 'resources'}>
          <Resources />
        </IconWrapper>
      </button>
      <button
        onClick={() => {
          setTab(tab !== 'augmentations' ? 'augmentations' : 'none');
        }}
      >
        <IconWrapper $isActive={tab === 'augmentations'}>
          <Augmentations />
        </IconWrapper>
      </button>
      <button
        onClick={() => {
          setTab(tab !== 'leaderboard' ? 'leaderboard' : 'none');
        }}
      >
        <IconWrapper $isActive={tab === 'leaderboard'}>
          <Leaderboard />
        </IconWrapper>
      </button>
      <button
        onClick={() => {
          setTab(tab !== 'market' ? 'market' : 'none');
        }}
      >
        <IconWrapper $isActive={tab === 'market'}>
          <Market />
        </IconWrapper>
      </button>
    </StyledWrapper>
  );
};
