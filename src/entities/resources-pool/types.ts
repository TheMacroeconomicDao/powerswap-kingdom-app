import { KingdomStateUnitType } from '../kingdom';

export type ResourceType = 'crypto' | 'heat' | 'food' | 'energy';

export type PoolResourceType = {
  name: ResourceType;
  cost: number;
  current: number;
  total: number;
};

export type PoolResourcesDataType = {
  data: {
    entities: PoolResourceType[];
    shared_resources: number;
    shared_total_resources: number;
    start_reset_time: number;
    end_reset_time: number;
  };
};
