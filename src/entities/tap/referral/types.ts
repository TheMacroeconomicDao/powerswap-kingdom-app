import { ResultType } from '@/shared/types';
export type TapDataType = {
  result: ResultType;
  data: {
    referrals_points: number;
  };
};

export type PostTapParams = { referralTaps: number };
