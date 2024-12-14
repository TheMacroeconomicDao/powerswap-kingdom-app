export type TokensType = {
  access: string;
  refresh: string;
};

export type AuthDataType = {
  data: {
    access_token: string;
    refresh_token: string;
  };
};
