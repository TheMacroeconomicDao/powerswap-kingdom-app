'use client';

import { Link } from '@/shared/ui/components/Link/ui';
import TelegramBlue from './assets/telegram-blue.svg';
import XWhite from './assets/x-icon.svg';
import Web from './assets/website-icon.svg';
import { useTranslation } from 'react-i18next';

export const SocialLinks = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.aboutUs.sections.socials',
  });

  return (
    <div className="mx-auto flex size-max justify-between gap-8">
      <div className="flex flex-col gap-3">
        <Link
          href={`${process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL}`}
          className="flex items-center gap-2"
        >
          <TelegramBlue className="h-6 w-6" />
          <h6 className="text-sm uppercase text-white">{t('telegramChannel')}</h6>
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_TELEGRAM_GROUP_URL}`}
          className="flex items-center gap-2"
        >
          <TelegramBlue className="h-6 w-6" />
          <h6 className="text-sm uppercase text-white">{t('telegramGroup')}</h6>
        </Link>
      </div>
      <div className="flex flex-grow items-start justify-center gap-4">
        <Link href={`${process.env.NEXT_PUBLIC_X_URL}`}>
          <XWhite className="h-6 w-6" />
        </Link>

        <Link href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}`}>
          <Web className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
