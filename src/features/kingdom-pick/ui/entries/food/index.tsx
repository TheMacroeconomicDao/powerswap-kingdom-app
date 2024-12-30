'use client';

import { Item } from '@/widgets/game/item';
import { KingdomPickStats } from '../../stats';

import Food from '@/shared/ui/icons/resources/food.svg';
import Energy from '@/shared/ui/icons/resources/energy.svg';

import PickGrowerUrl from '../assets/grower.svg?url';

import {
  KingdomPickCard,
  KingdomPickIcon,
  KingdomPickSubtitle,
  KingdomPickTitle,
  KingdomPickTitlesStyled,
  KingdomPickTitleText,
} from '../../styled';

import { useTranslation } from 'react-i18next';

export const KingdomPickEntriesFood = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.kingdom-pick' });

  const colors = {
    food: 'rgba(131, 250, 121, 0.6)',
    energy: 'rgba(255, 236, 67, 0.6)',
  };

  return (
    <KingdomPickCard>
      <KingdomPickIcon
        src={PickGrowerUrl}
        width={240}
        height={180}
        alt="pick-grower-img"
        priority
      />
      <KingdomPickTitlesStyled>
        <KingdomPickTitle $kingdom="food">
          <KingdomPickTitleText
            content={t('kingdoms.food.title')}
            secondaryColor={colors.food}
            size={1.6}
          />
        </KingdomPickTitle>
        <KingdomPickSubtitle>{t('kingdoms.food.subtitle')}</KingdomPickSubtitle>
      </KingdomPickTitlesStyled>
      <KingdomPickStats
        stats={[
          {
            production: '+',
            children: (
              <Item
                icon={
                  <Food
                    width={18}
                    height={18}
                  />
                }
                content={t('resources.food')}
                secondaryColor={colors.food}
              />
            ),
          },
          {
            production: '-',
            children: (
              <Item
                icon={
                  <Energy
                    width={18}
                    height={18}
                  />
                }
                content={t('resources.energy')}
                secondaryColor={colors.energy}
              />
            ),
          },
        ]}
      />
    </KingdomPickCard>
  );
};
