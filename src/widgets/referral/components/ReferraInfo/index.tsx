'use client';

// import { useTranslation } from 'react-i18next';

// import { Languages } from "@/shared/utils/langTypes";

import { formatNumber } from '@/shared/utils/formatNumber';
import { useTranslation } from 'react-i18next';

export const ReferralInfo = ({
  refPoints = 0,
  refStatus,
}: {
  refPoints: number;
  refStatus: boolean;
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.referralInfo',
  });
  return (
    <div className="mt-1 flex flex-col items-center gap-2">
      {!refStatus && <h6 className="text-[1.4rem]">{t('title')}</h6>}
      <h4 className="text-[1.4rem] font-black text-white">{formatNumber(refPoints)}</h4>
    </div>
  );
};
