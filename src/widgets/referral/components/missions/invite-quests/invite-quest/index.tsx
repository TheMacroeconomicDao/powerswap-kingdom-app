'use client';

import QuestProgress from './quest-progress';

import { useTranslation } from 'react-i18next';

const InviteQuest = ({ numberToInvite, invited }: { numberToInvite: number; invited: number }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.sections.quests.inviteQuests',
  });

  return (
    <div>
      <h6 className="text-sm uppercase text-white">{t(`invite${numberToInvite}`)}</h6>
      <QuestProgress progress={(invited / numberToInvite) * 100} />
    </div>
  );
};

export default InviteQuest;
