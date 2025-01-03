import { KingdomType, LastOpenedPageType, LastActiveResourceType } from '@/entities';

export type UserType = {
  data: {
    id: number;
    user_id: number;
    user_name: string;
    tokens_amount: number;
    referrals_tokens_amount: number;
    tap_multiplier: number;
    resources_amount: {
      [kingdomType in KingdomType]: {
        value: number;
      };
    };
    game_information: {
      current_level: number;
    };
    upgrades_information: {
      miner: {
        level: number;
        multiplier: number;
      };
      grower: {
        level: number;
        multiplier: number;
      };
      power: {
        level: number;
        multiplier: number;
      };
    };
    state: {
      last_active_resource: LastActiveResourceType;
      last_opened_page: LastOpenedPageType;
      referral_enabled: boolean;
    };
  };
};

export type CreateUserParams = { userId: number };

export type GetUserParams = { userId: number };

export type UpdateUserParams = {
  userId: number;
  username: string;
};
