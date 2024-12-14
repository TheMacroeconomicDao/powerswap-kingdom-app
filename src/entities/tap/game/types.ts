import { ResultType } from '@/shared/types';
import { ResourceType } from '../../resources-pool';

export type TapDataType = {
  result: ResultType;
  data: {
    tokens_amount: number;
  };
};

export type PostTapParams = { resourcesId: ResourceType; taps: number };
