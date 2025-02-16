'use client';

import { KingdomPickStatItemStyled, KingdomPickStatsStyled, KingdomPickStatStyled } from './styled';
import { KingdomPickStatItem } from './types';

import { useTranslation } from 'react-i18next';

export interface KingdomPickStatsProps {
  stats?: KingdomPickStatItem[];
}
export const KingdomPickStats: React.FC<KingdomPickStatsProps> = ({ stats }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.kingdom-pick.production' });
  return (
    <KingdomPickStatsStyled>
      {stats?.map((stat, index) => (
        <KingdomPickStatStyled key={`kingdom-pick-stat-${index}`}>
          <KingdomPickStatItemStyled $production={stat.production}>
            {t(stat.production ?? '+')}
          </KingdomPickStatItemStyled>
          <KingdomPickStatItemStyled>{stat.children}</KingdomPickStatItemStyled>
        </KingdomPickStatStyled>
      ))}
    </KingdomPickStatsStyled>
  );
};
