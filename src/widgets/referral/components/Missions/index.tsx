import { RefsApiData } from '@/entities';

import InviteQuests from './invite-quests';

export const Missions = ({ title, refs }: { title: string; refs: RefsApiData['data'] }) => {
  return (
    <div className="mb-6 mt-5 flex flex-col gap-2">
      <h6 className="text-lg uppercase text-white">{title}</h6>
      <InviteQuests refsCount={refs.referrals_count} />
    </div>
  );
};
