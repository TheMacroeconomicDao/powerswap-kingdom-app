import { KingdomType } from '@/entities/kingdom';

export type LastOpenedPageType = 'game' | 'referral';

export type LastActiveResourceType = KingdomType;

export type UpdateStateProps = {
  userId: number | null;
  lastActiveResource: LastActiveResourceType | null;
  lastOpenedPage: LastOpenedPageType | null;
};

export type UpdateStateType = {
  data: {
    state: {
      last_active_resource: LastActiveResourceType;
      last_opened_page: LastOpenedPageType;
    };
  };
};
