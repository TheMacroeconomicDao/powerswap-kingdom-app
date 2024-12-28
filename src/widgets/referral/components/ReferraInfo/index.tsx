'use client';

// import { useTranslation } from 'react-i18next';

// import { Languages } from "@/shared/utils/langTypes";

import { formatNumber } from '@/shared/utils/formatNumber';

export const ReferralInfo = ({ refPoints = 0 }: { refPoints: number }) => {
  return (
    <div className="mt-1 flex flex-col items-center">
      <h6 className="text-sm uppercase text-white">PSWMeta Points</h6>
      <h4 className="text-white">{formatNumber(refPoints)}</h4>
    </div>
  );
};
