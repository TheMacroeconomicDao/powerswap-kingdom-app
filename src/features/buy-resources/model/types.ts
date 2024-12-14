import { TokensType } from '@/entities/auth';
import { PoolResourcesDataType, ResourceType } from '@/entities/resources-pool';
import { UserType } from '@/entities';

export type BuyResourcesFromPoolParams = {
  userId?: number;
  resourceKey?: ResourceType;
  amount?: number;
};

export type BuyResourcesFromPoolDataType = {
  data: { user: UserType['data'] } & PoolResourcesDataType['data'];
};
