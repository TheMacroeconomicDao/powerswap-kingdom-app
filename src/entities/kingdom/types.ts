export type KingdomType = 'crypto' | 'heat' | 'energy' | 'food';
export const KingdomTypeArray: KingdomType[] = ['crypto', 'heat', 'energy', 'food'];

export type KingdomTier = 1 | 2 | 3 | 4;

export type KingdomStateUnitType = 'locked' | 'opened' | 'available';

export type AvailableKingdomsDataType = {
  data: {
    name: KingdomType;
    current: number;
    state: KingdomStateUnitType;
  }[];
};
