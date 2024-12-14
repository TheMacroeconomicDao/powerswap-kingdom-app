import { KingdomType } from './types';
import { ResourceType } from '../resources-pool';

export const kingdomToResource: {
  [kingdomType in KingdomType]: ResourceType;
} = {
  crypto: 'crypto',
  energy: 'energy',
  heat: 'heat',
  food: 'food',
};
