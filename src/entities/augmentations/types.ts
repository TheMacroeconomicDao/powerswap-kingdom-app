export interface UpgradesDataType {
    data: {
      id: number;
      name: string;
      description: string;
      cost: number[];
      increase_multiplier: number;
      max_level: number;
    };
  }