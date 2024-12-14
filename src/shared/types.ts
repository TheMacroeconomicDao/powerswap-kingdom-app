import { KingdomStateUnitType, PoolResourceType } from '@/entities';

export type ResultType = 'success' | 'failed';

export type ResourceWithStateType = PoolResourceType & { state: KingdomStateUnitType };
