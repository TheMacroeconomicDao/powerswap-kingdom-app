import { ResultType } from '@/shared/types';
export type TapRefDataType = {
  result: ResultType;
  data: {
    referrals_points: number;
  };
};

export type PostTapRefParams = { referralTaps: number };
