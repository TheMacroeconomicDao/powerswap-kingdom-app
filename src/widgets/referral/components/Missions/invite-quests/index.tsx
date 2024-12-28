'use client';

import InviteQuest from './invite-quest';

const InviteQuests = ({ refsCount = 0 }: { refsCount: number }) => {
  return (
    <div className="flex select-none flex-col gap-2">
      <InviteQuest
        numberToInvite={10}
        invited={refsCount}
      />
      <InviteQuest
        numberToInvite={100}
        invited={refsCount}
      />
      <InviteQuest
        numberToInvite={150}
        invited={refsCount}
      />
    </div>
  );
};

export default InviteQuests;
