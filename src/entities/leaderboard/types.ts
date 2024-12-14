export type LeaderboardUnitType = {
  id: number;
  user_id: number;
  user_name: string;
  tokens_amount: number;
  referrals_tokens_amount: number;
  state: {
    last_active_resource: string;
    last_opened_page: string;
  };
};

export type LeaderboardDataType = {
  data: LeaderboardUnitType[];
};
