'use client';

import { useCallback, useEffect, useRef } from 'react';

import { KingdomPickScroll } from './scroll';
import { KingdomPickEntriesFood } from './entries/food';
import { KingdomPickEntriesCrypto } from './entries/crypto';

import {
  KingdomPickStyled,
  KingdomPickButton,
  KingdomPickDot,
  KingdomPickDotsStyled,
} from './styled';

import { useUnit } from 'effector-react';
import { kingdomPickModel } from '../model';
import { pickKingdom } from '@/entities';

import { useTranslation } from 'react-i18next';

export const KingdomPick = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.kingdom-pick' });

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const pickedKingdom = useUnit(kingdomPickModel.$pickedKingdom);
  const pick = useUnit(kingdomPickModel.setPickedKingdom);

  const handleDotClick = useCallback((direction: 'start' | 'end') => {
    if (scrollRef?.current) {
      switch (direction) {
        case 'start':
          scrollRef.current.scrollTo(0, 0);
          break;
        case 'end':
          scrollRef.current.scrollTo(scrollRef.current.scrollWidth, 0);
          break;
      }
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef?.current) {
      pick(scrollRef.current.scrollLeft / scrollRef.current.scrollWidth > 0.25 ? 'crypto' : 'food');
    }
  };

  const handleClick = useCallback(() => {
    pickKingdom(pickedKingdom);
  }, [pickedKingdom]);

  useEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef?.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollRef?.current]);

  return (
    <KingdomPickStyled>
      <KingdomPickScroll ref={scrollRef}>
        <KingdomPickEntriesFood />
        <KingdomPickEntriesCrypto />
      </KingdomPickScroll>
      <KingdomPickDotsStyled>
        <KingdomPickDot
          $active={pickedKingdom === 'food'}
          onClick={() => handleDotClick('start')}
        />
        <KingdomPickDot
          $active={pickedKingdom === 'crypto'}
          onClick={() => handleDotClick('end')}
        />
      </KingdomPickDotsStyled>
      <KingdomPickButton
        $color="rgba(131, 250, 121, 0.5)"
        onClick={handleClick}
      >
        {t('button')}
      </KingdomPickButton>
    </KingdomPickStyled>
  );
};
