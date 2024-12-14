import { KingdomStateUnitType } from '@/entities/kingdom';
import { ResourceType } from '@/entities/resources-pool';

export type GetResourcesParams = { userId: number };

export type UserResourceType = {
  cost: number;
  name: ResourceType;
  state: KingdomStateUnitType;
  current: number;
  total: number;
};

export type UserResourcesType = {
  data: {
    entities: UserResourceType[];
  };
};
