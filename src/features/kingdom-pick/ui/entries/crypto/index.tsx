'use client';

import { Item } from '@/widgets/game/item';
import { KingdomPickStats } from '../../stats';

import PickCryptoUrl from '../assets/crypto.svg?url';

import Crypto from '@/shared/ui/icons/resources/crypto.svg';
import Heat from '@/shared/ui/icons/resources/heat.svg';

import {
  KingdomPickCard,
  KingdomPickIcon,
  KingdomPickSubtitle,
  KingdomPickTitle,
  KingdomPickTitlesStyled,
  KingdomPickTitleText,
} from '../../styled';
import { useTranslation } from 'react-i18next';

export const KingdomPickEntriesCrypto = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'game.kingdom-pick' });

  const colors = {
    crypto: 'rgba(255, 48, 179, 0.6)',
    heat: 'rgba(255, 156, 64, 0.8)',
  };

  return (
    <KingdomPickCard>
      <KingdomPickIcon
        src={PickCryptoUrl}
        width={240}
        height={180}
        alt="pick-crypto-img"
        priority
      />
      <KingdomPickTitlesStyled>
        <KingdomPickTitle $kingdom="crypto">
          <KingdomPickTitleText
            content={t('kingdoms.crypto.title')}
            secondaryColor="rgba(255, 48, 179, 0.6)"
            size={1.6}
          />
        </KingdomPickTitle>
        <KingdomPickSubtitle>{t('kingdoms.crypto.subtitle')}</KingdomPickSubtitle>
      </KingdomPickTitlesStyled>
      <KingdomPickStats
        stats={[
          {
            production: '+',
            children: (
              <Item
                icon={
                  <Crypto
                    width={18}
                    height={18}
                  />
                }
                content={t('resources.crypto')}
                secondaryColor={colors.crypto}
              />
            ),
          },
          {
            production: '+',
            children: (
              <Item
                icon={
                  <Heat
                    width={18}
                    height={18}
                  />
                }
                content={t('resources.heat')}
                secondaryColor={colors.heat}
              />
            ),
          },
        ]}
      />
    </KingdomPickCard>
  );
};
